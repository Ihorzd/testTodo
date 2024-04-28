import { Outlet } from 'react-router-dom';
import LayoutDrawer from '../../components/drawer';

const Layout = () => {
  return (
    <LayoutDrawer>
      <Outlet />
    </LayoutDrawer>
  );
};

export default Layout;
