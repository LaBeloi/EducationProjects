import React from 'react';
import styles from './poster.css';
const urlChecker = require('valid-url');

interface IPoster {
    img?: string
}

export function Poster( { img } : IPoster ) {
    if (urlChecker.isUri(img) !== undefined) {
        return (
            <div className={styles.poster}>
                <img className={styles.posterImg} src={img} alt="Упс, фото нету :)" />
            </div>
        )
    }
    return (
        <div className={styles.poster}>
            <img className={styles.posterImg} src="https://cdn.dribbble.com/users/788099/screenshots/15882693/media/db15dc450c9284164bd2c9ed062f5130.jpg?compress=1&resize=400x300" alt="Упс, фото нету :)" />
        </div>
    );
}