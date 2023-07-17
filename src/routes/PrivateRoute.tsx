import { useAppSelector } from '@/redux/hook';
import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface IProps {
  children: ReactNode;
}

export default function PrivateRoute({ children }: IProps) {
  const pathname = useLocation();
  const { user, isLoading } = useAppSelector((state) => state.user);

  if (isLoading) return <p>Loading...</p>;

  if (!user.email && !isLoading)
    return <Navigate to="/login" state={{ path: pathname }} replace />;

  return children;
}
