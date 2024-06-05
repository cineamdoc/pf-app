import React from 'react';
// Swiper와 SwiperSlide 컴포넌트를 Swiper 라이브러리에서 불러옴
import { Swiper, SwiperSlide } from 'swiper/react';
// Swiper의 추가 모듈(Pagination, Autoplay, Navigation)을 불러옴
import { Pagination, Autoplay, Navigation } from 'swiper';
// Swiper와 관련된 CSS 파일들을 불러옴
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
// SwiperPage 컴포넌트의 스타일 시트를 불러옴
import './SwiperPage.css';

// 슬라이드에 사용할 이미지와 설명을 배열로 정의
const images = [
    { src: '/uploads/image1.jpg', description: 'Description for image 1' },
    { src: '/uploads/image2.jpg', description: 'Description for image 2' },
    { src: '/uploads/image3.jpg', description: 'Description for image 3' },
    { src: '/uploads/image4.jpg', description: 'Description for image 4' },
    { src: '/uploads/image5.jpg', description: 'Description for image 5' },
    { src: '/uploads/image6.jpg', description: 'Description for image 6' },
    { src: '/uploads/image7.jpg', description: 'Description for image 7' },
    { src: '/uploads/image8.jpg', description: 'Description for image 8' },
    { src: '/uploads/image9.jpg', description: 'Description for image 9' }
];

// SwiperPage 컴포넌트를 정의
const SwiperPage = () => {
    return (
        <div className="slideshow-container">
            <div className="slideshow-description">
                <h2>About the Project</h2>
                <p>Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all.</p>
                <a href="#">View more</a>
            </div>
            <Swiper
                spaceBetween={30} // 슬라이드 간의 간격을 30px로 설정
                slidesPerView={2.5} // 한 번에 보여줄 슬라이드 개수를 2.5로 설정
                loop={true} // 슬라이드 반복을 활성화
                pagination={{ clickable: true, el: '.custom-pagination' }} // 사용자 정의 페이지네이션 설정
                autoplay={{ delay: 5000 }} // 자동 슬라이드 전환 시간 설정
                grabCursor={true} // 마우스 커서를 손 모양으로 변경
                navigation={{
                    nextEl: '.custom-next', // 사용자 정의 다음 버튼 설정
                    prevEl: '.custom-prev' // 사용자 정의 이전 버튼 설정
                }}
                modules={[Pagination, Autoplay, Navigation]} // 필요한 모듈 설정
                className="swiper-container" // Swiper 컨테이너에 클래스 적용
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index} className="swiper-slide">
                        <div className="slide-content">
                            <img src={image.src} alt={`slide-${index}`} className="slide-image" />
                            <div className="slide-description">{image.description}</div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="custom-pagination"></div>
        </div>
    );
};

// SwiperPage 컴포넌트를 기본 내보내기
export default SwiperPage;
