import React, { useState } from "react";
import styles from "./Header.module.scss";
import { Search } from "../Search/Search";
import Hamburger from "../../assets/Hamburger.svg";
import { MenuModal } from "../MenuModal/MenuModal";

export const Header = () => {


  const [showMenuModal, setShowMenuModal] = useState(false);
  const openMenuModal = () => setShowMenuModal(!showMenuModal);

  const handleClick = () =>{
    openMenuModal();
  }
  
  return (
    <>
    <header className={styles.container}>
      <div className={styles.logo}>
        MyNews
        <div onClick={handleClick} className={styles.svgDiv}>
         <img src={Hamburger} alt="Menu"></img>
        </div>
      </div>
      <div className={styles.search}>
        <Search></Search>
      </div>      
    </header>
    <MenuModal showMenu={showMenuModal} setShowMenu={setShowMenuModal}></MenuModal>
    </>
  );
};
