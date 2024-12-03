import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { ToastContainer } from "react-toastify";

import { Footer, Header, Loader } from "./_components/IndexComponents";

import { setProducts } from "./store/Slices/ItemsSlice";

import { useGetProducts } from "./hooks/useProducts";
import { useRoutes } from "./hooks/useRoutes";

import { ScrollToTop } from "./utils/ScrollToTop";

import AppRoute from "./routes/AppRoute";

import "react-toastify/dist/ReactToastify.css";
import "./App.scss";
import { useGetMe } from "./hooks/useUser";
import { login } from "./store/Slices/UserSlice";

function App() {
  const dispatch = useDispatch();

  const { data, status } = useGetProducts();
  const { data: refreshUser, isLoading } = useGetMe();

  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    if (data) dispatch(setProducts({ data, status }));
  }, [data, dispatch, status]);

  useEffect(() => {
    if (refreshUser?.data?.token) dispatch(login(refreshUser?.data));
  }, [refreshUser?.data, dispatch]);

  const { routes } = useRoutes();

  return (
    <>
      <Header />
      <ScrollToTop />
      {isLoading ? <Loader /> : <AppRoute routes={routes} user={user} />}
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
