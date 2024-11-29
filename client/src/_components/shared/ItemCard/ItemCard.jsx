import { NavLink } from 'react-router';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { deleteFavorite, addFavorites } from '../../../services/user.service';

import { Button, TextComponent } from '../../IndexComponents';

import { Heart, MoveRight } from 'lucide-react';
import { useSelector } from 'react-redux';

import styles from './item-card.module.scss';

export const ItemCard = ({ item }) => {
  const queryClient = useQueryClient();

  const mutationAdd = useMutation({
    mutationFn: async (id) => {
      await addFavorites(id);
    },
    onSuccess: () => queryClient.invalidateQueries(['favorites']),
  });

  const mutationDelete = useMutation({
    mutationFn: async (id) => {
      await deleteFavorite(id);
    },
    onSuccess: () => queryClient.invalidateQueries(['favorites']),
  });

  const { favorites } = useSelector((state) => state.user.user);

  return (
    <div className={styles.item__card}>
      <div className={styles.item__card_top}>
        <img src={item.imageURL} alt="Изображение дома" />
        {favorites?.find((favorite) => favorite.item_id === item.id) ? (
          <div
            className={styles.item__card_top_is_favorite}
            onClick={() => mutationDelete.mutate(item.id)}
          >
            <Heart />
          </div>
        ) : (
          <div
            className={styles.item__card_top_favorite}
            onClick={() => mutationAdd.mutate(item.id)}
          >
            <Heart />
          </div>
        )}
      </div>
      <div className={styles.item__card_content}>
        <TextComponent size="lg" text={item.title} />
        <div className={styles.item__card_content__list}>
          {item.persons_info.sleeping_places && (
            <div className={styles.item__card_content__list_info}>
              <img src="/icons/items_icons/icon_bed.png" />
              <TextComponent
                size="base"
                text={`${item.persons_info.sleeping_places} cпальных мест`}
              />
            </div>
          )}
          {item.features.bathhouse && (
            <div className={styles.item__card_content__list_info}>
              <img src="/icons/items_icons/banya.png" />
              <TextComponent size="base" text={'Баня'} />
            </div>
          )}
          {item.features.pool && (
            <div className={styles.item__card_content__list_info}>
              <img src="/icons/items_icons/icon_waterpool.png" />
              <TextComponent size="base" text={'Бассейн'} />
            </div>
          )}
          {item.features.table_tennis && (
            <div className={styles.item__card_content__list_info}>
              <img src="/icons/items_icons/icon_entertainment.png" />
              <TextComponent size="base" text={'Настольный тенис'} />
            </div>
          )}
        </div>
        <div className={styles.item__card_content_bottom}>
          <TextComponent text={`от ${item.tariffs.prices_info[0].price} ₽ / сутки`} size="lg" />
          <NavLink to={`/product/${item.id}`}>
            <Button text={'Подробнее'} type={'line'} />
            <MoveRight />
          </NavLink>
        </div>
      </div>
    </div>
  );
};
