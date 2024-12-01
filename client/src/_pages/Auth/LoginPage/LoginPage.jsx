import { useState } from 'react';
import { Button, CenterContent, TextComponent } from '../../../_components/IndexComponents';

import styles from './login.module.scss';
import { useDispatch } from 'react-redux';
import { useMutation } from '@tanstack/react-query';
import { SignIn } from '../../../services/user.service';
import { login } from '../../../store/Slices/UserSlice';

export const LoginPage = () => {
  const [form, setForm] = useState();

  const dispatch = useDispatch();

  const createAccount = (e) => {
    e.preventDefault();
    mutation.mutate(form);
  };

  const mutation = useMutation({
    mutationFn: SignIn,
    onSuccess: ({ data }) => dispatch(login(data)),
  });

  const changeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className={styles.login__page}>
      <CenterContent>
        <div className={styles.login__page_content}>
          <TextComponent text={'Вход в аккаунт'} size={'heading'} />
          <form>
            <label>
              Введите электронную почту (email)
              <input
                placeholder="Email"
                type="email"
                name="email"
                autoComplete="no"
                onChange={(e) => changeHandler(e)}
              />
            </label>
            <label>
              Введите пароль
              <input
                placeholder="Пароль"
                type="password"
                name="password"
                onChange={(e) => changeHandler(e)}
              />
            </label>
            <Button text={'Войти'} type={'primary'} clickFn={(e) => createAccount(e)} />
          </form>
        </div>
      </CenterContent>
    </div>
  );
};