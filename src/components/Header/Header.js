import React from "react";
import styles from "./Header.module.scss";
import { Search } from "../Search/Search";

export const Header = () => {
  return (
    <header className={styles.container}>
      <div>MyNews</div>
      <div>
        <Search></Search>
      </div>
    </header>
  );
};
