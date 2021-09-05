import React from 'react';
import styles from './poster.css';

export function Poster() {
    return (
        <div className={styles.poster}>
            {/* <h1 className={styles.posterHeader}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro iusto natus dolorum iste, distinctio hic dolo.</h1> */}
            <img className={styles.posterImg} src="https://cdn.dribbble.com/users/788099/screenshots/15882693/media/db15dc450c9284164bd2c9ed062f5130.jpg?compress=1&resize=400x300" alt="" />
        </div>
    );
}