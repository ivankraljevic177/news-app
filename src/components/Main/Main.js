import React from "react";
import styles from "./Main.module.scss";
import { useSelector } from "react-redux";
import { NewsCard } from "../NewsCard/NewsCard";
import { LatestNews } from "../LatestNews/LatestNews";

export const Main = () => {
  const { filteredNews } = useSelector((state) => state.news);

  return (
    <>
      <div>News</div>

      <div className={styles.container}>
        <div className={styles.latestnews}>
          <LatestNews />
        </div>

        {Object.keys(filteredNews).map((item) => {
          return <NewsCard key={item} newsList={filteredNews[item]}></NewsCard>;
        })}
      </div>
    </>
  );
};
