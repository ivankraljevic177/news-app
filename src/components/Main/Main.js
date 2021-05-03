import React, { useEffect, useState } from "react";
import styles from "./Main.module.scss";
import { useSelector } from "react-redux";
import { NewsCard } from "../NewsCard/NewsCard";
import { LatestNews } from "../LatestNews/LatestNews";

export const Main = () => {
  const { filteredNews } = useSelector((state) => state.news);
  const { allNews } = useSelector((state) => state.news);
  const [listItems, setListItems] = useState([]);
  const [isFetching, setIsFetching] = useState(false);


  useEffect(() => {
    setListItems(allNews.slice(0, 10));
  }, [allNews])

  const handleScroll = (e) => {


    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom && !isFetching) { 
      
      setTimeout(() => {
        setListItems(allNews);
        setIsFetching(true)
        }, 1000);
    }
 }

  return (
    <>
      <div className={styles.mainHeading}>News</div>

      <div className={styles.container}>
        <div onScroll={handleScroll} className={styles.latestnews}>
          <LatestNews listItems={listItems} isFetching={isFetching} />
        </div>

        {Object.keys(filteredNews).map((item) => {
          return <NewsCard key={item} newsList={filteredNews[item]}></NewsCard>;
        })}
      </div>
    </>
  );
};
