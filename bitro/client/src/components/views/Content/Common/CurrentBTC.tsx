import React from 'react'
import { MdNotifications } from 'react-icons/md'
import './CurrentBTC.css';
function CurrentBTC() {
    return (
        <div className="height15 bgWhite p15 commonBorderBottom maxHeight95">
            <div className="height30"></div>
            <div className="height70">
                <span className="priceSpan">
                    1 비트코인 현재가 = ₩ 634,789,123
                </span>
                <span className="alarmSpan">
                    <MdNotifications />
                </span>
            </div>
        </div>
    )
}

export default CurrentBTC
