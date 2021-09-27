import React, { useContext, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { useHistory, useParams } from "react-router";
import { CommentForm } from "../CommentForm/CommentForm";
import { CommentsDataContext, CommentsDataContextProvider } from "../shared/context/CommentsDataContext";
import { CommentsPost } from "./CommentsPost/CommentsPost";
import styles from './post.css';

export function Post() {
    const ref = useRef<HTMLDivElement>(null);
    const history = useHistory()
    const data = useContext(CommentsDataContext);
    const [loading, setLoading] = useState(false);
    const id = useParams()
    useEffect(() => {
        function handleClick(e:MouseEvent) {
            if( e.target instanceof Node && !ref.current?.contains(e.target)) {
                history.push('/posts')
            }
        }
        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick)
        }
    }, []);
    
    useEffect(() => {
        setLoading(!loading)
    }, [data])

    const node = document.querySelector('#modal_root');
    if(!node) return null

    return ReactDOM.createPortal((
        <div className={styles.modal} ref={ref}>
            {loading 
                ? (<div style={{textAlign:"center"}}>Loading...</div>)
                : <><h2 className={styles.header}>{data.post?.title}</h2><div className={styles.content}>
                    <p className={styles.paragraph}>{data.post?.selftext}</p>
                </div><CommentForm /><CommentsPost /></>
            }
        </div>
    ), node);
}