// React 라이브러리와 훅을 불러옴
import React, { useState, useEffect } from 'react';
// axios 라이브러리를 불러옴
import axios from 'axios';
// useNavigate와 useParams 훅을 불러옴
import { useNavigate, useParams } from 'react-router-dom';
// RequestDetailPage 컴포넌트의 스타일 시트를 불러옴
import './RequestDetailPage.css';

// RequestDetailPage 컴포넌트를 정의
const RequestDetailPage = () => {
    // 요청 데이터를 저장할 상태 변수와 상태 업데이트 함수를 정의
    const [request, setRequest] = useState(null);
    // URL 파라미터에서 id를 추출
    const { id } = useParams();
    // 페이지 이동을 위한 navigate 훅을 사용
    const navigate = useNavigate();

    // 컴포넌트가 마운트될 때 요청 데이터를 가져오는 효과를 설정
    useEffect(() => {
        // 비동기 함수로 요청 데이터를 가져옴
        const fetchRequest = async () => {
            try {
                // API로부터 특정 id의 요청 데이터를 가져옴
                const response = await axios.get(`/api/requests/${id}`);
                // 가져온 데이터를 상태에 저장
                setRequest(response.data);
            } catch (error) {
                // 오류 발생 시 콘솔에 출력
                console.error('Error fetching request', error);
            }
        };

        // 요청 데이터를 가져오는 함수 호출
        fetchRequest();
    }, [id]); // id가 변경될 때마다 다시 호출

    // 목록 페이지로 돌아가는 함수
    const handleBackToList = () => {
        navigate('/request'); // 요청 목록 페이지로 이동
    };

    // 편집 페이지로 이동하는 함수
    const handleEdit = () => {
        navigate(`/request/edit/${id}`); // 요청 편집 페이지로 이동
    };

    // 요청 데이터를 아직 가져오지 못했을 경우 로딩 메시지를 표시
    if (!request) {
        return <div>Loading...</div>;
    }

    // 요청 데이터를 화면에 렌더링
    return (
        <div className="request-detail-page-wrapper">
            {/* 요청 상세 페이지를 감싸는 div 요소에 request-detail-page 클래스를 적용 */}
            <div className="request-detail-page">
                <h1>{request.title}</h1> {/* 요청 제목을 표시 */}
                <div className="detail-item">
                    <strong>Category:</strong> <span>{request.category}</span> {/* 요청 카테고리를 표시 */}
                </div>
                <div className="detail-item">
                    <strong>Name:</strong> <span>{request.name}</span> {/* 요청 작성자 이름을 표시 */}
                </div>
                <div className="detail-item">
                    <strong>Email:</strong> <span>{request.email}</span> {/* 요청 작성자 이메일을 표시 */}
                </div>
                <div className="detail-item">
                    <strong>Phone:</strong> <span>{request.phone}</span> {/* 요청 작성자 전화번호를 표시 */}
                </div>
                <div className="detail-item">
                    <strong>Content:</strong> <span>{request.content}</span> {/* 요청 내용을 표시 */}
                </div>
                <div className="buttons">
                    {/* 목록 페이지로 돌아가는 버튼 */}
                    <button className="back-button" onClick={handleBackToList}>Back to List</button>
                    {/* 편집 페이지로 이동하는 버튼 */}
                    <button className="edit-button" onClick={handleEdit}>Edit</button>
                </div>
            </div>
        </div>
    );
};

// RequestDetailPage 컴포넌트를 기본 내보내기
export default RequestDetailPage;
