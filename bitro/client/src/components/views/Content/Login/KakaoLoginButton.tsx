import React, { useEffect } from 'react'

declare global {
    interface Window {
      Kakao: any;
    }
  }
  const { Kakao } = window;

const KakaoLoginButton = () => {
  const clickLogin = () => {
    // kakao sdk script이 정상적으로 불러와졌으면 window.Kakao로 접근이 가능합니다
    if (window.Kakao) {
      const kakao = window.Kakao
      // 중복 initialization 방지
      if (!kakao.isInitialized()) {
        // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
        kakao.init('0bcf2265e9d132ca66fa1037b1be2270')
      }

      kakao.Auth.authorize({
        redirectUri: 'http://localhost:3000'
      });
    }
  }
  return (
    <div className="kakao-login-button">
      {/* Kakao login button */}
      <button id="kakao-login-btn" onClick={clickLogin}>
        <img src="/icons/kakao.png" alt="kakao-login-icon" />
      </button>
    </div>
  )
}
export default KakaoLoginButton