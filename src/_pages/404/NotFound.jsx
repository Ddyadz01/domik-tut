import React, { useEffect } from 'react';

import { useLocation, useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

import { CenterContent } from '../../_components/IndexComponents';

import styles from './404.module.scss';

export const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const redirectLink = location?.state?.from;

  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    user?.token && navigate(redirectLink);
  }, [user]);
  return (
    <CenterContent>
      <div className={styles.not__found}>
        <h1>Page Not Found</h1>
        <img src="/404.svg" alt="" />
      </div>
    </CenterContent>
  );
};
