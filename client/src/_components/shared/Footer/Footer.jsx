import { CenterContent, LinkComponent, TextComponent } from '../../IndexComponents';

import { useRoutes } from '../../../hooks/useRoutes';

import styles from './footer.module.scss';

export const Footer = () => {
  const { routes } = useRoutes();
  return (
    <footer>
      <div className={styles.footer__content}>
        <CenterContent>
          <div className={styles.footer__content_info}>
            <div className={styles.footer__content_info_logo}>
              <img src="/logo-white.png" alt="" />
            </div>
            <div className={styles.footer__content_info_catalog}>
              <TextComponent text={'Каталог'} size={'lg'} />
              <ul>
                <li>С бассейном</li>
                <li>Семейные и уютные</li>
                <li>Хиты продаж</li>
                <li>Под свадьбы и корпоративы</li>
                <li>С русской баней на дровах</li>
              </ul>
            </div>
            <div className={styles.footer__content_info_links}>
              <ul>
                {routes.map((link) => (
                  <li key={link.id}>
                    <LinkComponent path={link.path} text={link.title} />
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.footer__content_info_contacts}>
              <TextComponent text={'8 (843) 528-65-48'} size={'lg'} />
            </div>
          </div>
        </CenterContent>
      </div>
    </footer>
  );
};
