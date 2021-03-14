import React from 'react'
import CurrentBTC from '../Common/CurrentBTC';
import Myasset from '../Common/Myasset';
import RadioOption from '../Common/RadioOption';

function Home() {
    return (
        <div className="content">
            <CurrentBTC />
            <div className="height85 bgWhite">
                <Myasset />
                <RadioOption 
                    defaultValue="sell"
                    leftOptionValue="sell"
                    leftOptionText="팝니다"
                    rightOptionValue="buy"
                    rightOptionText="삽니다"
                />
            </div>
        </div>
    )
}

export default Home
