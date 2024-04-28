import { Typography } from '@mui/material';
import TasksPreviewTable from '../../components/TasksPreviewTable';
import styles from './home.module.scss';
import { useAppSelector } from '../../hooks/customDispatch';

const HomePage = () => {
  const { tasksList } = useAppSelector((state) => state.tasks);

  return (
    <div className={styles.wrapper}>
      {tasksList.length > 0 ? (
        <>
          <Typography variant="h4">Всі завдання</Typography>
          <TasksPreviewTable tasksData={tasksList} />
        </>
      ) : (
        <Typography variant="h4">У вас ще немає завдань</Typography>
      )}
    </div>
  );
};

export default HomePage;
