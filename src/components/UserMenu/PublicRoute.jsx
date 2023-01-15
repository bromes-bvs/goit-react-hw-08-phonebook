import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function PublicRoute({ component }) {
  const isLogin = useSelector(state => state.users.isLoggedIn);

  return isLogin ? <Navigate to="/" /> : component;
}
