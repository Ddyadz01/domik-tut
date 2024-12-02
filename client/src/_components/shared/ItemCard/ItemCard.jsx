import { NavLink } from "react-router";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { favoriteToggle } from "../../../services/user.service";
import { Button, TextComponent } from "../../IndexComponents";
import { Heart, MoveRight } from "lucide-react";
import { useSelector } from "react-redux";
import { useCallback, useState } from "react";

import styles from "./item-card.module.scss";
import Notification from "../../../utils/Notification";

const FeatureInfo = ({ icon, text }) => (
  <div className={styles.featureInfo}>
    <img src={icon} alt={text} />
    <TextComponent size="base" text={text} />
  </div>
);

export const ItemCard = ({ item }) => {
  const [isLoading, setIsLoading] = useState(false);

  const { user } = useSelector((state) => state.user);

  const queryClient = useQueryClient();

  const mutationAdd = useMutation({
    mutationFn: async (id) => {
      await favoriteToggle(id);
    },
    onSuccess: () => queryClient.invalidateQueries(["get me"]),
  });

  const handleToggleFavorite = useCallback(() => {
    if (isLoading) return; // Предотвращение повторных кликов
    setIsLoading(true);
    mutationAdd.mutate(item._id, {
      onSettled: () => setIsLoading(false), // Разблокировка кнопки после завершения запроса
    });
  }, [mutationAdd, item._id, isLoading]);

  const isFavorite = user?.favorites?.some(
    (favorite) => favorite._id === item._id,
  );

  const clickFavoriteBtn = () => {
    user?.token
      ? handleToggleFavorite()
      : Notification("Войдите, чтоб добавить товар в избранные.", "warning");
  };

  return (
    <div className={styles.card}>
      <div className={styles.card__header}>
        <img src={item.imageURL} alt="Изображение дома" />
        <div
          className={isFavorite ? styles.favoriteActive : styles.favorite}
          onClick={isLoading ? "" : clickFavoriteBtn}
        >
          <Heart />
        </div>
      </div>
      <div className={styles.card__content}>
        <TextComponent size="lg" text={item.title} />
        <div className={styles.featuresList}>
          {item.persons_info.sleeping_places && (
            <FeatureInfo
              icon="/icons/items_icons/icon_bed.png"
              text={`${item.persons_info.sleeping_places} спальных мест`}
            />
          )}
          {item.features.bathhouse && (
            <FeatureInfo icon="/icons/items_icons/banya.png" text="Баня" />
          )}
          {item.features.pool && (
            <FeatureInfo
              icon="/icons/items_icons/icon_waterpool.png"
              text="Бассейн"
            />
          )}
          {item.features.table_tennis && (
            <FeatureInfo
              icon="/icons/items_icons/icon_entertainment.png"
              text="Настольный тенис"
            />
          )}
        </div>
        <div className={styles.cardFooter}>
          <TextComponent
            text={`от ${item.tariffs.prices_info[0].price} ₽ / сутки`}
            size="lg"
          />
          <NavLink to={`/product/${item._id}`}>
            <Button text="Подробнее" style="line" />
            <MoveRight />
          </NavLink>
        </div>
      </div>
    </div>
  );
};
