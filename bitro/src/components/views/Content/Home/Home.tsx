import React from 'react'
import { MdNotifications } from 'react-icons/md'
import { Radio } from 'antd';

function Home() {
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
            <div style={{height: '85%', backgroundColor: 'white'}}>
                <div>
                    <span style={{float: 'left', padding: '10px 20px'}}>나의 자산</span>
                    <span style={{float: 'right', padding: '10px 20px', textAlign: 'right', fontWeight: 'bold', lineHeight: '17px'}}>
                        <span>10.1010101010 BTC</span>
                        <br />
                        <span style={{fontSize: '13px', color: 'gray'}}>505050505050505050505050 KRW</span>
                    </span>
                </div>
                <div className="radioDiv" style={{width: '100%', padding: '15px'}}>
                    <Radio.Group defaultValue="processing" size="large">
                        <Radio.Button value="processing">팝니다</Radio.Button>
                        <Radio.Button value="completed">삽니다</Radio.Button>
                    </Radio.Group>
                </div>
            </div>
        </div>
    )
}

export default Home
