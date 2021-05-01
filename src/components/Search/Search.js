import React from 'react'
import styles from './Search.module.scss'
import SearchSvg from '../../assets/Search.svg'

export const Search = () => {
    return (
        <div className={styles.search}>
            <img className={styles.searchSvg} src={SearchSvg} alt="searchicon"></img>
            <input className={styles.searchInput} placeholder="Search news"></input>
            <button>SEARCH</button>

        </div>
    )
}
