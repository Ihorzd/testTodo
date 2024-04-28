import { TaskStatuses } from '../constants/task';
import { RootState } from '../store';
import { ITask, ITaskForm } from './../types/toDoList';
import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit';

export interface TasksState {
  tasksList: ITask[];
}

const initialState: TasksState = {
  tasksList: [],
};

export const todoSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, { payload }: PayloadAction<ITaskForm>) => {
      state.tasksList.push({
        ...payload,
        id: Math.random().toString().split('.')[1].slice(0),

        status: TaskStatuses.NOT_COMPLETED,
        date: new Date().toISOString(),
      });
    },

    changeStatusTask: (
      state,
      {
        payload,
      }: PayloadAction<{ id: string; status: TaskStatuses.DELETED | TaskStatuses.COMPLETED }>
    ) => {
      const { id, status } = payload;
      state.tasksList = state.tasksList.map((task) => {
        if (task.id == id) {
          task.status = status;
        }
        return task;
      });
    },
  },
});

export const { addTask, changeStatusTask } = todoSlice.actions;

export const tasks = (state: RootState): ITask[] => {
  return state.tasks.tasksList;
};

export const selectDeletedTasks = createSelector(tasks, (deletedTasks) =>
  deletedTasks.filter((task) => task.status === TaskStatuses.DELETED)
);

export const selectCompletedTasks = createSelector(tasks, (completedTasks) =>
  completedTasks.filter((tasks) => tasks.status === TaskStatuses.COMPLETED)
);

export const selectNotCompletedTasks = createSelector(tasks, (notCompletedTasks) =>
  notCompletedTasks.filter((tasks) => tasks.status === TaskStatuses.NOT_COMPLETED)
);
