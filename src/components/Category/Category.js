import React, { useEffect, useState } from "react";
import { getItems } from "../../services";
import { NewsCard } from "../NewsCard/NewsCard";
import styles from "./Category.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setAllNews } from "../../redux/actions";

export const Category = (props) => {
  const dispatch = useDispatch();
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
  }, [props.match.params.category]);
  return (
    <div className={styles.container}>
      {error && <div>{error}</div>}
      {!isLoaded && <div>Loading...</div>}
      {Object.keys(filteredNews).map((item) => {
        return <NewsCard key={item} newsList={filteredNews[item]}></NewsCard>;
      })}
    </div>
  );
};
