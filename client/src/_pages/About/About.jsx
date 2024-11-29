import { CenterContent, TextComponent } from '../../_components/IndexComponents';

import styles from './about.module.scss';

export const About = () => {
  return (
    <div className={styles.about__page}>
      <CenterContent>
        <TextComponent size={'heading'} text={'Информация'} />
      </CenterContent>
    </div>
  );
};
