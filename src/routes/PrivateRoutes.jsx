import { Navigate, useLocation } from 'react-router';

const PrivateRoutes = ({ user, children }) => {
  const location = useLocation();
  if (!user.token) {
    return <Navigate to="/not-found" state={{ from: location.pathname }} />;
  }

  return children;
};

export default PrivateRoutes;
