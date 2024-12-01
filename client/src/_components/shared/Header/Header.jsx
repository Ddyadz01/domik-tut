import { Heart, User } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Button, CenterContent, LinkComponent } from "../../IndexComponents";
import { useRoutes } from "../../../hooks/useRoutes";
import styles from "./header.module.scss";
import { logout } from "../../../store/Slices/UserSlice";

export const Header = () => {
  const { user } = useSelector((state) => state.user);
  const { routes } = useRoutes();

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logout());
  };

  return (
    <header className={styles.header}>
      <CenterContent>
        <div className={styles.headerContent}>
          <div className={styles.headerLeft}>
            <img src="/logo-white.png" alt="Company Logo" />
            <Button text="Каталог" style="default" />
          </div>

          <div className={styles.headerCenter}>
            {routes.map((route) =>
              route.isShowNav && (route.type === "public" || user?.token) ? (
                <LinkComponent
                  key={route.id}
                  text={route.title}
                  path={route.path}
                  type="link"
                />
              ) : null,
            )}
          </div>

          {user.token && (
            <div className={styles.headerRight}>
              <div className={styles.favoriteIcon}>
                <span>{user?.favorites?.length}</span>
                <LinkComponent path="/profile/favorites" text={<Heart />} />
              </div>

              <div className={styles.user}>
                <LinkComponent
                  type="primary"
                  path="/profile"
                  text={
                    <>
                      <User /> {user.username}
                    </>
                  }
                />
                <Button
                  clickFn={handleClick}
                  text={"Выход"}
                  style={"primary"}
                />
              </div>
            </div>
          )}
        </div>
      </CenterContent>
    </header>
  );
};
