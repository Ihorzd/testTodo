export enum RootURLS {
  HOME_URL = '/',
  CREATE_TASKS = '/create-task',
  COMPLETED_TASKS = '/completed-tasks',
  NOT_COMPLETED_TASKS = '/not-compleneted-tasks',
  DELETED_TASKS = '/deleted-tasks',
}

export const navItems = [
  {
    title: 'Всі Завдання',
    navigateTo: RootURLS.HOME_URL,
  },
  {
    title: 'Завершені',
    navigateTo: RootURLS.COMPLETED_TASKS,
  },
  {
    title: 'Не завершені',
    navigateTo: RootURLS.NOT_COMPLETED_TASKS,
  },
  {
    title: 'Видалені',
    navigateTo: RootURLS.DELETED_TASKS,
  },
];
