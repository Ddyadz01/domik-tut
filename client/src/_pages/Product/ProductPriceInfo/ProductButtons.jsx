import { useSelector } from "react-redux";
import { Button } from "../../../_components/IndexComponents";
import { ShareLinkProduct } from "../../../utils/ShareLinkProduct";
import { ExternalLink, Heart } from "lucide-react";
import styles from "../product.module.scss";
import { useCurrentProduct } from "../../../hooks/useCurrentProduct";
import { useParams } from "react-router";
import { useToggleFavorite } from "../../../hooks/useToggleFavorite";

const ProductButtons = () => {
  const { user } = useSelector((state) => state.user);
  const { handleToggleFavorite } = useToggleFavorite();
  const { id } = useParams();
  const product = useCurrentProduct(id);

  const isFavorite = user?.favorites.some(
    (favorite) => favorite._id === product._id,
  );

  const favoriteButtonText = isFavorite ? "В избранном" : "Добавить";
  const favoriteButtonType = isFavorite ? "primary" : "default";

  return (
    <div className={styles.product__info_bottom_info_price_buttons}>
      <Button
        text={user.token ? "Оставить заявку" : "Входите, чтобы оставить заявку"}
        style={"primary"}
      />
      {user.token && (
        <Button
          clickFn={() => handleToggleFavorite(product._id)}
          text={
            <>
              {favoriteButtonText}
              <Heart />
            </>
          }
          style={favoriteButtonType}
        />
      )}
        <div className={styles.btn_share}>
            <Button
        clickFn={ShareLinkProduct}
        text={
          <>
            Поделиться
            <ExternalLink />
          </>
        }
        style={"default"}
      />
        </div>
    </div>
  );
};

export default ProductButtons;
