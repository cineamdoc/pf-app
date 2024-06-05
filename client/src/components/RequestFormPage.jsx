// React 라이브러리와 훅을 불러옴
import React, { useState, useEffect } from 'react';
// react-router-dom에서 필요한 훅을 불러옴
import { useLocation, useParams, useNavigate } from 'react-router-dom';
// axios 라이브러리를 불러옴
import axios from 'axios';
// RequestFormPage 컴포넌트의 스타일 시트를 불러옴
import './RequestFormPage.css';

// RequestFormPage 컴포넌트를 정의
const RequestFormPage = () => {
    // 폼 상태를 관리하기 위한 상태 변수와 상태 업데이트 함수를 정의
    const [form, setForm] = useState({
        category: 'Animation', // 기본 카테고리를 'Animation'으로 설정
        name: '', // 이름 필드 초기화
        password: '', // 비밀번호 필드 초기화
        phone: '', // 전화번호 필드 초기화
        email: '', // 이메일 필드 초기화
        title: '', // 제목 필드 초기화
        content: '', // 내용 필드 초기화
    });

    // URL 파라미터에서 id를 추출
    const { id } = useParams();
    // 현재 위치 정보를 얻기 위해 useLocation 훅을 사용
    const location = useLocation();
    // 페이지 이동을 위한 useNavigate 훅을 사용
    const navigate = useNavigate();

    // 컴포넌트가 마운트될 때와 id 또는 location.search가 변경될 때마다 실행되는 효과를 설정
    useEffect(() => {
        if (id) {
            fetchRequest(id); // id가 있을 경우 요청 데이터를 가져옴
        } else {
            // URL 쿼리 파라미터에서 카테고리를 추출하고 폼 상태를 업데이트
            const query = new URLSearchParams(location.search);
            const category = query.get('category') || 'Animation';
            setForm((prevForm) => ({ ...prevForm, category }));
        }
    }, [id, location.search]);

    // 특정 id의 요청 데이터를 가져오는 함수
    const fetchRequest = async (id) => {
        try {
            const response = await axios.get(`/api/requests/${id}`); // API로부터 요청 데이터를 가져옴
            setForm(response.data); // 가져온 데이터를 폼 상태에 저장
        } catch (error) {
            console.error('Error fetching request', error); // 오류 발생 시 콘솔에 출력
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
            if (id) {
                await axios.put(`/api/requests/${id}`, form); // 요청 데이터를 업데이트
                navigate(`/request/${id}`); // 상세 페이지로 이동
            } else {
                const response = await axios.post('/api/requests', form); // 새로운 요청 데이터를 생성
                navigate(`/request/${response.data._id}`); // 새로 생성된 요청의 상세 페이지로 이동
            }
            // 폼 상태를 초기화
            setForm({
                category: 'Animation',
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
        // 페이지 전체를 감싸는 div 요소에 request-form-page-wrapper 클래스를 적용
        <div className="request-form-page-wrapper">
            {/* 요청 폼 페이지를 감싸는 div 요소에 request-form-page 클래스를 적용 */}
            <div className="request-form-page">
                {/* 페이지 제목을 표시, id가 있으면 'Edit Request', 없으면 'Submit a [category] Request' */}
                <h1>{id ? 'Edit Request' : `Submit a ${form.category} Request`}</h1>
                {/* 폼 요소에 onSubmit 이벤트 핸들러를 설정 */}
                <form onSubmit={handleSubmit} className="request-form">
                    {/* 카테고리 선택 드롭다운 */}
                    <select name="category" value={form.category} onChange={handleChange} required>
                        <option value="Animation">Animation</option>
                        <option value="Movie">Movie</option>
                        <option value="Game">Game</option>
                    </select>
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
                    {/* 폼 제출 버튼을 포함하는 div 요소에 request-form-buttons 클래스를 적용 */}
                    <div className="request-form-buttons">
                        {/* 폼 제출 버튼 */}
                        <button type="submit">{id ? 'Update Request' : `Submit ${form.category} Request`}</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

// RequestFormPage 컴포넌트를 기본 내보내기
export default RequestFormPage;
