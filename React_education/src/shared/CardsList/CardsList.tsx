import React, { useContext } from 'react';
import styles from './cardsList.css';
import { Card } from './Card/Card';
import { PostsContext } from '../context/PostsContext';

export function CardsList() {
    const list = useContext(PostsContext);
    return (
        <ul className={styles.cardsList}>
            {list.map((item) => <Card key={item.key} id={item.key} />)}
        </ul>
    );
}
 