import React, { useContext } from 'react';
import styles from './card.css';
import { Poster } from './Poster/Poster';
import { UserField } from './UserIdField/UserField';
import { ButtonsField } from './ButtonsField/ButtonsField';
import { Burger } from './Burger/Burger';
import { DropList } from './Burger/DropList/DropList';
import { Dropdown } from '../../Dropdown/Dropdown';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { IResponseObject } from '../../../store/postsData/postsData';

interface ICard {
    id: string
}

export function Card( { id } : ICard ) {
    const list = useSelector<RootState, IResponseObject[]>(state => state.postsData);
    let item;
    if (!list) return <div>Error</div>
    for (let i of list) {
        if (i.key === id) {
            item = i;
        }
    }
    const now = new Date().getTime() / 1000;
    const time = Math.round(((now - item?.published!)/60)/60)
    return (
        <li className={styles.card} id={item?.key} >
            <UserField postId={id} title={item?.title} name={item?.name} time={time} />
            <Poster />
            <ButtonsField likes={item?.likes} />
            <Dropdown 
                button={<Burger />}
                children={<DropList />}
                isOpen={false}
                id={item?.key}
            />
        </li>
    );
};