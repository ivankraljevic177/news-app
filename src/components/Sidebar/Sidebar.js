import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.scss";
import HomeSvg from "../../assets/Home.svg";
import GeneralSvg from "../../assets/News.svg";

export const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <NavLink activeClassName={styles.activebtn} exact to="/">
        <img className={styles.svg} src={HomeSvg} alt="home"></img>
        <div>Home</div>
      </NavLink>
      <NavLink activeClassName={styles.activebtn} exact to="/abc">
        <img className={styles.svg} src={GeneralSvg} alt="home"></img>
        <div>General</div>
      </NavLink>
    </div>
  );
};
