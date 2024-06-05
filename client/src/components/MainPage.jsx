// React 라이브러리와 useEffect 훅을 불러옴
import React, { useEffect } from 'react';
// SwiperPage 컴포넌트를 불러옴
import SwiperPage from './SwiperPage';
// MainPage 컴포넌트의 스타일 시트를 불러옴
import './MainPage.css';
// AboutPage 컴포넌트를 불러옴
import AboutPage from "./AboutPage";
// PortfolioPage 컴포넌트를 불러옴
import PortfolioPage from "./PortfolioPage";
// ContactPage 컴포넌트를 불러옴
import ContactPage from "./ContactPage";
// CategoryListPage 컴포넌트를 불러옴
import CategoryListPage from './CategoryListPage';

// MainPage 컴포넌트를 정의
const MainPage = () => {
    useEffect(() => {
        // 배경 비디오 요소를 선택
        const video = document.querySelector('.background-video');

        // 비디오 크기를 조정하는 함수
        const resizeVideo = () => {
            const aspectRatio = 16 / 9; // 비디오의 가로세로 비율 설정
            const windowRatio = window.innerWidth / window.innerHeight; // 창의 가로세로 비율 계산

            // 창의 비율이 비디오 비율보다 작으면 높이에 맞추고, 그렇지 않으면 너비에 맞춤
            if (windowRatio < aspectRatio) {
                video.style.width = 'auto';
                video.style.height = '100%';
            } else {
                video.style.width = '100%';
                video.style.height = 'auto';
            }
        };

        // 비디오를 3초부터 재생하는 함수
        const startVideoAtFiveSeconds = () => {
            video.currentTime = 3; // 비디오 시작 시간을 3초로 설정
            video.play(); // 비디오 재생
        };

        // 초기 비디오 크기 조정
        resizeVideo();
        // 비디오 3초부터 재생 시작
        startVideoAtFiveSeconds();

        // 창 크기 변경 시 비디오 크기 재조정
        window.addEventListener('resize', resizeVideo);

        // 컴포넌트 언마운트 시 이벤트 리스너 제거
        return () => {
            window.removeEventListener('resize', resizeVideo);
        };
    }, []);

    return (
        // 전체 페이지를 감싸는 div 요소에 main-page 클래스를 적용
        <div className="main-page">
            {/* 비디오 컨테이너를 정의하는 div 요소에 video-container 클래스를 적용 */}
            <div className="video-container">
                {/* 자동 재생, 반복, 음소거된 비디오 요소에 background-video 클래스를 적용 */}
                <video autoPlay loop muted className="background-video">
                    {/* 비디오 소스를 설정 */}
                    <source src="./uploads/video.mp4" type="video/mp4"/>
                </video>
                {/* 메인 페이지 콘텐츠를 포함하는 div 요소에 main-page-content 클래스를 적용 */}
                <div className="main-page-content">
                    {/* 메인 제목을 나타내는 h1 요소 */}
                    <h1>Cinemadoc,<br/>where the imagination becomes reality.</h1>
                </div>
            </div>
            {/* 스와이퍼 페이지를 포함하는 div 요소에 swiper-wrapper 클래스를 적용 */}
            <div className="swiper-wrapper">
                <SwiperPage/>
            </div>
            {/* About 섹션을 포함하는 div 요소에 section 및 about-section 클래스를 적용 */}
            <div className="section about-section">
                <AboutPage/>
            </div>
            {/* Portfolio 섹션을 포함하는 div 요소에 section 및 portfolio-section 클래스를 적용 */}
            <div className="section portfolio-section">
                <PortfolioPage/>
            </div>
            {/* Request 섹션을 포함하는 div 요소에 section 및 request-section 클래스를 적용 */}
            <div className="section request-section">
                <CategoryListPage/>
            </div>
            {/* Contact 섹션을 포함하는 div 요소에 section 및 contact-section 클래스를 적용 */}
            <div className="section contact-section">
                <ContactPage/>
            </div>
        </div>
    );
};

// MainPage 컴포넌트를 기본 내보내기
export default MainPage;
