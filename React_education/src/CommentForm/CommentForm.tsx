import React from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { RootState, updateModalComment } from "../store/store";
import styles from './CommentForm.css';
import { useFormik } from "formik";

interface I {
    comment?: string
}

const validate = (values:I) => {
    const errors:I = {};

    if (!values.comment) {
        errors.comment = 'Required';
    } else if (values.comment.length <= 3) {
        errors.comment = 'Must be more then 3 letters'
    }

    return errors;
}

export function CommentForm() {
    const dispatch = useDispatch();
    const value = useSelector<RootState, string>(state => state.modalCommentText);

    const formik = useFormik({
        initialValues: {
            comment: value || '',
        },
        validate,
        onSubmit: values => {
            dispatch(updateModalComment(values.comment))
            alert(values.comment)
        },
    });

    return (
        <form className={styles.form} onSubmit={formik.handleSubmit} >
            <textarea
                id={"comment"}
                name={"comment"}
                className={styles.textarea}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.comment}
            />
            {formik.touched.comment && formik.errors.comment ? (
                <div className={styles.errorMessage} >{formik.errors.comment}</div>
            ) : null }
            <button type="submit" className={styles.bnt}>Комментировать</button>
        </form>
    )
};