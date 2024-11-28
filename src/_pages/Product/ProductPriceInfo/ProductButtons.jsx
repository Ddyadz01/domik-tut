import { useSelector } from "react-redux";

import { Button } from "../../../_components/IndexComponents";

import { ShareLinkProduct } from "../../../utils/ShareLinkProduct";

import { ExternalLink, Heart } from "lucide-react";

import styles from "../product.module.scss";

const ProductButtons = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <div className={styles.product__info_bottom_info_price_buttons}>
      <Button
        text={
          user.token ? "Оставить заявку" : "Входите, чтообы оставить заявку"
        }
        type={"primary"}
      />
      {user.token && (
        <Button
          text={
            <>
              Добавить
              <Heart />
            </>
          }
          type={"default"}
        />
      )}
      <Button
        clickFn={ShareLinkProduct}
        text={
          <>
            Поделиться
            <ExternalLink />
          </>
        }
        type={"default"}
      />
    </div>
  );
};

export default ProductButtons;
