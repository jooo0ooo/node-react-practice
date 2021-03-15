import React from 'react';
import './SettingMenu.css';


interface Props {
    leftOption: string;
    rightOption: string;
}

function SettingMenu(props: Props) {
    return (
        <div className="settingMenu">
            <span>{props.leftOption}</span>
            <span>{props.rightOption}</span>
        </div>
    )
}

export default SettingMenu
