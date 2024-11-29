import React from "react";
import {
  CenterContent,
  LinkComponent,
  TextComponent,
} from "../../_components/IndexComponents";

import styles from "./home.module.scss";

const HomeOptionsComponent = () => {
  return (
    <div className={styles.home__options}>
      <CenterContent>
        <TextComponent text={"Можем организовать для Вас"} size={"heading"} />
        <div className={styles.home__options_list}>
          <div className={styles.home__options_list__item}>
            <img src="/icons/cards_icons/buffet.png" alt="" />
            <TextComponent text={"Кейтеринг"} size="lg" />
          </div>
          <div className={styles.home__options_list__item}>
            <img src="/icons/cards_icons/chef.png" alt="" />
            <TextComponent text={"Выездной повар"} size="lg" />
          </div>
          <div className={styles.home__options_list__item}>
            <img src="/icons/cards_icons/cocktail.png" alt="" />
            <TextComponent text={"Фуршет"} size="lg" />
          </div>
          <div className={styles.home__options_list__item}>
            <img src="/icons/cards_icons/confetti.png" alt="" />
            <TextComponent text={"Шоу программа"} size="lg" />
          </div>
          <div className={styles.home__options_list__item}>
            <img src="/icons/cards_icons/Frame.png" alt="" />
            <TextComponent text={"Трансфер"} size="lg" />
          </div>
          <div className={styles.home__options_list__item}>
            <img src="/icons/cards_icons/microphone.png" alt="" />
            <TextComponent text={"Мероприятия под ключ"} size="lg" />
          </div>
        </div>
        <LinkComponent path={"/"} text={"Узнать подробнее"} type={"primary"} />
      </CenterContent>
    </div>
  );
};

export default HomeOptionsComponent;
