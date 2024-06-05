// React 라이브러리와 훅을 불러옴
import React, { useState, useEffect } from 'react';
// axios 라이브러리를 불러옴
import axios from 'axios';
// useNavigate 훅을 불러옴
import { useNavigate } from 'react-router-dom';
// CategoryListPage 컴포넌트의 스타일 시트를 불러옴
import './CategoryListPage.css';

// CategoryListPage 컴포넌트를 정의
const CategoryListPage = () => {
    // 요청 데이터와 카테고리 상태를 정의
    const [requests, setRequests] = useState([]);
    const [category, setCategory] = useState('Animation');
    // 페이지 이동을 위한 navigate 훅을 사용
    const navigate = useNavigate();

    // 컴포넌트가 마운트될 때와 카테고리가 변경될 때 요청 데이터를 가져옴
    useEffect(() => {
        fetchRequests();
    }, [category]);

    // 요청 데이터를 가져오는 함수
    const fetchRequests = async () => {
        try {
            // API로부터 요청 데이터를 가져옴
            const response = await axios.get('/api/requests');
            // 현재 선택된 카테고리에 해당하는 요청만 상태에 저장
            setRequests(response.data.filter(req => req.category === category));
        } catch (error) {
            // 오류 발생 시 콘솔에 출력
            console.error('Error fetching requests', error);
        }
    };

    // 카테고리 버튼 클릭 시 호출되는 함수
    const handleCategoryClick = (selectedCategory) => {
        // 선택된 카테고리로 상태를 업데이트
        setCategory(selectedCategory);
    };

    // 요청 항목 클릭 시 호출되는 함수
    const handleRequestClick = (category, requestId) => {
        // 해당 요청 상세 페이지로 이동
        navigate(`/request/${requestId}?category=${category}`);
    };

    // 새 요청 버튼 클릭 시 호출되는 함수
    const handleNewRequestClick = (category) => {
        // 새 요청 작성 페이지로 이동
        navigate(`/request/new?category=${category}`);
    };

    return (
        // 페이지 전체를 감싸는 div 요소에 category-list-page 클래스를 적용
        <div className="category-list-page">
            {/* 페이지 제목을 나타내는 h1 요소 */}
            <h1>Request</h1>
            {/* 페이지 부제목을 나타내는 h2 요소 */}
            <h2>Asset & LookDev</h2>
            {/* 카테고리 버튼들을 포함하는 div 요소에 categories 클래스를 적용 */}
            <div className="categories">
                {/* Animation 카테고리 버튼을 정의 */}
                <div className="category-button" onClick={() => handleCategoryClick('Animation')}>
                    Animation
                    {/* 새 요청 버튼을 정의 */}
                    <button className="request-button" onClick={(e) => {
                        // 부모 요소의 클릭 이벤트 전파를 중단
                        e.stopPropagation();
                        // 새 요청 작성 페이지로 이동
                        handleNewRequestClick('Animation');
                    }}>제작의뢰</button>
                </div>
                {/* Movie 카테고리 버튼을 정의 */}
                <div className="category-button" onClick={() => handleCategoryClick('Movie')}>
                    Movie
                    {/* 새 요청 버튼을 정의 */}
                    <button className="request-button" onClick={(e) => {
                        // 부모 요소의 클릭 이벤트 전파를 중단
                        e.stopPropagation();
                        // 새 요청 작성 페이지로 이동
                        handleNewRequestClick('Movie');
                    }}>제작의뢰</button>
                </div>
                {/* Game 카테고리 버튼을 정의 */}
                <div className="category-button" onClick={() => handleCategoryClick('Game')}>
                    Game
                    {/* 새 요청 버튼을 정의 */}
                    <button className="request-button" onClick={(e) => {
                        // 부모 요소의 클릭 이벤트 전파를 중단
                        e.stopPropagation();
                        // 새 요청 작성 페이지로 이동
                        handleNewRequestClick('Game');
                    }}>제작의뢰</button>
                </div>
            </div>
            {/* 요청 목록을 포함하는 div 요소에 request-list 클래스를 적용 */}
            <div className="request-list">
                {/* 요청 목록을 렌더링 */}
                {requests.map((request) => (
                    // 각 요청 항목을 렌더링하는 div 요소에 request-item 클래스를 적용
                    <div key={request._id} className="request-item" onClick={() => handleRequestClick(request.category, request._id)}>
                        {/* 요청 카테고리를 나타내는 span 요소 */}
                        <span className="category-icon">{request.category}</span>
                        {/* 요청 제목을 나타내는 span 요소 */}
                        <span className="request-title">{request.title}</span>
                        {/* 요청 작성자를 나타내는 span 요소 */}
                        <span className="request-author">{request.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

// CategoryListPage 컴포넌트를 기본 내보내기
export default CategoryListPage;
