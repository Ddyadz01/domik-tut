import { useState } from "react";
import {
  Button,
  CenterContent,
  Loader,
  TextComponent,
} from "../../../_components/IndexComponents";

import { useAuth } from "../../../hooks/useAuth";

import styles from "./login.module.scss";

export const LoginPage = () => {
  const [form, setForm] = useState();
  const [isLoading, setLoading] = useState(false);

  const { LoginMutation } = useAuth();

  const createAccount = (e) => {
    e.preventDefault();
    setLoading(true);
    LoginMutation.mutate(form, {
      onSettled: () => {
        setLoading(false);
      },
    });
  };

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
          <TextComponent text={"Вход в аккаунт"} size={"heading"} />
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
            <Button
              text={isLoading ? <Loader width={30} height={30} /> : "Войти"}
              style={"primary"}
              clickFn={(e) => createAccount(e)}
              isLoading={isLoading}
            />
          </form>
        </div>
      </CenterContent>
    </div>
  );
};
