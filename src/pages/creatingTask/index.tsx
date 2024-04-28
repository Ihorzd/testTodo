import { Button, Card, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch } from '../../hooks/customDispatch';
import { addTask } from '../../models/todoSlice';
import { useNavigate } from 'react-router-dom';
import { priorityData } from '../../constants/task';
import { RootURLS } from '../../constants/app-urls';
import { createTaskSchema } from '../../utils/schemes';
import { ITaskForm } from '../../types/toDoList';
import styles from './taskHandler.module.scss';

const CreatingTask = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createTaskSchema),
  });

  const onCreateTask = (values: ITaskForm) => {
    dispatch(addTask(values));
    navigate(RootURLS.HOME_URL);
  };

  return (
    <div className={styles.wrapper}>
      <Typography className={styles.pageTitle} variant="h4">
        Створення завдання
      </Typography>
      <Card component={'form'} className={styles.creatingCard}>
        <InputLabel>Назва Завдання</InputLabel>
        <TextField {...register('title')} size="small" id="outlined-multiline-flexible" />
        <Typography color={'error'}>{errors.title?.message}</Typography>
        <textarea
          className={styles.description}
          {...register('description')}
          placeholder="Description"
        />
        <Typography color={'error'}>{errors.description?.message}</Typography>
        <InputLabel id="priority-label">Пріоритет</InputLabel>
        <Select
          labelId="priority-label"
          {...register('priority')}
          defaultValue={priorityData[0]}
          size="small"
        >
          {priorityData.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
        <Typography color={'error'}>{errors.priority?.message}</Typography>
        <Button type="submit" onClick={handleSubmit(onCreateTask)}>
          Створити Завдання
        </Button>
      </Card>
    </div>
  );
};

export default CreatingTask;
