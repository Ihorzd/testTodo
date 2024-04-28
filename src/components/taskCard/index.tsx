import React from 'react';
import { Button, Menu, MenuItem, TableCell, TableRow, Typography } from '@mui/material';
import { ITask } from '../../types/toDoList';
import moment from 'moment';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import styles from './tableRowTask.module.scss';

interface ITaskCardProps extends ITask {
  anchorEl: HTMLElement | null | undefined;
  openActionMenu: string | null;
  handleDelete: (id: ITask['id']) => void;
  handleOpenOptionMenu: (id: ITask['id'], event: React.MouseEvent<HTMLButtonElement>) => void;
  handleComplete: (id: ITask['id']) => void;
  handleCloseOptionsMenu: () => void;
}

const TableRowTask = ({
  title,
  description,
  date,
  priority,
  id,
  status,
  openActionMenu,
  anchorEl,
  handleOpenOptionMenu,
  handleCloseOptionsMenu,
  handleComplete,
  handleDelete,
}: ITaskCardProps) => {
  return (
    <TableRow>
      <TableCell>{title}</TableCell>
      <TableCell>{description}</TableCell>
      <TableCell>{priority}</TableCell>
      <TableCell>{moment(date).format('YYYY-MM-DD | HH:mm')}</TableCell>
      <TableCell>{status}</TableCell>
      <TableCell sx={{ textAlign: 'center' }}>
        <Button
          id="basic-button"
          onClick={(event) => {
            handleOpenOptionMenu(id, event);
          }}
        >
          <MoreHorizIcon sx={{ color: 'black' }} />
        </Button>

        <Menu
          id="action-menu"
          className={styles.actionsMenu}
          anchorEl={anchorEl}
          open={openActionMenu === id}
          onClose={handleCloseOptionsMenu}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem
            className={styles.menuItemWrapper}
            onClick={() => {
              handleComplete(id);
            }}
          >
            <CreateOutlinedIcon className={styles.icon} />
            <Typography>Позначити як виконане</Typography>
          </MenuItem>

          <MenuItem
            className={styles.menuItemWrapper}
            onClick={() => {
              handleDelete(id);
            }}
          >
            <DeleteForeverOutlinedIcon className={styles.icon} color="error" />
            <Typography color={'error'}>Позначити як видалене</Typography>
          </MenuItem>
        </Menu>
      </TableCell>
    </TableRow>
  );
};

export default TableRowTask;
