import ContactForm from '../ContactForm/ContactForm';
import { Routes, Route } from 'react-router-dom';

import { RegisterPage } from '../Register/RegisterPage';
import { Login } from '../Login/Login';
import { useFetchCurrentUserQuery } from 'shared/authAPI';
import { useSelector } from 'react-redux';
import { getToken } from 'redux/auth/auth-slice';
import PrivateRoute from '../Routes/PrivatRoute';
import PublicRoute from '../Routes/PublicRoute';
import { AppBar } from 'components/AppBar/AppBar';

export default function App() {
  const token = useSelector(getToken);
  useFetchCurrentUserQuery(null, { skip: !token });
  return (
    <>
      <AppBar />
      <Routes>
        <Route
          path="register"
          element={
            <PublicRoute restricted>
              <RegisterPage />
            </PublicRoute>
          }
        />
        <Route
          path="login"
          element={
            <PublicRoute restricted>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute>
              <ContactForm />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}
