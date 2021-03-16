import React from 'react';
import './SettingMenu.css';


interface Props {
    menuTitle: string;
}

function SettingMenu(props: Props) {
    return (
        <div className="settingMenu">
            <span>{props.menuTitle}</span>
            <span>&gt;</span>
        </div>
    )
}

export default SettingMenu
