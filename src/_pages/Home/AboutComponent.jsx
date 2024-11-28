import React from "react";

import {
  CenterContent,
  TextComponent,
} from "../../_components/IndexComponents";

import styles from "./home.module.scss";

const AboutComponent = () => {
  return (
    <div className={styles.home_page__about}>
      <CenterContent>
        <TextComponent size={"heading"} text={"О нас"} />
        <div className={styles.home_page__about_cards}>
          <div className={styles.home_page__about_cards__card}>
            <img src="./icons/home_about/icon_benefits_1.png" alt="" />
            <TextComponent
              text={"Работаем с юридическими  и физическими лицами"}
            />
          </div>
          <div className={styles.home_page__about_cards__card}>
            <img src="./icons/home_about/icon_benefits_2.png" alt="" />
            <TextComponent
              text={
                "Бесплатный подбор, честные консультации и открытость к сотрудничеству"
              }
            />
          </div>
          <div className={styles.home_page__about_cards__card}>
            <img src="./icons/home_about/icon_benefits_3.png" alt="" />
            <TextComponent
              text={
                "Работаем с 2014 года. Консультируем 30-80 человек в сутки, заселяем от 3 до 5 компаний в день. Помогли более 21 000 клиентам"
              }
            />
          </div>
          <div className={styles.home_page__about_cards__card}>
            <img src="./icons/home_about/icon_benefits_4.png" alt="" />
            <TextComponent
              text={
                "Средний рейтинг компании 4,5 из 5 (Avito, Google, Отзовик)"
              }
            />
          </div>
        </div>
      </CenterContent>
    </div>
  );
};

export default AboutComponent;
