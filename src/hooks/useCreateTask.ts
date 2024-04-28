import { useState } from 'react';
import { ITask } from '../types/toDoList';
import { useAppDispatch } from './customDispatch';
import { changeStatusTask } from '../models/todoSlice';
import { TaskStatuses } from '../constants/task';

export const useTaskHandler = () => {
  const dispatch = useAppDispatch();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null | undefined>();

  const [openActionMenu, setOpenActionMenu] = useState<string | null>(null);

  const handleOpenOptionMenu = (id: ITask['id'], event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setOpenActionMenu(id);
  };

  const handleCloseOptionsMenu = () => setOpenActionMenu(null);
  const handleDelete = (id: string) => {
    dispatch(changeStatusTask({ id, status: TaskStatuses.DELETED }));
    handleCloseOptionsMenu();
  };
  const handleComplete = (id: string) => {
    dispatch(changeStatusTask({ id, status: TaskStatuses.COMPLETED }));
    handleCloseOptionsMenu();
  };

  return {
    anchorEl,
    openActionMenu,
    handleDelete,
    handleComplete,
    handleOpenOptionMenu,
    handleCloseOptionsMenu,
  };
};
