import React from 'react'
import './Myasset.css';

function Myasset() {
    return (
        <div>
            <span className="labelSpan">나의 자산</span>
            <span className="numberSpan">
                <span>10.1010101010 BTC</span>
                <br />
                <span className="krwSpan">505050505050505050505050 KRW</span>
            </span>
        </div>
    )
}

export default Myasset
