import React, { useRef } from 'react'
import { Sidebar } from '../Sidebar/Sidebar';
import styles from './MenuModal.module.scss'
import X from "../../assets/X.svg";

export const MenuModal = ({showMenu, setShowMenu}) => {

    const modalRef = useRef();

    const close=()=>{
        setShowMenu(false)
      }

    return (
        <>
            {showMenu ? (<div className={styles.modal} ref={modalRef}>
                <div className={styles.modalContent}>
                <div  onClick={close} className={styles.closeBtn} ><img src={X} alt="closeModal"></img></div>
                <div className={styles.heading}>MyNews</div>
                <div className={styles.sidebar}><Sidebar></Sidebar></div>
                </div>
            </div>) : null }
        </>
    );
}
