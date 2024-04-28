import { Typography } from '@mui/material';
import TasksPreviewTable from '../../components/TasksPreviewTable';
import { useAppSelector } from '../../hooks/customDispatch';
import { selectDeletedTasks } from '../../models/todoSlice';

const DeletedTasks = () => {
  const deletedTasks = useAppSelector(selectDeletedTasks);

  return (
    <div>
      {deletedTasks.length > 0 ? (
        <>
          <Typography variant="h4">Видаленні Завдання</Typography>
          <TasksPreviewTable tasksData={deletedTasks} />
        </>
      ) : (
        <Typography variant="h4">У вас немає видалених Завдань</Typography>
      )}
    </div>
  );
};

export default DeletedTasks;
