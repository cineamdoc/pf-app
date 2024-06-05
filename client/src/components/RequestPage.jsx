// React 라이브러리와 훅을 불러옴
import React, { useState, useEffect } from 'react';
// axios 라이브러리를 불러옴
import axios from 'axios';
// RequestPage 컴포넌트의 스타일 시트를 불러옴
import './RequestPage.css';

// RequestPage 컴포넌트를 정의
const RequestPage = () => {
    // 요청 데이터를 저장할 상태 변수와 상태 업데이트 함수를 정의
    const [requests, setRequests] = useState([]);
    // 폼 데이터를 저장할 상태 변수와 상태 업데이트 함수를 정의
    const [form, setForm] = useState({
        category: '', // 카테고리 초기화
        name: '', // 이름 필드 초기화
        password: '', // 비밀번호 필드 초기화
        phone: '', // 전화번호 필드 초기화
        email: '', // 이메일 필드 초기화
        title: '', // 제목 필드 초기화
        content: '', // 내용 필드 초기화
    });

    // 컴포넌트가 마운트될 때 요청 데이터를 가져오는 효과를 설정
    useEffect(() => {
        fetchRequests(); // 요청 데이터를 가져오는 함수 호출
    }, []);

    // 요청 데이터를 가져오는 비동기 함수
    const fetchRequests = async () => {
        try {
            const response = await axios.get('/api/requests'); // API로부터 요청 데이터를 가져옴
            setRequests(response.data); // 가져온 데이터를 상태에 저장
        } catch (error) {
            console.error('Error fetching requests', error); // 오류 발생 시 콘솔에 출력
        }
    };

    // 입력 필드의 값이 변경될 때 호출되는 함수
    const handleChange = (e) => {
        const { name, value } = e.target; // 입력 필드의 이름과 값을 추출
        setForm({ ...form, [name]: value }); // 해당 필드의 값을 업데이트
    };

    // 폼이 제출될 때 호출되는 함수
    const handleSubmit = async (e) => {
        e.preventDefault(); // 기본 폼 제출 동작을 막음
        try {
            await axios.post('/api/requests', form); // 새로운 요청 데이터를 생성
            fetchRequests(); // 요청 데이터를 다시 가져옴
            // 폼 상태를 초기화
            setForm({
                category: '',
                name: '',
                password: '',
                phone: '',
                email: '',
                title: '',
                content: '',
            });
        } catch (error) {
            console.error('Error submitting request', error); // 오류 발생 시 콘솔에 출력
        }
    };

    return (
        // 페이지 전체를 감싸는 div 요소에 request-page 클래스를 적용
        <div className="request-page">
            {/* 요청 콘텐츠를 감싸는 div 요소에 request-content 클래스를 적용 */}
            <div className="request-content">
                <h1>Asset & LookDev</h1> {/* 페이지 제목 */}
                {/* 카테고리 버튼을 포함하는 div 요소에 categories 클래스를 적용 */}
                <div className="categories">
                    <button onClick={() => setForm({ ...form, category: 'Animation' })}>Animation</button> {/* Animation 카테고리 버튼 */}
                    <button onClick={() => setForm({ ...form, category: 'Movie' })}>Movie</button> {/* Movie 카테고리 버튼 */}
                    <button onClick={() => setForm({ ...form, category: 'Game' })}>Game</button> {/* Game 카테고리 버튼 */}
                </div>
                {/* 요청 폼을 포함하는 div 요소에 request-form 클래스를 적용 */}
                <div className="request-form">
                    {/* 폼 요소에 onSubmit 이벤트 핸들러를 설정 */}
                    <form onSubmit={handleSubmit}>
                        {/* 이름 입력 필드 */}
                        <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
                        {/* 비밀번호 입력 필드 */}
                        <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Password" required />
                        {/* 전화번호 입력 필드 */}
                        <input type="text" name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" required />
                        {/* 이메일 입력 필드 */}
                        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
                        {/* 제목 입력 필드 */}
                        <input type="text" name="title" value={form.title} onChange={handleChange} placeholder="Title" required />
                        {/* 내용 입력 필드 */}
                        <textarea name="content" value={form.content} onChange={handleChange} placeholder="Content" required></textarea>
                        {/* 폼 제출 버튼 */}
                        <button type="submit">Submit</button>
                    </form>
                </div>
                {/* 요청 목록을 포함하는 div 요소에 request-list 클래스를 적용 */}
                <div className="request-list">
                    {/* 요청 목록을 렌더링 */}
                    {requests.map((request) => (
                        // 각 요청 항목을 렌더링하는 div 요소에 request-item 클래스를 적용
                        <div key={request._id} className="request-item">
                            {/* 카테고리 아이콘 */}
                            <span className="category-icon">{request.category}</span>
                            {/* 요청 제목 */}
                            <span className="request-title">{request.title}</span>
                            {/* 요청 작성자 이름 */}
                            <span className="request-author">{request.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// RequestPage 컴포넌트를 기본 내보내기
export default RequestPage;
