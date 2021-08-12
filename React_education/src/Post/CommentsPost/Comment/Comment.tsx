import React from "react";
import { EIcons, Icon } from "../../../shared/Icon/Icon";
import { CommentsPost } from "../CommentsPost";
import styles from './Comment.css';

interface IComment {
    author?: string,
    created?: number,
    body?: string,
    children?: object[] | null;
}

export function Comment({ author, created, body, children }:IComment) {
    const now = new Date().getTime() / 1000;
    const time = Math.round(((now - created!)/60)/60)
    let hour;
    if (time === 1) {
        hour = 'час'
    } else if (time === 2 || time === 3 || time === 4) {
        hour = 'часа'
    } else hour = 'часов'
    return (
        <div className={styles.comment}>
            <div className={styles.likesCounter}>
                <button className={styles.like}>
                    <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.5 0L0 10H19L9.5 0Z" fill="#D9D9D9" />
                    </svg>
                </button>
                <button className={styles.disLike}>
                    <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.5 10L19 0L8.74228e-07 -1.66103e-06L9.5 10Z" fill="#D9D9D9" />
                    </svg>
                </button>
            </div>
            <div className={styles.info}>
                <div className={styles.userArea}>
                    <img className={styles.avatar} src="" alt="Аватар" />
                    <a className={styles.author}> {author}</a>
                    <span className={styles.time}> {time} {hour} назад</span>
                </div>
                <div className={styles.textArea}>
                    {body}
                </div>
                <ul className={styles.buttonsField}>
                    <li className={styles.buttonsItem}>
                        <button className={styles.buttonsItem__btn}>
                            <Icon name={EIcons.comments} /> 
                            Ответить
                        </button>
                    </li>
                    <li className={styles.buttonsItem}>
                        <button className={styles.buttonsItem__btn}>
                            <Icon name={EIcons.share} /> 
                            Поделиться
                        </button>
                    </li>
                    <li className={styles.buttonsItem}>
                        <button className={styles.buttonsItem__btn}>
                            <Icon name={EIcons.report} /> 
                            Пожаловаться
                        </button>
                    </li>
                </ul>
                { children && 
                    <CommentsPost recursionData={children} />
                }
            </div>
        </div>
    )
}