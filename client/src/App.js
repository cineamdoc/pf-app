// React 라이브러리를 불러옴
import React from 'react';
// React Router DOM을 불러와서 라우팅 기능을 사용
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// 네비게이션 바 컴포넌트를 불러옴
import Navbar from './components/Navbar';
// 푸터 컴포넌트를 불러옴
import Footer from './components/Footer';
// 메인 페이지 컴포넌트를 불러옴
import MainPage from './components/MainPage';
// 소개 페이지 컴포넌트를 불러옴
import AboutPage from './components/AboutPage';
// 포트폴리오 페이지 컴포넌트를 불러옴
import PortfolioPage from './components/PortfolioPage';
// 카테고리 목록 페이지 컴포넌트를 불러옴
import CategoryListPage from './components/CategoryListPage';
// 요청 폼 페이지 컴포넌트를 불러옴
import RequestFormPage from './components/RequestFormPage';
// 요청 상세 페이지 컴포넌트를 불러옴
import RequestDetailPage from './components/RequestDetailPage';
// 연락처 페이지 컴포넌트를 불러옴
import ContactPage from './components/ContactPage';
// 앱의 스타일 시트를 불러옴
import './App.css';

// App 컴포넌트를 정의
const App = () => {
    return (
        // Router 컴포넌트로 앱을 감쌈
        <Router>
            <div className="app">
                {/* Navbar 컴포넌트를 렌더링 */}
                <Navbar />
                <div className="content">
                    {/* Routes 컴포넌트로 여러 Route를 정의 */}
                    <Routes>
                        {/* "/" 경로에 MainPage 컴포넌트를 매핑 */}
                        <Route path="/" element={<MainPage />} />
                        {/* "/about" 경로에 AboutPage 컴포넌트를 매핑 */}
                        <Route path="/about" element={<AboutPage />} />
                        {/* "/portfolio" 경로에 PortfolioPage 컴포넌트를 매핑 */}
                        <Route path="/portfolio" element={<PortfolioPage />} />
                        {/* "/request" 경로에 CategoryListPage 컴포넌트를 매핑 */}
                        <Route path="/request" element={<CategoryListPage />} />
                        {/* "/request/new" 경로에 RequestFormPage 컴포넌트를 매핑 */}
                        <Route path="/request/new" element={<RequestFormPage />} />
                        {/* "/request/edit/:id" 경로에 RequestFormPage 컴포넌트를 매핑 (편집용) */}
                        <Route path="/request/edit/:id" element={<RequestFormPage />} /> {/* 추가된 경로 */}
                        {/* "/request/:id" 경로에 RequestDetailPage 컴포넌트를 매핑 */}
                        <Route path="/request/:id" element={<RequestDetailPage />} />
                        {/* "/contact" 경로에 ContactPage 컴포넌트를 매핑 */}
                        <Route path="/contact" element={<ContactPage />} />
                    </Routes>
                </div>
                {/* Footer 컴포넌트를 렌더링 */}
                <Footer />
            </div>
        </Router>
    );
};

// App 컴포넌트를 기본 내보내기
export default App;
