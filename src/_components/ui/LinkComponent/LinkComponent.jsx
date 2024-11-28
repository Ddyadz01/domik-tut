import { Link, NavLink } from 'react-router';
import { TextComponent } from '../../IndexComponents';

import './link.scss';

export const LinkComponent = ({ text, path, type = 'default' }) => {
  return (
    <NavLink to={path} className={type}>
      <TextComponent text={text} size={'sm'} />
    </NavLink>
  );
};
