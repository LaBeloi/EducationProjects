import React from "react";
import { Break } from "../../../Break/Break";
import { EIcons, Icon } from "../../../Icon/Icon";
import { EColor, Text } from "../../../Text/Text";
import styles from './UserBlock.css'

interface IUserBlockProps {
    avatarSrc?: string
    username?: string
    loading?: boolean
}

export function UserBlock({ avatarSrc, username, loading } : IUserBlockProps) {
    return (
        <a
            href="https://www.reddit.com/api/v1/authorize?client_id=T-aPHbv2gebrDzJXePoyWw&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity" 
            className={styles.userBox}
        >
            <div className={styles.avatarBox}>
                {avatarSrc ? <img src={avatarSrc} alt={'User avatar'} className={styles.avatarImage} /> : <Icon name={EIcons.Anonimus}/>}
            </div>

            <div className={styles.username}>
                <Break size={12} />
                {loading ? <Text size={20} color={EColor.grey99}>Loading...</Text> : <Text size={20} color={username ? EColor.black : EColor.grey99}>{username || 'Anonimus'}</Text>}
            </div>
        </a>
    )
}