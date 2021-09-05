import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import styles from './replyForm.css';

interface IReplyForm {
    author?: string,
    onClose: () => void,
}

export function ReplyForm(props:IReplyForm) {
    const [comment, setComment] = useState(`${props.author !== undefined ? props.author : 'Аноним'}, `);
    const ref = useRef<HTMLTextAreaElement>(null)

    function handleChange(e:ChangeEvent<HTMLTextAreaElement>) {
        setComment(e.target.value);
    };

    function handleSubmit(e:FormEvent) {
        e.preventDefault()
        console.log(comment);
        props.onClose()
    }

    return (
        <form className={styles.container} onSubmit={handleSubmit}>
            <textarea 
                className={styles.textInput} 
                value={comment} 
                onChange={handleChange} 
                ref={(ref) => {ref && ref.focus()}} 
                onFocus={(e) => setTimeout(function() { e.target.selectionStart = e.target.selectionEnd = 10000 }, 0 )}
            />
            <button type="submit" className={styles.submitButton} >Отправить</button>
        </form>
    )
} 