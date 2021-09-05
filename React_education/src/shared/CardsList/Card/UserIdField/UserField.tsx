import React, { useEffect, useRef, useState } from 'react';
import { useCommentsData } from '../../../../hooks/useCommentsData';
import { Post } from '../../../../Post/Post';
import {CommentsDataContextProvider } from '../../../context/CommentsDataContext';
import { EIcons, Icon } from '../../../Icon/Icon';
import styles from './userField.css';

interface IUserField {
    title?: string,
    name?: string,
    time?: number,
}
export function UserField({ title, name, time }: IUserField) { 
    const [isMOdalOpened, setIsModalOpened] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    let hour;
    if (time === 1) {
        hour = 'час'
    } else if (time === 2 || time === 3 || time === 4) {
        hour = 'часа'
    } else hour = 'часов'
    return (
        <div className={styles.userField} ref={ref}>
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
                    {time} {hour} назад
                </span>
            </div>
            <h1 className={styles.posterHeader} onClick={() => {
                setIsModalOpened(true)
            }} >{title}</h1>
            {isMOdalOpened && (
                <CommentsDataContextProvider postId={ref.current?.parentElement?.id!}>
                    <Post
                        onClose={() => { setIsModalOpened(false) }}
                    />
                </CommentsDataContextProvider>
            )}
        </div>
    );
};