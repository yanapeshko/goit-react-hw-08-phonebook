import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import UserMenu from 'components/UserMenu';
import { current } from 'redux/auth/auth-operations';
import UserRoutes from '../../UserRoutes';
import s from './App.module.css';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);
  return (
    <div className={s.main_container}>
      <UserMenu />
      <UserRoutes />
    </div>
  );
}
