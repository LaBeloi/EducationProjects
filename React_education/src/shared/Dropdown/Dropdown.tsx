import React from 'react';
import styles from './dropdown.css';

interface IDropdownProps {
    button: React.ReactNode;
    children: React.ReactNode;
    isOpen?: boolean;
};

export function Dropdown({ button, children, isOpen }:IDropdownProps) {
    const [isDropdownActive, setIsDropdownActive] = React.useState(isOpen)

    const click = () => {
        if (isOpen === false) {
            setIsDropdownActive(!isDropdownActive)
        }
    }

    return (
        <div>
            <div onClick={() => click()}>
                { button }
            </div>
            {isDropdownActive && (
                <div onClick={() => setIsDropdownActive(false)}>
                    { children }
                </div>
            )}
        </div>
    );

}