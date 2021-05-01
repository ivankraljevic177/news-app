import React from "react";
import styles from "./Main.module.scss";
import { useSelector } from "react-redux";
import { NewsCard } from "../NewsCard/NewsCard";
import { LatestNews } from "../LatestNews/LatestNews";

export const Main = () => {
  const { allNews } = useSelector((state) => state.news);

  return (
    <>
      <div>News</div>

      <div className={styles.container}>
        <div className={styles.latestnews}>
          <LatestNews />
        </div>

        {Object.keys(allNews).map((item) => {
          return <NewsCard key={item} newsList={allNews[item]}></NewsCard>;
        })}
      </div>
    </>
  );
};
