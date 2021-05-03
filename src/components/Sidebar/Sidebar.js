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
        <div className={styles.text}>Home</div>
      </NavLink>
      <NavLink activeClassName={styles.activebtn} to={`/general`}>
        <img className={styles.svg} src={GeneralSvg} alt="home"></img>
        <div className={styles.text}>General</div>
      </NavLink>
      <NavLink activeClassName={styles.activebtn} to={`/sports`}>
        <img className={styles.svg} src={GeneralSvg} alt="home"></img>
        <div className={styles.text}>Sports</div>
      </NavLink>
      <NavLink activeClassName={styles.activebtn} to={`/health`}>
        <img className={styles.svg} src={GeneralSvg} alt="home"></img>
        <div className={styles.text}>Health</div>
      </NavLink>
      <NavLink activeClassName={styles.activebtn} to={`/science`}>
        <img className={styles.svg} src={GeneralSvg} alt="home"></img>
        <div className={styles.text}>Science</div>
      </NavLink>
    </div>
  );
};
