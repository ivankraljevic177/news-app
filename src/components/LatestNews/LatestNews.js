import React,{useState,useEffect} from "react";
import styles from "./LatestNews.module.scss";
import { useSelector } from "react-redux";
import LatestSvg from "../../assets/Latest.svg";

export const LatestNews = () => {
  const { allNews } = useSelector((state) => state.news);
  const [listItems, setListItems] = useState(allNews.slice(0,10));
  const [isFetching, setIsFetching] = useState(false);
  console.log(listItems)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isFetching) return;
    fetchMoreListItems();
  }, [isFetching]);

    function handleScroll() {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
        setIsFetching(true);
      }

      function fetchMoreListItems() {
        setTimeout(() => {
        setListItems(allNews);

          setIsFetching(false);
        }, 2000);
      }
  return (
    <div className={styles.latestnews}>
      <h3 className={styles.heading}>
        {" "}
        <img src={LatestSvg} alt="latest"></img> Latest news
      </h3>
      <ul>
      {Object.keys(listItems).map((item) => {
        return (
          <li className={styles.items} key={item}>
            <p>{listItems[item].publishedAt}</p>
            {listItems[item].title}
          </li>
        );
      })}
      </ul>
      {isFetching && 'Fetching more list items...'}
    </div>
  );
};
