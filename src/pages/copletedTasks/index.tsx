import { Typography } from '@mui/material';
import TasksPreviewTable from '../../components/TasksPreviewTable';
import { useAppSelector } from '../../hooks/customDispatch';
import { selectCompletedTasks } from '../../models/todoSlice';

const CompletedTasks = () => {
  const completedTasks = useAppSelector(selectCompletedTasks);

  return (
    <div>
      {completedTasks.length > 0 ? (
        <>
          <Typography variant="h4">Завершенні Завдання</Typography>
          <TasksPreviewTable tasksData={completedTasks} />
        </>
      ) : (
        <Typography variant="h4">У вас немає Завершених Завдань</Typography>
      )}
    </div>
  );
};

export default CompletedTasks;
