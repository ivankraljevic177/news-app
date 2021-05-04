import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.scss";
import HomeSvg from "../../assets/Home.svg";
import GeneralSvg from "../../assets/News.svg";
import Health from "../../assets/Health.svg";
import Science from "../../assets/Science.svg";
import Sports from "../../assets/Sports.svg";
import Technology from "../../assets/monitor.svg";
import Business from "../../assets/Business.svg";




export const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <NavLink activeClassName={styles.activebtn} exact to="/general">
        <img className={styles.svg} src={HomeSvg} alt="home"></img>
        <div className={styles.text}>Home</div>
      </NavLink>
      <NavLink activeClassName={styles.activebtn} exact to="/entertainment">
        <img className={styles.svg} src={GeneralSvg} alt="general"></img>
        <div className={styles.text}>General</div>
      </NavLink>
      <NavLink activeClassName={styles.activebtn} to={`/business`}>
        <img className={styles.svg} src={Business} alt="Business"></img>
        <div className={styles.text}>Business</div>
      </NavLink>
      <NavLink activeClassName={styles.activebtn} to={`/sports`}>
        <img className={styles.svg} src={Sports} alt="Sports"></img>
        <div className={styles.text}>Sports</div>
      </NavLink>
      <NavLink activeClassName={styles.activebtn} to={`/health`}>
        <img className={styles.svg} src={Health} alt="Health"></img>
        <div className={styles.text}>Health</div>
      </NavLink>
      <NavLink activeClassName={styles.activebtn} to={`/science`}>
        <img className={styles.svg} src={Science} alt="Science"></img>
        <div className={styles.text}>Science</div>
      </NavLink>
      <NavLink activeClassName={styles.activebtn} to={`/technology`}>
        <img className={styles.svg} src={Technology} alt="Technology"></img>
        <div className={styles.text}>Tech</div>
      </NavLink>
    </div>
  );
};
