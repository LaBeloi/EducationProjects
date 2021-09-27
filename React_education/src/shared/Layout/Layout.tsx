import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useToken } from '../../hooks/useToken';
import { setToken } from '../../store/store';
import { saveToken } from '../../store/token/token';
import styles from './layout.css';

interface ILayoutProps {
    children?: React.ReactNode;
}

export function Layout({ children }: ILayoutProps) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(saveToken())
    }, [])

    return (
        <div className={styles.layout}>
            {children}
        </div>
    );
}