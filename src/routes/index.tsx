import { useRoutes } from 'react-router-dom';

import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/HomePage';
import UnderDevelopmentPage from 'pages/UnderDevelopmentPage';

import { ROUTES } from './routes.const';

export const AppRoutes = () => {
  const routes = [
    { path: ROUTES.HOME, element: <LoginPage /> },

    { path: ROUTES.REGISTER, element: <RegisterPage /> },

    { path: ROUTES.DASHBOARD, element: <UnderDevelopmentPage /> },

    {
      path: '*',
      element: (
        <h1 style={{ color: 'yellow', fontSize: '24px', textAlign: 'center' }}>
          404 Not Found
        </h1>
      ),
    },
  ];

  const routing = useRoutes(routes);

  return routing;
};
