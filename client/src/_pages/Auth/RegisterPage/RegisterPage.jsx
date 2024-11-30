import { Button, CenterContent, TextComponent } from '../../../_components/IndexComponents';

import styles from './register.module.scss';

export const RegisterPage = () => {
  const RegisterHandler = (e) => {
    e.preventDefault();
    console.log('tedfdd');
  };
  return (
    <div className={styles.register__page}>
      <CenterContent>
        <div className={styles.register__page_content}>
          <TextComponent text={'Регистрация пользователя'} size={'heading'} />
          <form>
            <label>
              Имя
              <input placeholder="Имя" type="text" name="last_name" autoComplete="no" />
            </label>
            <label>
              Фамилия
              <input placeholder="Фамилия" type="text" name="first_name" autoComplete="no" />
            </label>
            <label>
              Номер телефона
              <input
                placeholder="В формате +7 (999) ..."
                type="number"
                name="phone_number"
                autoComplete="no"
              />
            </label>
            <label>
              Введите электронную почту (Email)
              <input placeholder="Email" type="email" name="email" autoComplete="no" />
            </label>
            <label>
              Введите пароль
              <input placeholder="Пароль" type="password" name="password" />
            </label>
            <Button text={'Создать аккаунт'} type={'primary'} clickFn={(e) => RegisterHandler(e)} />
          </form>
        </div>
      </CenterContent>
    </div>
  );
};
