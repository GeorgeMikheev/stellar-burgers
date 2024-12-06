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
import { Routes, Route, useNavigate } from 'react-router-dom';
import '../../index.css';
import styles from './app.module.css';

import { AppHeader, IngredientDetails, Modal, OrderInfo } from '@components';
import { useDispatch } from '../../services/store';
import { getIngredients } from '../../services/actions/ingredientsActions';
import { useEffect } from 'react';

const App = () => {
  const navigate = useNavigate();

  const closePopap = () => navigate(-1);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, []);

  return (
    <div className={styles.app}>
      <AppHeader />
      <Routes>
        <Route path='/' element={<ConstructorPage />} />
        <Route path='/feed' element={<Feed />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/profile/orders' element={<ProfileOrders />} />
        <Route path='*' element={<NotFound404 />} />
        <Route
          path='/feed/:number'
          element={
            <Modal children={<OrderInfo />} title='' onClose={closePopap} />
          }
        />
        <Route
          path='/ingredients/:id'
          element={
            <Modal
              children={<IngredientDetails />}
              title=''
              onClose={closePopap}
            />
          }
        />
        <Route
          path='/profile/orders/:number'
          element={
            <Modal children={<OrderInfo />} title='' onClose={closePopap} />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
