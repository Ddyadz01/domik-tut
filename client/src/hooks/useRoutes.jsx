import { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

import {
  About,
  CatalogPage,
  FavoritesPage,
  Home,
  LoginPage,
  Profile,
  RegisterPage,
} from '../_pages/IndexPages';

const routesIndex = [
  {
    id: 1,
    path: '/home',
    element: <Home />,
    title: 'Главная',
    type: 'public',
    isShowNav: true,
    status: 'active',
    showAuthUsers: false,
  },
  {
    id: 2,
    path: '/profile',
    element: <Profile />,
    title: 'Профиль',
    type: 'private',
    isShowNav: false,
    status: 'active',
    showAuthUsers: false,
  },

  {
    id: 4,
    path: '/about',
    element: <About />,
    title: 'Мои заявки',
    type: 'private',
    isShowNav: true,
    status: 'active',
    showAuthUsers: false,
  },
  {
    id: 5,
    path: '/catalog',
    element: <CatalogPage />,
    title: 'Каталог',
    type: 'public',
    isShowNav: true,
    status: 'active',
    showAuthUsers: false,
  },
  {
    id: 6,
    path: '/profile/favorites',
    element: <FavoritesPage />,
    title: 'Избранные',
    type: 'private',
    isShowNav: false,
    status: 'active',
    showAuthUsers: false,
  },
  {
    id: 7,
    path: '/auth/register',
    element: <RegisterPage />,
    title: 'Регистрация',
    type: 'public',
    isShowNav: true,
    status: 'active',
    showAuthUsers: true,
  },
  {
    id: 8,
    path: '/auth/login',
    element: <LoginPage />,
    title: 'Войти',
    type: 'public',
    isShowNav: true,
    status: 'active',
    showAuthUsers: true,
  },
];
export const useRoutes = () => {
  const [routes, setRoutes] = useState([]);
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    if (user?.token) {
      setRoutes(routesIndex.filter((route) => (route.status === 'active') & !route.showAuthUsers));
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
