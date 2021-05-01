import React from "react";
import styles from "./NewsCard.module.scss";

export const NewsCard = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img
          src={props.newsList.urlToImage}
          alt="news"
          className={styles.img}
        ></img>
        <p>{props.newsList.title}</p>
      </div>
    </div>
  );
};
