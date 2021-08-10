import React, { useContext } from 'react';
import styles from './card.css';
import { Poster } from './Poster/Poster';
import { UserField } from './UserIdField/UserField';
import { ButtonsField } from './ButtonsField/ButtonsField';
import { Burger } from './Burger/Burger';
import { DropList } from './Burger/DropList/DropList';
import { Dropdown } from '../../Dropdown/Dropdown';
import { PostsContext } from '../../context/PostsContext';

interface ICard {
    id?: string
}

export function Card( { id } : ICard ) {
    const list = useContext(PostsContext);
    let item;
    for (let i of list) {
        if (i.key === id) {
            item = i;
        }
    }
    const now = new Date().getTime() / 1000;
    const time = Math.round(((now - item?.published!)/60)/60)
    return (
        <li className={styles.card}>
            <UserField title={item?.title} name={item?.name} time={time} />
            <Poster img={item?.preview} />
            <ButtonsField likes={item?.likes} />
            <Dropdown 
                button={<Burger />}
                children={<DropList />}
                isOpen={false}
            />
        </li>
    );
};