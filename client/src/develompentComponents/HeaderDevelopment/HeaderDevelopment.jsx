import { useDispatch, useSelector } from "react-redux";

import { login, logout } from "../../store/Slices/UserSlice";

import { Button } from "../../_components/IndexComponents";

import styles from "./development.module.scss";
import { useRef, useState } from "react";

const HeaderDevelopment = () => {
  const [isShowHeader, setShowHeader] = useState(true);
  const { token } = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  return (
    isShowHeader && (
      <div className={styles.dev}>
        <div className={styles.dev__content}>
          <div className={styles.dev__content_left}>
            <p
              style={{ fontSize: "16px", fontWeight: "bold", margin: "0 10px" }}
            >
              Функции в Dev Mode:
            </p>
            {token ? (
              <Button
                text={"Выйти из системы"}
                type={"default-primary"}
                clickFn={() => dispatch(logout())}
              />
            ) : (
              <>
                <Button
                  text={"Вход в систему"}
                  type={"default"}
                  clickFn={() => dispatch(login())}
                />
              </>
            )}
          </div>
          <div className={styles.dev__content_seetings}>
            <Button
              text={"Закрыть"}
              type={"default"}
              clickFn={() => setShowHeader(false)}
            />
          </div>
        </div>
      </div>
    )
  );
};

export default HeaderDevelopment;
