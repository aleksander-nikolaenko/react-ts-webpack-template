import { Suspense } from 'react';

import { AppRoutes } from 'routes';

import './styles/global.scss';
import './styles/variables.scss';

export const App = () => {
  return (
    <>
      <Suspense fallback={<p>Loading..</p>}>
        <AppRoutes />
      </Suspense>
    </>
  );
};
