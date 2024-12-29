import {
  ConstructorPage,
  Feed,
  ForgotPassword,
  Login,
  NotFound404,
  Profile,
  ProfileOrders,
  Register,
  ResetPassword
} from '@pages';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import '../../index.css';
import styles from './app.module.css';

import { AppHeader, IngredientDetails, Modal, OrderInfo } from '@components';
import { useDispatch } from '../../services/store';
import { getIngredients } from '../../services/actions/ingredientsActions';
import { useEffect } from 'react';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { getCookie } from '../../utils/cookie';
import { getUser } from '../../services/actions/userActions';
import { ModalsContentToPage } from '../../pages/modalsContentToPage';

const App = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const accessToken = getCookie('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');
  const location = useLocation();
  const backgroundPage = location.state?.background;

  const closePopap = () => navigate(-1);

  useEffect(() => {
    dispatch(getIngredients());
  }, []);

  useEffect(() => {
    dispatch(getUser());
  }, [accessToken, refreshToken]);

  return (
    <div className={styles.app}>
      <AppHeader />
      <Routes location={backgroundPage || location}>
        <Route path='/' element={<ConstructorPage />} />
        <Route path='/feed' element={<Feed />} />
        <Route
          path='/login'
          element={
            <ProtectedRoute onlyUnAuth>
              <Login />
            </ProtectedRoute>
          }
        />
        <Route
          path='/register'
          element={
            <ProtectedRoute onlyUnAuth>
              <Register />
            </ProtectedRoute>
          }
        />
        <Route
          path='/forgot-password'
          element={
            <ProtectedRoute onlyUnAuth>
              <ForgotPassword />
            </ProtectedRoute>
          }
        />
        <Route
          path='/reset-password'
          element={
            <ProtectedRoute onlyUnAuth>
              <ResetPassword />
            </ProtectedRoute>
          }
        />
        <Route path='/profile'>
          <Route
            index
            element={
              <ProtectedRoute onlyUnAuth={false}>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path='orders'
            element={
              <ProtectedRoute onlyUnAuth={false}>
                <ProfileOrders />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route path='*' element={<NotFound404 />} />
        <Route
          path='/ingredients/:id'
          element={
            <ModalsContentToPage title='Детали ингредиента'>
              <IngredientDetails />
            </ModalsContentToPage>
          }
        />
        <Route
          path='/feed/:number'
          element={
            <ModalsContentToPage title='Детали заказа'>
              <OrderInfo />
            </ModalsContentToPage>
          }
        />
        <Route
          path='/ingredients/:id'
          element={
            <ModalsContentToPage title='Детали заказа'>
              <OrderInfo />
            </ModalsContentToPage>
          }
        />
      </Routes>

      {backgroundPage && (
        <Routes>
          <Route
            path='/ingredients/:id'
            element={
              <Modal
                children={<IngredientDetails />}
                title='Детали ингредиента'
                onClose={closePopap}
              />
            }
          />
          <Route
            path='/feed/:number'
            element={
              <Modal
                children={<OrderInfo />}
                title='Детали заказа'
                onClose={closePopap}
              />
            }
          />
          <Route
            path='/profile/orders/:number'
            element={
              <Modal
                children={<OrderInfo />}
                title='Детали заказа'
                onClose={closePopap}
              />
            }
          />
        </Routes>
      )}
    </div>
  );
};

export default App;
