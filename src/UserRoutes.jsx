import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import PublicRoute from 'components/PublicRoute/PublicRoute';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage';
import ContactsPage from 'pages/ContactsPage';

// const RegisterPage = lazy(() => import('./pages/RegisterPage'));
// const LoginPage = lazy(() => import('./pages/LoginPage'));
// const ContactsPage = lazy(() => import('./pages/ContactsPage'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<h1>Loading Page...</h1>}>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
