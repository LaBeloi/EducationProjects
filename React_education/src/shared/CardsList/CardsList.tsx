import React, { useEffect, useRef, useState } from 'react';
import styles from './cardsList.css';
import { Card } from './Card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import axios from 'axios';
import { IResponseObject, savePostsData } from '../../store/postsData/postsData';
import { addPostsData } from '../../store/addPostsData/addPostsData';

export function CardsList() {
    const token = useSelector<RootState>(state => state.token);
    const postsData = useSelector<RootState, IResponseObject[]>(state => state.postsData)
    const [ nextAfter, setNextAfter ] = useState('');
    const [ errorLoading, setErrorLoading ] = useState('');
    const [ loadingStatus, setLoadingStatus ] = useState(false);
    const [ loadingQuantity, setLoadingQuantity ] = useState(0);
    const [ quantityStatus, setQuantityStatus ] = useState(false);
    const bottomOfList = useRef<HTMLDivElement>(null);
    const dispatch = useDispatch();

    useEffect(() => {
        async function loadData() {
            setLoadingStatus(true);
            try {
                setErrorLoading('');
                const { data: {data: {children, after}} } = await axios.get('https://oauth.reddit.com/new', {
                    headers: { Authorization: `bearer ${token}` },
                    params: {
                        limit: 10,
                        after: nextAfter,
                    }
                })
                const dataArr:IResponseObject[] = [];
                for (let i of children) {
                    dataArr.push({title: i.data.title, name: i.data.author, published: i.data.created, likes: i.data.score, key: i.data.id})
                }
                dispatch(addPostsData(dataArr))
                setNextAfter(after);
            } catch(err) {
                setErrorLoading(String(err));
            }
            setLoadingStatus(false)
        }

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && loadingQuantity !== 3 || entries[0].isIntersecting && quantityStatus) {
                loadData();
                setLoadingQuantity( prevQuantitu => prevQuantitu + 1 );
                if (loadingQuantity === 2) {
                    setQuantityStatus(false)
                }
            }
        }, {
            rootMargin: '10px',
        });

        if (bottomOfList.current) {
            observer.observe(bottomOfList.current);
        }

        return () => {
            if (bottomOfList.current) {
                observer.unobserve(bottomOfList.current);
            }
        }
    }, [bottomOfList.current, token, nextAfter, quantityStatus])

    return (
            <ul className={styles.cardsList}>
                {!errorLoading && !loadingStatus && postsData.length === 0 && (<div style={{textAlign:"center"}} >Данных нет :)</div>)}
                {postsData && postsData.length > 1  && postsData.map((item) => <Card key={item.key} id={item.key} />)}
                {!errorLoading && !loadingStatus && loadingQuantity === 3 && 
                    (<div className={styles.loadingSubmit} >
                        <button 
                            className={styles.loadingSubmitButton} 
                            onClick={() => {
                                setLoadingQuantity(0);
                                setQuantityStatus(true);
                            }}
                        >
                            Загрузить ещё
                        </button>
                    </div>)
                }
                {!errorLoading && loadingStatus && (<div style={{textAlign:"center"}} >Загрузка...</div>)}
                {errorLoading && (<div style={{textAlign:"center"}} >{errorLoading}</div>)}
                <div ref={bottomOfList} />
            </ul>
    );
}
  