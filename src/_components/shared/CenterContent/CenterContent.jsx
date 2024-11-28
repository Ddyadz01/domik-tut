import styles from "./content.module.scss";

export const CenterContent = ({ children }) => {
  return <div className={styles.content}>{children}</div>;
};
