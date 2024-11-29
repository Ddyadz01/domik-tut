import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { ToastContainer } from 'react-toastify';

import { Footer, Header } from './_components/IndexComponents';

import { setProducts } from './store/Slices/ItemsSlice';
import { setFavorite } from './store/Slices/UserSlice';

import { useGetProducts } from './hooks/useProducts';
import { useRoutes } from './hooks/useRoutes';
import { useFavorites } from './hooks/useUser';

import { ScrollToTop } from './utils/ScrollToTop';

import HeaderDevelopment from './develompentComponents/HeaderDevelopment/HeaderDevelopment';

import AppRoute from './routes/AppRoute';

import 'react-toastify/dist/ReactToastify.css';
import './App.scss';

function App() {
  const dispatch = useDispatch();

  const { data, status } = useGetProducts();
  const { data: favorites } = useFavorites();

  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(setProducts({ data, status }));
  }, [data]);

  useEffect(() => {
    dispatch(setFavorite({ favorites }));
  }, [favorites]);

  const { routes } = useRoutes();

  return (
    <>
      <Header />
      <HeaderDevelopment />
      <ScrollToTop />
      <AppRoute routes={routes} user={user} />
      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
