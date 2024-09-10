import { ConstructorPage, Feed } from '@pages';
import '../../index.css';
import styles from './app.module.css';

import { AppHeader } from '@components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => (
  <div className={styles.app}>
    <AppHeader /> 
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ConstructorPage />} />
        <Route path='/feed' element={<Feed />} />
      </Routes>
    </BrowserRouter>   
  </div>
);

export default App;
