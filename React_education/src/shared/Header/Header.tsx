import React from 'react';
import styles from './header.css';
import { SearchBlock } from './searchBlock/SearchBlock';
import { TreadTitle } from './TreadTitle/TreadTitle';
import { SortBlock } from './Sortblock/SortBlock';

export function Header() {
    return (
        <header className={styles.header}>
            <SearchBlock  />
            <TreadTitle />
            <SortBlock />
        </header>
    );
}