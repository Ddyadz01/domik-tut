import { Navigate, useLocation } from "react-router";

const PrivateRoutes = ({ user, children }) => {
  const location = useLocation();

  // Проверка наличия токена пользователя
  if (!user.token) {
    // Перенаправление на страницу "не найдено", если токен отсутствует
    return <Navigate to="/not-found" state={{ from: location.pathname }} />;
  }

  // Возвращаем дочерние элементы, если пользователь авторизован
  return children;
};

export default PrivateRoutes;
