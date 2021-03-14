import React from 'react'
import { Rate } from 'antd';
import 'antd/dist/antd.css';
import Myasset from '../Common/Myasset';
import SettingMenu from '../Common/SettingMenu';
import './Setting.css';

function Setting() {

    return (
        <div className="content">
            <div className="height15 bgWhite commonBorderBottom p15">
                <div className="height30"></div>
                <div className="height70 maxHeight120">
                    <div className="profileDiv">
                        <img src={process.env.PUBLIC_URL + '/joo.png'} />
                        <span>
                            <span>joo0oo</span>
                            <br/>
                            <span className="starSpan"><Rate disabled defaultValue={5} /></span>
                            <span>7</span>
                        </span>
                    </div>
                    <div className="logoutDiv">
                        <div>로그아웃</div>
                    </div>
                </div>
            </div>
            <div className="height18 bgWhite commonBorderBottom maxHeight120">
                <div className="height50">
                    <Myasset />
                </div>
                <div className="height50 setting3BtnDiv">
                    <div>입금</div>
                    <div>출금</div>
                    <div>입출금 내역</div>
                </div>
            </div>
            <div className="settingMenuDiv">
                <div className="height40 bgWhite settingMenuFirstSection maxHeight155">
                    <SettingMenu leftOption="내 정보" rightOption="&gt;"/>
                    <br/>

                    <SettingMenu leftOption="리뷰" rightOption="&gt;"/>
                    <br/>
                    
                    <SettingMenu leftOption="앱 설정" rightOption="&gt;"/>
                    <br/>
                </div>
                <div className="bgWhite settingMenuSecondSection">
                <SettingMenu leftOption="공지사항" rightOption="&gt;"/>
                    <br/>

                    <SettingMenu leftOption="거래하는 방법" rightOption="&gt;"/>
                    <br/>

                    <SettingMenu leftOption="FAQ" rightOption="&gt;"/>
                    <br/>

                    <SettingMenu leftOption="이용약관 및 개인정보처리방침" rightOption="&gt;"/>
                    <br/>
                    
                    <SettingMenu leftOption="카카오톡 문의하기" rightOption="&gt;"/>
                    
                    <div className="versionDiv bgWhite">Web Version 1.0.0</div>
                </div>
            </div>
        </div>
    )
}

export default Setting
