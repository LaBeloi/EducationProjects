import React from 'react';
import { EIcons, Icon } from '../../../Icon/Icon';
import styles from './userField.css';

interface IUserField {
    title?: string,
    name?: string,
    time?: number,
}

export function UserField({ title, name, time }: IUserField) {
    return (
        <div className={styles.userField}>
            <div className={styles.seen}>
                <Icon name={EIcons.Eye} />
                1 час назад
            </div>
            <div className={styles.userInfo}>
                <div className={styles.user}>
                    <img className={styles.userImg} src="" alt="" />
                    <a className={styles.userName} href="">{name}</a>
                </div>
                <span className={styles.userTime}>
                    <span className={styles.userTimePublished}>
                        опубликовано 
                    </span>
                    {time} часов назад
                </span>
            </div>
            <h1 className={styles.posterHeader}>{title}</h1>
        </div>
        
    );
};