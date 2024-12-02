import { CenterContent } from "../../IndexComponents";

import styles from "./loader.module.scss";

export const Loader = ({ width, height }) => {
  return (
    <CenterContent>
      <div
        className={styles.loader}
        style={{ width: width + "px", height: height + "px" }}
      >
        <div className={styles.loader__element}></div>
      </div>
    </CenterContent>
  );
};
