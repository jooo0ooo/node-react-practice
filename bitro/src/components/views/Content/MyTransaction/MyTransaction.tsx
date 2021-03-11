import React from 'react';
import { MdNotifications } from 'react-icons/md'
import { Radio } from 'antd';

function MyTransaction() {
    return (
        <div className="content">
            <div style={{height: '15%', padding: '15px', borderBottom: '2px solid #ebebeb', backgroundColor: 'white'}}>
                <div style={{height: '50%'}}></div>
                <div style={{height: '50%'}}>
                    <span style={{float: 'left', paddingTop: '6%'}}>
                        1 비트코인 현재가 = ₩ 634,789,123
                    </span>
                    <span className="alarmSpan" style={{float: 'right', paddingTop: '6%'}}>
                        <MdNotifications />
                    </span>
                </div>
            </div>
            <div style={{height: '100%', backgroundColor: 'white'}}>
                <div className="radioDiv" style={{width: '100%', padding: '15px'}}>
                    <Radio.Group defaultValue="processing" size="large">
                        <Radio.Button value="processing">진행 중인 거래</Radio.Button>
                        <Radio.Button value="completed">완료된 거래</Radio.Button>
                    </Radio.Group>
                </div>
                
            </div>
        </div>
    )
}

export default MyTransaction
