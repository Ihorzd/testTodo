import { ITask } from '../../types/toDoList';
import { tableHeadTitles } from '../../constants/tasks-table';
import TableRowTask from '../taskCard';
import { useTaskHandler } from '../../hooks/useCreateTask';
import { useTablePagination } from '../../hooks/useTablepagination';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';
import styles from './taskspreviewTable.module.scss';

interface ITasksPreviewTableProps {
  tasksData: Array<ITask>;
}

const TasksPreviewTable = ({ tasksData }: ITasksPreviewTableProps) => {

  const { anchorEl, openActionMenu, handleDelete, handleOpenOptionMenu, handleCloseOptionsMenu, handleComplete } = useTaskHandler();
  const { page, rowsPerPage, handleChangePage, handleChangeRowsPerPage } = useTablePagination();

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {tableHeadTitles.map((item) => (
              <TableCell key={item} className={styles.tableHead}>
                {item}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? tasksData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : tasksData
          ).map((task, index) => (
            <TableRowTask
              key={index}
              id={task.id}
              title={task.title}
              status={task.status}
              description={task.description}
              date={task.date}
              priority={task.priority}
              anchorEl={anchorEl}
              openActionMenu={openActionMenu}
              handleDelete={handleDelete}
              handleOpenOptionMenu={handleOpenOptionMenu}
              handleCloseOptionsMenu={handleCloseOptionsMenu}
              handleComplete={handleComplete}
            />
          ))}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={6}
              count={tasksData.length}
              rowsPerPage={rowsPerPage}
              page={page}
              slotProps={{
                select: {
                  inputProps: {
                    'aria-label': 'rows per page',
                  },
                  native: true,
                },
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

export default TasksPreviewTable;
