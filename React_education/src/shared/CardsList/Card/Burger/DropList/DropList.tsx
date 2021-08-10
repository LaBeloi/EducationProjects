import React from 'react';
import { EIcons, Icon } from '../../../../Icon/Icon';
import styles from './dropList.css';

export function DropList() {
    return (
        <div className={styles.container}>
            <ul className={styles.list}>
                <li className={styles.listItem}>
                    <Icon name={EIcons.comments} /> 
                    Комментарии
                </li>
                <li className={styles.listItem}>
                    <Icon name={EIcons.share} /> 
                    Поделиться
                </li>
                <li className={styles.listItem}>
                    <Icon name={EIcons.hide} /> 
                    Скрыть
                </li>
                <li className={styles.listItem}>
                    <Icon name={EIcons.save} /> 
                    Сохранить
                </li>
                <li className={styles.listItem}>
                    <Icon name={EIcons.report} /> 
                    Пожаловаться
                </li>
            </ul>
            <button className={styles.btn}>
                Закрыть
            </button>
        </div>
    );
}