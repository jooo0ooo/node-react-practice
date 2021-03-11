import React from 'react'
import { Rate } from 'antd';
import 'antd/dist/antd.css';

function Setting() {

    const leftStyle = {
        float: 'left'
    } as React.CSSProperties;

    const rightStyle = {
        float: 'right'
    } as React.CSSProperties;

    return (
        <div className="content">
            <div style={{height: '15%', padding: '15px', borderBottom: '2px solid #ebebeb', backgroundColor: 'white'}}>
                <div style={{height: '50%'}}></div>
                <div style={{height: '50%'}}>
                    <div style={{width: '75%', height: '100%', display: 'inline-block', float: 'left', textAlign: 'left'}}>
                        <img style={{maxHeight: '100%', display: 'inline-block', marginBottom: '35px'}} src={process.env.PUBLIC_URL + '/joo.png'} />
                        <span style={{display: 'inline-block', marginLeft: '10px'}}>
                            <span>
                                joo0oo
                            </span>
                            <br/>
                            <span style={{lineHeight: '20px'}} className="starSpan"><Rate disabled defaultValue={5} /></span>
                            <span style={{marginLeft: '5px'}}>7</span>
                        </span>
                    </div>
                    <div style={{width: '25%', height: '100%', display: 'inline-block', float: 'left'}}>
                        <div style={{marginTop: '15px', backgroundColor: 'black', color: 'white', padding: '5px 10px', borderRadius: '5px'}}>로그아웃</div>
                    </div>
                </div>
            </div>
            <div style={{height: '15%', borderBottom: '2px solid #ebebeb', backgroundColor: 'white'}}>
                <div style={{height: '50%'}}>
                    <span style={{float: 'left', padding: '10px 20px'}}>나의 자산</span>
                    <span style={{float: 'right', padding: '10px 20px', textAlign: 'right', fontWeight: 'bold', lineHeight: '17px'}}>
                        <span>10.1010101010 BTC</span>
                        <br />
                        <span style={{fontSize: '13px', color: 'gray'}}>505050505050505050505050 KRW</span>
                    </span>
                </div>
                <div style={{height: '50%'}}>
                    <div style={{display: 'inline-block', width: '27%', backgroundColor: 'black', color: 'white', padding: '5px 10px', margin: '10px', borderRadius: '5px', float: 'left', marginLeft: '5%'}}>입금</div>
                    <div style={{display: 'inline-block', width: '27%', backgroundColor: 'black', color: 'white', padding: '5px 10px', margin: '10px', borderRadius: '5px', float: 'left'}}>출금</div>
                    <div style={{display: 'inline-block', width: '27%', backgroundColor: 'black', color: 'white', padding: '5px 10px', margin: '10px', borderRadius: '5px', float: 'left'}}>입출금 내역</div>
                </div>
            </div>
            <div style={{height: '20%', marginBottom: '5%', backgroundColor: 'white'}}>
                <div style={{padding: '15px 20px', fontWeight: 'bold'}}><span style={leftStyle}>내 정보</span> <span style={rightStyle}>&gt;</span></div><br/>
                <div style={{padding: '15px 20px', fontWeight: 'bold'}}><span style={leftStyle}>리뷰</span> <span style={rightStyle}>&gt;</span></div><br/>
                <div style={{padding: '15px 20px', fontWeight: 'bold'}}><span style={leftStyle}>앱 설정</span> <span style={rightStyle}>&gt;</span></div><br/>
            </div>
            <div style={{height: '50%', backgroundColor: 'white'}}>
                <div style={{padding: '15px 20px', fontWeight: 'bold'}}><span style={leftStyle}>공지사항</span> <span style={rightStyle}>&gt;</span></div><br/>
                <div style={{padding: '15px 20px', fontWeight: 'bold'}}><span style={leftStyle}>거래하는 방법</span> <span style={rightStyle}>&gt;</span></div><br/>
                <div style={{padding: '15px 20px', fontWeight: 'bold'}}><span style={leftStyle}>FAQ</span> <span style={rightStyle}>&gt;</span></div><br/>
                <div style={{padding: '15px 20px', fontWeight: 'bold'}}><span style={leftStyle}>이용약관 및 개인정보처리방침</span> <span style={rightStyle}>&gt;</span></div><br/>
                <div style={{padding: '15px 20px', fontWeight: 'bold'}}><span style={leftStyle}>카카오톡 문의하기</span> <span style={rightStyle}>&gt;</span></div><br/>
                <div style={{padding: '15px 20px', textAlign: 'left', color: 'gray', fontSize: '0.9rem'}}>Web Version 1.0.0</div>
            </div>
        </div>
    )
}

export default Setting
