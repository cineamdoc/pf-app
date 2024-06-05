// React 라이브러리를 불러옴
import React from 'react';
// PortfolioPage 컴포넌트의 스타일 시트를 불러옴
import './PortfolioPage.css';

// 포트폴리오 항목들을 정의한 배열
const portfolioItems = [
    {
        title: "CONTENTS", // 항목 제목
        image: "./uploads/image1.jpg", // 항목 이미지 경로
        link: "./contents", // 항목 링크
        description: "Description for contents" // 항목 설명
    },
    {
        title: "VISUAL EFFECT",
        image: "./uploads/image1.jpg",
        link: "./visual-effect",
        description: "Description for visual effect"
    },
    {
        title: "VIRTUAL PRODUCTION",
        image: "./uploads/image1.jpg",
        link: "./virtual-production",
        description: "Description for virtual production"
    },
    {
        title: "DIGITAL INTERMEDIATE",
        image: "./uploads/image1.jpg",
        link: "./digital-intermediate",
        description: "Description for digital intermediate"
    },
    {
        title: "IMMERSIVE CONTENTS",
        image: "./uploads/image1.jpg",
        link: "./immersive-contents",
        description: "Description for immersive contents"
    },
    {
        title: "SOUND DESIGNING",
        image: "./uploads/image1.jpg",
        link: "./sound-designing-mixing",
        description: "Description for sound designing"
    }
];

// PortfolioPage 컴포넌트를 정의
const PortfolioPage = () => {
    return (
        // 페이지 전체를 감싸는 div 요소에 portfolio-page 클래스를 적용
        <div className="portfolio-page">
            {/* 포트폴리오 헤더를 포함하는 div 요소에 portfolio-header 클래스를 적용 */}
            <div className="portfolio-header">
                <h1>Our Portfolio</h1> {/* 페이지 제목 */}
                <p>Check out our projects.</p> {/* 페이지 부제목 */}
            </div>
            {/* 포트폴리오 그리드를 포함하는 div 요소에 portfolio-grid 클래스를 적용 */}
            <div className="portfolio-grid">
                {/* 포트폴리오 항목들을 맵핑하여 렌더링 */}
                {portfolioItems.map((item, index) => (
                    // 각 항목을 a 요소로 렌더링, key는 index를 사용
                    <a key={index} href={item.link} className="portfolio-item">
                        {/* 배경 이미지를 설정한 div 요소에 portfolio-image 클래스를 적용 */}
                        <div className="portfolio-image" style={{ backgroundImage: `url(${item.image})` }}>
                            {/* 포트폴리오 텍스트를 포함하는 div 요소에 portfolio-text 클래스를 적용 */}
                            <div className="portfolio-text">
                                <h2>{item.title}</h2> {/* 항목 제목 */}
                                <p>{item.description}</p> {/* 항목 설명 */}
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

// PortfolioPage 컴포넌트를 기본 내보내기
export default PortfolioPage;
