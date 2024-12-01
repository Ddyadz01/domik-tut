import { TextComponent } from "../../IndexComponents";

import "./button.scss";

export const Button = ({ style, text, clickFn, disabled, type }) => {
  return (
    <button
      className={"button " + style}
      onClick={clickFn}
      disabled={disabled}
      type={type}
    >
      <TextComponent size={"base"} text={text} />
    </button>
  );
};
