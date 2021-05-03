import React from "react";
import styles from "./Search.module.scss";
import SearchSvg from "../../assets/Search.svg";
import { useDispatch } from "react-redux";
import { filterNews } from "../../redux/actions";

export const Search = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(filterNews(event.target.value));
  };
  const onSubmit = (event) => {
    dispatch(filterNews(event.target.value));
  };
  return (
    <div className={styles.search}>
      <img className={styles.searchSvg} src={SearchSvg} alt="searchicon"></img>
      <input
        type="text"
        onChange={handleChange}
        className={styles.searchInput}
        placeholder="Search news"
      ></input>
      <button onSubmit={onSubmit}>SEARCH</button>
    </div>
  );
};
