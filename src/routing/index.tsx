import { createBrowserRouter } from 'react-router-dom';
import { RootURLS } from '../constants/app-urls';
import Layout from '../utils/layout';
import CompletedTasks from '../pages/copletedTasks';
import CreatingTask from '../pages/creatingTask';
import DeletedTasks from '../pages/deletedTasks';
import HomePage from '../pages/home';
import NotCompletedTasks from '../pages/notCompleted';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: RootURLS.HOME_URL,
        element: <HomePage />,
      },
      {
        path: RootURLS.CREATE_TASKS,
        element: <CreatingTask />,
      },
      {
        path: RootURLS.DELETED_TASKS,
        element: <DeletedTasks />,
      },
      {
        path: RootURLS.COMPLETED_TASKS,
        element: <CompletedTasks />,
      },
      {
        path: RootURLS.NOT_COMPLETED_TASKS,
        element: <NotCompletedTasks />,
      },
    ],
  },
]);

export { router };
