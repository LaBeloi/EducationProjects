import React, { ChangeEvent, FormEvent, useContext, useRef, useState } from "react";
import { commentContext } from "../shared/context/commentContext";
import styles from './CommentForm.css';

export function CommentForm() {
    const { value, onChange } = useContext(commentContext);

    function handleChange(e:ChangeEvent<HTMLTextAreaElement>) {
        onChange(e.target.value)
    }

    function handleSubmit(e:FormEvent) {
        e.preventDefault();
        console.log(value)
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit} >
            <textarea className={styles.textarea} value={value} onChange={handleChange} ></textarea>
            <button type="submit" className={styles.bnt}>Комментировать</button>
        </form>
    )   
};