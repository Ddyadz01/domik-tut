import { CenterContent, LinkComponent, TextComponent } from '../../IndexComponents';
import { useRoutes } from '../../../hooks/useRoutes';
import styles from './footer.module.scss';

export const Footer = () => {
  const { routes } = useRoutes();
  return (
    <footer className={styles.footer}>
      <CenterContent>
        <div className={styles.info}>
          <div className={styles.logo}>
            <img src="/logo-white.png" alt="Company Logo" />
          </div>
          <div className={styles.catalog}>
            <TextComponent text="Каталог" size="lg" />
            <ul>
              <li>С бассейном</li>
              <li>Семейные и уютные</li>
              <li>Хиты продаж</li>
              <li>Под свадьбы и корпоративы</li>
              <li>С русской баней на дровах</li>
            </ul>
          </div>
          <nav className={styles.links}>
            <ul>
              {routes.map((link) => (
                <li key={link.id}>
                  <LinkComponent path={link.path} text={link.title} />
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles.contacts}>
            <TextComponent text="8 (843) 528-65-48" size="lg" />
          </div>
        </div>
      </CenterContent>
    </footer>
  );
};
