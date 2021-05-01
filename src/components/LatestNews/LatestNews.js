import React from "react";
import styles from "./LatestNews.module.scss";
import { useSelector } from "react-redux";
import LatestSvg from "../../assets/Latest.svg";

export const LatestNews = () => {
  const { allNews } = useSelector((state) => state.news);

  return (
    <div className={styles.latestnews}>
      <h3 className={styles.heading}>
        {" "}
        <img src={LatestSvg} alt="latest"></img> Latest news
      </h3>
      <ul>
      {Object.keys(allNews).map((item) => {
        return (
          <li className={styles.items} key={item}>
            <p>{allNews[item].publishedAt}</p>
            {allNews[item].title}
          </li>
        );
      })}
      </ul>
    </div>
  );
};
