import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { CenterContent } from '../../_components/IndexComponents';

import styles from './404.module.scss';

export const NotFound = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    if (user) {
      if (user.token) {
        navigate('/profile');
      } else {
        navigate('/auth/login');
      }
    }
  }, [user, navigate]);

  return (
    <CenterContent>
      <div className={styles.not__found}>
        <h1>Page Not Found</h1>
        <img src="/404.svg" alt="404 Error - Page Not Found" />
      </div>
    </CenterContent>
  );
};
