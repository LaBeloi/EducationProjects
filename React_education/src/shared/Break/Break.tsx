import React from "react";
import classNames from "classnames";
import style from './break.css';

type TBreakSize = 4 | 8 | 12 | 16 | 20;
type TDisplays = 'mobile' | 'tablet' | 'desktop';

interface IBreakProps {
    size: TBreakSize;
    mobileSize?: TBreakSize;
    tabletSize?: TBreakSize;
    desktopSize?: TBreakSize;
    inline?: boolean;
    top?: boolean;
}

export function Break(props: IBreakProps) {
    const { inline = false, top = false, size, mobileSize, tabletSize, desktopSize } = props;

    return (
        <div
            className={classNames(
                style[`s${size}`],
                { [style[`mobile_s${mobileSize}`]] : mobileSize },
                { [style[`tablet_s${tabletSize}`]] : tabletSize },
                { [style[`desktop_s${desktopSize}`]] : desktopSize },
                { [style.inline] : inline },
                { [style.top] :top }
            )}
        />
    );
}