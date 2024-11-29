import React from 'react';
import { CenterContent } from '../../IndexComponents';

import styles from './loader.module.scss';

export const Loader = () => {
  return (
    <CenterContent>
      <div className={styles.loader}>
        <div className={styles.loader__element}></div>
      </div>
    </CenterContent>
  );
};
