import React, { useContext } from 'react';
import styles from './shearchBlock.css';
import { UserBlock } from './UserBlock/UserBlock';
import { userContext } from '../../context/userContext';

export function SearchBlock() {
    const { iconImg, name } = useContext(userContext);
    return (
        <div className={styles.searchBlock}>
            <UserBlock avatarSrc={iconImg} username={name} />
        </div>
    );
}