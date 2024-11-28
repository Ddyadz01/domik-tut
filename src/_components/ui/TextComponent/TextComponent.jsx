import "./text.scss";

const sizes = {
  xs: "xs",
  sm: "sm",
  base: "base",
  lg: "lg",
  xl: "lg",
  heading: "title-block",
  title: "title-block-lg",
};

export const TextComponent = ({ text, icon, size = "base" }) => {
  return icon ? (
    <p className={sizes[size] + " icon"}>
      {icon}
      {text}
    </p>
  ) : (
    <p className={sizes[size]}>{text}</p>
  );
};
