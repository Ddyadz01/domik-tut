import { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

import { About, CatalogPage, Home, Profile } from '../_pages/IndexPages';
const routesIndex = [
  {
    id: 1,
    path: '/',
    element: <Home />,
    title: 'Главная',
    type: 'public',
    isShowNav: true,
    status: 'active',
  },
  {
    id: 2,
    path: '/profile',
    element: <Profile />,
    title: 'Профиль',
    type: 'private',
    isShowNav: false,
    status: 'active',
  },

  {
    id: 4,
    path: '/about',
    element: <About />,
    title: 'Мои заявки',
    type: 'private',
    isShowNav: true,
    status: 'active',
  },
  {
    id: 5,
    path: '/catalog',
    element: <CatalogPage />,
    title: 'Каталог',
    type: 'public',
    isShowNav: true,
    status: 'active',
  },
];
export const useRoutes = () => {
  const [routes, setRoutes] = useState([]);
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    if (user?.token) {
      setRoutes(routesIndex.filter((route) => route.status === 'active'));
    } else {
      setRoutes(
        routesIndex.filter((route) => (route.status === 'active') & (route.type === 'public')),
      );
    }
  }, [user]);

  return {
    routes,
  };
};
