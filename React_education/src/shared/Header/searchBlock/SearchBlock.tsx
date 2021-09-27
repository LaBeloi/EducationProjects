import React, { useContext } from 'react';
import styles from './shearchBlock.css';
import { UserBlock } from './UserBlock/UserBlock';
import { useUserData } from '../../../hooks/useUserData';

export function SearchBlock() {
    const { data, loading } = useUserData()
    return (
        <div className={styles.searchBlock}>
            <UserBlock avatarSrc={data.iconImg} username={data.name} loading={loading} />
        </div>
    );
}