import { Typography } from '@mui/material';
import TasksPreviewTable from '../../components/TasksPreviewTable';
import { useAppSelector } from '../../hooks/customDispatch';
import { selectNotCompletedTasks } from '../../models/todoSlice';

const NotCompletedTasks = () => {
    const completedTasks = useAppSelector(selectNotCompletedTasks);

    return (
        <div>
            {completedTasks.length > 0 ? (
                <>
                    <Typography variant="h4">Не виконані Завдання</Typography>
                    <TasksPreviewTable tasksData={completedTasks} />
                </>
            ) : (
                <Typography variant="h4">У вас немає не виконаних Завдань</Typography>
            )}
        </div>
    );
};

export default NotCompletedTasks;
