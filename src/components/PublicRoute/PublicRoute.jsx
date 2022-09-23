import { Navigate, Outlet } from 'react-router-dom';

import useAuth from 'shared/hooks/useAuth';

const PublicRoute = () => {
  const isLogin = useAuth();

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }
  return <Outlet />;
};

export default PublicRoute;
