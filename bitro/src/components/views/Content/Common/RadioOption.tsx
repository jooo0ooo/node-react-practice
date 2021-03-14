import React from 'react'
import { Radio } from 'antd';
import './RadioOption.css'

interface Props {
    defaultValue: string
    leftOptionValue: string;
    rightOptionValue: string;
    leftOptionText: string;
    rightOptionText: string;
}

function RadioOption(props: Props) {
    return (
        <div className="radioDiv width100 p15">
            <Radio.Group defaultValue={props.defaultValue} size="large">
                <Radio.Button value={props.leftOptionValue}>{props.leftOptionText}</Radio.Button>
                <Radio.Button value={props.rightOptionValue}>{props.rightOptionText}</Radio.Button>
            </Radio.Group>
        </div>
    )
}

export default RadioOption