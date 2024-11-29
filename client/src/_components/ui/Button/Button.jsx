import { TextComponent } from '../../IndexComponents';

import './button.scss';

export const Button = ({ type, text, clickFn }) => {
  return (
    <button className={'button ' + type} onClick={clickFn}>
      <TextComponent size={'base'} text={text} />
    </button>
  );
};
