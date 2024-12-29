import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from '../../services/store';
import {
  isInitSelector,
  isLoadingSelector
} from '../../services/slices/userSlice';
import { Preloader } from '../ui/preloader';

interface IProtectedRouteProps {
  children: React.ReactElement;
  onlyUnAuth: boolean;
}

const ProtectedRoute = ({ children, onlyUnAuth }: IProtectedRouteProps) => {
  const isInit: boolean = useSelector(isInitSelector);
  const isLoading: boolean = useSelector(isLoadingSelector);
  const location = useLocation();

  if (isLoading) return <Preloader />;
  if (!onlyUnAuth && !isInit) return <Navigate replace to='/login' />;

  if (onlyUnAuth && isInit) {
    const from = location.state?.from || { pathname: '/' };
    return <Navigate replace to={from} />;
  }

  return children;
};

export default ProtectedRoute;
