import React from "react";
import styles from "./LatestNews.module.scss";
import LatestSvg from "../../assets/Latest.svg";

export const LatestNews = ({ listItems, isFetching }) => {
  return (
    <div className={styles.latestnews}>
      <h3 className={styles.heading}>
        <img src={LatestSvg} alt="latest"></img> 
        <div>Latest news</div>
      </h3>
      <ul>
        {Object.keys(listItems).map((item) => {
          return (
            <li className={styles.items} key={item}>
              <div>{listItems[item].publishedAt}</div>
              {listItems[item].title}
            </li>
          );
        })}
      </ul>
      {!isFetching && <div className={styles.loading}>Fetching more news...</div>}
    </div>
  );
};
