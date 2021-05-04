import React, { useEffect, useState } from "react";
import styles from "./Category.module.scss";
import { getItems } from "../../services";
import { NewsCard } from "../NewsCard/NewsCard";
import { useDispatch, useSelector } from "react-redux";
import { setAllNews } from "../../redux/actions";
import { LatestNews } from "../LatestNews/LatestNews";

export const Category = (props) => {
  const dispatch = useDispatch();

  const { allNews } = useSelector((state) => state.news);
  const [listItems, setListItems] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  useEffect(() => {
    if (!isFetching) {
      setListItems(allNews.slice(0, 10));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allNews]);

  const handleScroll = (e) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom && !isFetching) {
      setTimeout(() => {
        setListItems(allNews);
        setIsFetching(true);
      }, 1000);
    }
  };

  const { filteredNews } = useSelector((state) => state.news);
  const [error, setError] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(setAllNews([]));
    setIsLoaded(false);
    (async function () {
      await getItems(props.match.params.category)
        .then((result) => {
          setIsLoaded(true);
          dispatch(setAllNews(result.articles));
        })
        .catch((err) => {
          setIsLoaded(true);
          setError(err.message);
        });
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.match.params.category]);
  return (
    <>
      <div className={styles.mainHeading}>News</div>
      <div className={styles.container}>
        <div onScroll={handleScroll} className={styles.latestnews}>
          <LatestNews listItems={listItems} isFetching={isFetching} />
        </div>

        {error && <div>{error}</div>}
        {!isLoaded && <div>Loading...</div>}
        {Object.keys(filteredNews).map((item) => {
          return <NewsCard key={item} newsList={filteredNews[item]}></NewsCard>;
        })}
      </div>
    </>
  );
};
