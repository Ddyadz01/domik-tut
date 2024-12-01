import { useDispatch } from 'react-redux';
import { Button, CenterContent, TextComponent } from '../../_components/IndexComponents';

import styles from './profile.module.scss';
import { logout } from '../../store/Slices/UserSlice';

export const Profile = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logout());
  };
  return (
    <div className={styles.profile__page}>
      <CenterContent>
        <TextComponent text={'Профиль'} size={'heading'} />
        <Button text={'Выйти'} type={'primary'} clickFn={handleClick} />
      </CenterContent>
    </div>
  );
};
