import React, { useCallback, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './dropdown.css';

interface IDropdownProps {
    button: React.ReactNode;
    children: React.ReactNode;
    isOpen?: boolean;
    id?: string;
};

export function Dropdown({ button, children, isOpen, id }: IDropdownProps) {
  const [isDropdownActive, setIsDropdownActive] = useState(isOpen)
    const [cors, setCors] = useState<DOMRect>()

    const ref = useRef<HTMLDivElement>(null)

    const click = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const elem = e.currentTarget;
        const elemCors = elem.getBoundingClientRect()
        setCors(elemCors)
        if (isOpen === false) {
            setIsDropdownActive(!isDropdownActive)
        }
    }

    const container = document.querySelector('#dropdown_root');
    if (!container) return null
    
    return (
        <div>
            <div className={styles.container} onClick={(e) => {
                click(e)
            }}>
                {button}
                {isDropdownActive && (
                ReactDOM.createPortal((<div
                    style={{
                        position: 'absolute',
                        top: cors!.top - 60,
                        right: cors!.right - 1250,
                    }}
                    onClick={() => {
                        setIsDropdownActive(false)
                    }}
                >
                    {children}
                </div>), container)
            )}
            </div>
        </div>
    );

}