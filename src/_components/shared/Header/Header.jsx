import { Heart, User } from 'lucide-react';

import { useSelector } from 'react-redux';

import { Button, CenterContent, LinkComponent } from '../../IndexComponents';

import { useRoutes } from '../../../hooks/useRoutes';

import styles from './header.module.scss';

export const Header = () => {
  const { user } = useSelector((state) => state.user);
  const { routes } = useRoutes();

  return (
    <header className={styles.header}>
      <CenterContent>
        <div className={styles.header__content}>
          <div className={styles.header__content_left}>
            <img src="/logo-white.png" alt="" />
            <Button text={'Каталог'} type={'default'} />
          </div>

          <div className={styles.header__content_center}>
            {routes.map((route) =>
              route.type === 'public' && route.isShowNav ? (
                <LinkComponent key={route.id} text={route.title} path={route.path} type={'link'} />
              ) : user?.token && route.isShowNav ? (
                <LinkComponent key={route.id} text={route.title} path={route.path} type={'link'} />
              ) : (
                ''
              ),
            )}
          </div>
          {user.token && (
            <div className={styles.header__content_right}>
              <>
                <LinkComponent path={'/profile/favorites'} text={<Heart />} />
                <div className={styles.header__content_right_user}>
                  {/* <Link to="/">
                  <User /> {user.name}
                </Link> */}
                  <LinkComponent
                    type="primary"
                    path="/profile"
                    text={
                      <>
                        <User /> {user.name}
                      </>
                    }
                  />
                </div>
              </>
            </div>
          )}
        </div>
      </CenterContent>
    </header>
  );
};
