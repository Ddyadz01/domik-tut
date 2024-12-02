import { TextComponent } from "../../IndexComponents";

import "./button.scss";

export const Button = ({
  style,
  text,
  clickFn,
  type,
  disabled,
  isLoading = false,
}) => {
  return (
    <button
      className={"button " + style}
      onClick={clickFn}
      disabled={disabled || isLoading}
      type={type}
    >
      <TextComponent size={"base"} text={text} />
    </button>
  );
};
