import React from 'react'
import styles from './LatestNews.module.scss'
import { useSelector } from "react-redux";
import LatestSvg from '../../assets/Latest.svg'

export const LatestNews = () => {
    const { allNews } = useSelector((state) => state.news);
    
    return (
        <div className={styles.latestnews}>
            <h3 className={styles.heading}> <img src={LatestSvg} alt="latest"></img> Latest news</h3>
            {Object.keys(allNews).map((item) => {
        return <p className={styles.items}key={item}>{allNews[item].title}</p>;
      })}
        </div>
    )
}
