import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';

interface IProtectedRoute {
  element: React.ReactElement;
  isAuth: boolean;
}

// const ProtectedRoute: FC<IProtectedRoute> = ({ element, isAuth = false }) => {
//   const location = useLocation();
// };

// export default ProtectedRoute;
