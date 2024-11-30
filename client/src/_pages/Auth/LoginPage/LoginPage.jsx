import { Button, CenterContent, TextComponent } from '../../../_components/IndexComponents';

import styles from './login.module.scss';

export const LoginPage = () => {
  const LoginHandle = (e) => {
    e.preventDefault();
    console.log('tedfdd');
  };
  return (
    <div className={styles.login__page}>
      <CenterContent>
        <div className={styles.login__page_content}>
          <TextComponent text={'Вход в аккаунт'} size={'heading'} />
          <form>
            <label>
              Введите электронную почту (email)
              <input placeholder="Email" type="email" name="email" autoComplete="no" />
            </label>
            <label>
              Введите пароль
              <input placeholder="Пароль" type="password" name="password" />
            </label>
            <Button text={'Войти'} type={'primary'} clickFn={(e) => LoginHandle(e)} />
          </form>
        </div>
      </CenterContent>
    </div>
  );
};
