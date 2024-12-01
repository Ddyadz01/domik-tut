import { useSelector } from "react-redux";
import {
  Button,
  CenterContent,
  TextComponent,
} from "../../_components/IndexComponents";

import styles from "./profile.module.scss";

export const Profile = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <div className={styles.profile}>
      <CenterContent>
        <TextComponent text={"Личные данные"} size={"heading"} />
        <form className={styles.profile_info}>
          <label htmlFor="">
            <span>Имя:</span>
            <input type="text" value={user.username} />
          </label>
          <label htmlFor="">
            <span>Электроннная почта:</span>
            <input type="text" value={user.email} />
          </label>
          <label htmlFor="">
            <span>Номер телефона</span>
            <input type="text" value={user.phone} />
          </label>
          <Button
            disabled={false}
            clickFn={false}
            style={"primary"}
            type={"button"}
            text={"Сохранить"}
          />
        </form>
      </CenterContent>
    </div>
  );
};
