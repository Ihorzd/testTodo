import { TaskStatuses } from '../constants/task';

export type ITaskForm = {
  title: string;
  description: string;
  priority: string;
};

export interface ITask extends ITaskForm {
  id: string;
  status: TaskStatuses.COMPLETED | TaskStatuses.NOT_COMPLETED | TaskStatuses.DELETED;
  date?: string;
}
