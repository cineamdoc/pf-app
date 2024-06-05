// React 라이브러리를 불러옴
import React from 'react';
// ContactPage 컴포넌트의 스타일 시트를 불러옴
import './ContactPage.css';

// ContactPage 컴포넌트를 정의
const ContactPage = () => {
    return (
        // 페이지 전체를 감싸는 div 요소에 contact-page 클래스를 적용
        <div className="contact-page">
            {/* 사이드바를 정의하는 div 요소에 sidebar 클래스를 적용 */}
            <div className="sidebar">
                {/* 사이드바 항목을 정의하는 div 요소에 sidebar-item 및 active 클래스를 적용 */}
                <div className="sidebar-item active">MOBLE ACADEMY</div>
                {/* 사이드바 항목을 정의하는 div 요소에 sidebar-item 클래스를 적용 */}
                <div className="sidebar-item">HOME TOWN</div>
                {/* 사이드바 항목을 정의하는 div 요소에 sidebar-item 클래스를 적용 */}
                <div className="sidebar-item">THE PLACE1717</div>
            </div>
            {/* 메인 콘텐츠를 정의하는 div 요소에 main-content 클래스를 적용 */}
            <div className="main-content">
                {/* 페이지 제목을 나타내는 h1 요소 */}
                <h1>MOBLE ACADEMY</h1>
                {/* 주소를 나타내는 p 요소 */}
                <p>충청남도 천안시 동남구 대흥동 번지 4층 21-5 화일빌딩 403호</p>
                {/* 전화번호를 나타내는 p 요소 */}
                <p>+82 2 6391 7000</p>
                {/* 지도 컨테이너를 정의하는 div 요소에 map-container 클래스를 적용 */}
                <div className="map-container">
                    {/* Google Maps iframe을 포함하여 위치를 표시 */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.7688271841143!2d127.14459009167774!3d36.810383202734954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b28403c002ad3%3A0x708012336f482f28!2z66qo67iU6rWQ7Jyh7IS87YSw7Y-J7IOd6rWQ7Jyh7JuQ!5e0!3m2!1sko!2skr!4v1717123484865!5m2!1sko!2skr"
                        width="100%" /* 너비를 100%로 설정 */
                        height="450" /* 높이를 450px로 설정 */
                        style={{border: 0}} /* 테두리를 없앰 */
                        allowFullScreen="" /* 전체 화면을 허용 */
                        loading="lazy" /* 지도를 게으르게 로딩 */
                        title="Moble Lifelong Education Center Location" /* 프레임의 제목을 설정 */
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

// ContactPage 컴포넌트를 기본 내보내기
export default ContactPage;
