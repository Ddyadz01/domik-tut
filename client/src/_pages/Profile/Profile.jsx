import { CenterContent, TextComponent } from '../../_components/IndexComponents';

import styles from './profile.module.scss';

export const Profile = () => {
  return (
    <div className={styles.profile__page}>
      <CenterContent>
        <TextComponent text={'Профиль'} size={'heading'} />
      </CenterContent>
    </div>
  );
};
