import React from 'react';
import { Route, Routes } from 'react-router';
import PrivateRoutes from './PrivateRoutes';
import { NotFound, ProductPage } from '../_pages/IndexPages';

// eslint-disable-next-line react/display-name
const AppRoute = React.memo(({ routes, user }) => {
  return (
    <Routes>
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="*" element={<NotFound />} />

      {routes.map((route) => (
        <Route
          key={route.id}
          path={route.path}
          element={
            route.type === 'private' ? (
              <PrivateRoutes user={user}>{route.element}</PrivateRoutes>
            ) : (
              route.element
            )
          }
        />
      ))}
    </Routes>
  );
});

export default AppRoute;
