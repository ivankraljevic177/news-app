import React from "react";
import  styles from './Main.module.scss'
import { useSelector } from "react-redux";
import {NewsCard} from '../NewsCard/NewsCard'

export const Main = () => {
  const { allNews } = useSelector((state) => state.news);

  return (
    <div className={styles.container}>
        <div className={styles.sidebar}>Latest news</div>
        
        {Object.keys(allNews).map((item) => {
            return <NewsCard key={item} newsList={allNews[item]}></NewsCard>
        })}
    </div>
  );
};
