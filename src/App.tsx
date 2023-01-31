import { Navigate, Route, Routes } from 'react-router-dom';
import { ROUTES } from './app/routes';
import { PrivateRoute } from './components/PrivateRoute';
import { Login } from './views/Login';
import { Home } from './views/Home';
import { Map } from './components/Map';
import { Data } from './views/Data';
import { Secondary } from './views/Secondary';
import { useSelector } from 'react-redux';
import { RootState } from './app/redux/store';

export const App = () => {
  const userData = useSelector((state: RootState) => state.user);

  return (
    <Routes>
      <Route index element={<Navigate to={ROUTES.home} />} />
      <Route path={ROUTES.login} element={<Login />} />
      <Route path={ROUTES.home} element={
        <PrivateRoute sessionKey={userData.key}>
          <Home />
        </PrivateRoute>
      } />
      <Route path={ROUTES.map} element={<PrivateRoute sessionKey={userData.key}><Map /></PrivateRoute>}>
        <Route path={ROUTES.secondary} element={<Secondary />} />
        <Route path={ROUTES.data} element={<Data />} />
      </Route>
    </Routes>
  );
};
