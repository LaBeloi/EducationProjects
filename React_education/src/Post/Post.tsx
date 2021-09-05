import React, { useContext, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { CommentForm } from "../CommentForm/CommentForm";
import { CommentsDataContext, CommentsDataContextProvider } from "../shared/context/CommentsDataContext";
import { CommentsPost } from "./CommentsPost/CommentsPost";
import styles from './post.css';

interface IPost {
    onClose?: () => void;
}

export function Post(props:IPost) {
    const ref = useRef<HTMLDivElement>(null);
    const data = useContext(CommentsDataContext);
    useEffect(() => {
        function handleClick(e:MouseEvent) {
            if( e.target instanceof Node && !ref.current?.contains(e.target)) {
                props.onClose?.();
            }
        }
        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick)
        }
    }, []);
    
    const node = document.querySelector('#modal_root');
    if(!node) return null

    return ReactDOM.createPortal((
        <div className={styles.modal} ref={ref}>
            <h2 className={styles.header}>{data.post?.title}</h2>
            <div className={styles.content}>
                <p className={styles.paragraph} >{data.post?.selftext}</p>
            </div>
            <CommentForm />
            <CommentsPost />
        </div>
    ), node);
}