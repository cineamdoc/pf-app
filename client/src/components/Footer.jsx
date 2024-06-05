// React 라이브러리를 불러옴
import React from 'react';
// Footer 컴포넌트의 스타일 시트를 불러옴
import './Footer.css';

// Footer 컴포넌트를 정의
const Footer = () => {
    return (
        // footer HTML 요소에 footer 클래스를 적용하여 푸터 영역을 정의
        <footer className="footer">
            {/* 회사 주소를 표시하는 p 요소 */}
            <p>CINEMADOC, DDMC 18/19F, 75, Maebongsan-ro, Mapo-gu, Seoul, Korea</p>
            {/* 회사 전화번호와 이메일 주소를 표시하는 p 요소 */}
            <p>+82 01 6340 7524 | cinemadoc@naver.com</p>
            {/* 저작권 정보를 표시하는 p 요소 */}
            <p>©CINEMADOC. All Rights Reserved.</p>
        </footer>
    );
};

// Footer 컴포넌트를 기본 내보내기
export default Footer;
