import { useState } from "react";
import {
  Button,
  CenterContent,
  Loader,
  TextComponent,
} from "../../../_components/IndexComponents";

import { useAuth } from "../../../hooks/useAuth";

import styles from "./register.module.scss";

export const RegisterPage = () => {
  const [form, setForm] = useState();
  const [isLoading, setLoading] = useState(false);

  const { RegisterMutation } = useAuth();

  const createAccount = (e) => {
    e.preventDefault();
    setLoading(true);
    RegisterMutation.mutate(form, {
      onSuccess: () => setLoading(false),
    });
  };

  const changeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={styles.register__page}>
      <CenterContent>
        <div className={styles.register__page_content}>
          <TextComponent text={"Регистрация пользователя"} size={"heading"} />
          <form>
            <label>
              Имя
              <input
                placeholder="Имя"
                type="text"
                name="last_name"
                autoComplete="no"
                onChange={(e) => changeHandler(e)}
              />
            </label>
            <label>
              Фамилия
              <input
                placeholder="Фамилия"
                type="text"
                name="first_name"
                autoComplete="no"
                onChange={(e) => changeHandler(e)}
              />
            </label>
            <label>
              Номер телефона
              <input
                placeholder="В формате +7 (999) ..."
                type="number"
                name="phone_number"
                autoComplete="no"
                onChange={(e) => changeHandler(e)}
              />
            </label>
            <label>
              Введите электронную почту (Email)
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
              text={
                isLoading ? (
                  <Loader height={30} width={30} />
                ) : (
                  "Создать аккаунт"
                )
              }
              style={"primary"}
              clickFn={(e) => createAccount(e)}
              disabled={isLoading}
            />
          </form>
        </div>
      </CenterContent>
    </div>
  );
};
