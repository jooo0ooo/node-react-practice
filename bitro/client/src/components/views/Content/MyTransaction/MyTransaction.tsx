import React from 'react';
import CurrentBTC from '../Common/CurrentBTC';
import RadioOption from '../Common/RadioOption';

function MyTransaction() {
    return (
        <div className="content">
            <CurrentBTC />
            <div className="height85 bgWhite">
                <RadioOption 
                    defaultValue="processing" 
                    leftOptionValue="processing" 
                    leftOptionText="진행 중인 거래" 
                    rightOptionValue="completed" 
                    rightOptionText="완료된 거래"
                />
            </div>
        </div>
    )
}

export default MyTransaction
