import React from "react";
import classNames from "classnames";
import { Report } from "../Icons/Report";
import { Share } from "../Icons/Share";
import { Save } from "../Icons/Save";
import { Comments } from "../Icons/Comments";
import { Hide } from "../Icons/Hide";
import { Eye } from "../Icons/Eye";
import { Anonimus } from "../Icons/Anonimus";

export enum EIcons {
    report = 'Report',
    save = 'Save',
    share = 'Share',
    comments = 'Comments',
    hide = 'Hide',
    Eye = 'Eye',
    Anonimus = 'Anonimus',
}

interface IIconProps {
    name: EIcons;
    size?: number;
};

export function Icon({ name, size }: IIconProps) {
    switch(name) {
        case 'Save':
            return (
                <Save size={size} />
            )
        case 'Share':
            return (
                <Share size={size} />
            )
        case 'Comments':
            return (
                <Comments size={size} />
            )
        case 'Report':
            return (
                <Report size={size} />
            )
        case 'Hide':
            return (
                <Hide size={size} />
            )
        case 'Eye':
            return (
                <Eye size={size} />
            )
        case 'Anonimus':
            return (
                <Anonimus size={size} />
            )
        default:
            return null
    }   
}