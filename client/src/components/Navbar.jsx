// React 라이브러리와 훅을 불러옴
import React, { useState, useEffect } from 'react';
// Link 컴포넌트를 불러옴
import { Link } from 'react-router-dom';
// Navbar 컴포넌트의 스타일 시트를 불러옴
import './Navbar.css';

// Navbar 컴포넌트를 정의
const Navbar = () => {
    // 메뉴의 열림/닫힘 상태를 관리하는 상태 변수와 상태 업데이트 함수를 정의
    const [menuOpen, setMenuOpen] = useState(false);

    // 메뉴가 열리면 3초 후 자동으로 닫히도록 하는 효과를 설정
    useEffect(() => {
        let timer;
        if (menuOpen) {
            // 메뉴가 열리면 3초 후 메뉴를 닫음
            timer = setTimeout(() => {
                setMenuOpen(false);
            }, 3000);
        }
        // 컴포넌트 언마운트 시 타이머를 정리
        return () => clearTimeout(timer);
    }, [menuOpen]);

    // 메뉴 아이콘 클릭 시 메뉴의 열림/닫힘 상태를 토글하는 함수
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            {/* 네비게이션 바를 정의하는 nav 요소에 navbar 클래스를 적용 */}
            <nav className="navbar">
                {/* 로고를 포함하는 div 요소에 logo 클래스를 적용 */}
                <div className="logo">
                    <Link to="/">Realkey</Link> {/* 홈으로 이동하는 링크 */}
                </div>
                {/* 메뉴 아이콘을 포함하는 div 요소에 menu-icon 클래스를 적용, 클릭 시 메뉴 토글 */}
                <div className="menu-icon" onClick={toggleMenu}>
                    <div className="bar"></div> {/* 메뉴 아이콘 바 */}
                    <div className="bar"></div> {/* 메뉴 아이콘 바 */}
                    <div className="bar"></div> {/* 메뉴 아이콘 바 */}
                </div>
                {/* 네비게이션 메뉴를 포함하는 div 요소에 menu 클래스를 적용 */}
                <div className="menu">
                    <Link to="/about">ABOUT</Link> {/* ABOUT 페이지로 이동하는 링크 */}
                    <Link to="/portfolio">PORTFOLIO</Link> {/* PORTFOLIO 페이지로 이동하는 링크 */}
                    <Link to="/request">REQUEST</Link> {/* REQUEST 페이지로 이동하는 링크 */}
                    <Link to="/contact">CONTACT</Link> {/* CONTACT 페이지로 이동하는 링크 */}
                </div>
            </nav>
            {/* 슬라이드 메뉴를 정의하는 div 요소에 slide-menu 클래스를 적용, 메뉴 열림 상태에 따라 클래스 추가 */}
            <div className={`slide-menu ${menuOpen ? 'open' : ''}`}>
                <Link to="/about" onClick={toggleMenu}>ABOUT</Link> {/* ABOUT 페이지로 이동하는 링크 */}
                <Link to="/portfolio" onClick={toggleMenu}>PORTFOLIO</Link> {/* PORTFOLIO 페이지로 이동하는 링크 */}
                <Link to="/request" onClick={toggleMenu}>REQUEST</Link> {/* REQUEST 페이지로 이동하는 링크 */}
                <Link to="/contact" onClick={toggleMenu}>CONTACT</Link> {/* CONTACT 페이지로 이동하는 링크 */}
            </div>
            {/* 메뉴가 열렸을 때 화면을 어둡게 하는 오버레이, 클릭 시 메뉴 토글 */}
            {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}
        </>
    );
};

// Navbar 컴포넌트를 기본 내보내기
export default Navbar;
