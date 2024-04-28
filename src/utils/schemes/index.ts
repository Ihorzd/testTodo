import * as yup from 'yup';
import { ITaskForm } from '../../types/toDoList';

export const createTaskSchema: yup.ObjectSchema<ITaskForm> = yup
  .object()
  .shape({
    title: yup.string().required(`Поле Назва обов'язкове`),
    description: yup.string().required(`Поле Опис обов'язкове`),
    priority: yup.string().required(`Поле Пріоритет обов'язкове`),
  });
