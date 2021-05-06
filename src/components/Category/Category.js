import React, { useEffect, useState } from "react";
import styles from "./Category.module.scss";
import { getItems } from "../../services";
import { NewsCard } from "../NewsCard/NewsCard";
import { useDispatch, useSelector } from "react-redux";
import { setAllNews } from "../../redux/actions";
import { LatestNews } from "../LatestNews/LatestNews";

export const Category = (props) => {
  const dispatch = useDispatch();

  const [isFeaturedClicked, setIsFeaturedClicked] = useState(true);
  const [isLatestClicked, setIsLatestClicked] = useState(false);
  const { allNews } = useSelector((state) => state.news);
  const [listItems, setListItems] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const handleFeatureClick = () => {
    setIsFeaturedClicked(true);
    setIsLatestClicked(false);
  };

  const handleLatestClicked = () => {
    setIsLatestClicked(true);
    setIsFeaturedClicked(false);
  };

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
      <div className={styles.buttons}>
        <button
          onClick={handleFeatureClick}
          className={isFeaturedClicked ? styles.isClicked : ""}
        >
          Featured
        </button>
        <button
          onClick={handleLatestClicked}
          className={isLatestClicked ? styles.isClicked : ""}
        >
          Latest
        </button>
      </div>
      <div className={styles.mainHeading}>News</div>
      <div className={styles.container}>
        <div
          onScroll={handleScroll}
          className={isLatestClicked ? styles.latestnews : styles.hideLatest}
        >
          <LatestNews listItems={listItems} isFetching={isFetching} />
        </div>

        {error && <div>{error}</div>}
        {!isLoaded && <div>Loading...</div>}
        {isFeaturedClicked}

        {Object.keys(filteredNews).map((item) => {
          return (
            <div
              className={
                isFeaturedClicked ? styles.featured : styles.hideFeatured
              }
              key={item}
            >
              <NewsCard newsList={filteredNews[item]}></NewsCard>
            </div>
          );
        })}
      </div>
    </>
  );
};
