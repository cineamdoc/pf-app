// React 라이브러리를 불러옴
import React from 'react';
// AboutPage 컴포넌트의 스타일 시트를 불러옴
import './AboutPage.css';

// AboutPage 컴포넌트를 정의
const AboutPage = () => {
    return (
        // 페이지 전체를 감싸는 div 요소에 about-page 클래스를 적용
        <div className="about-page">
            {/* 좌측 컬럼을 정의하는 div 요소에 left-column 클래스를 적용 */}
            <div className="left-column">
                {/* 회사 이미지 요소를 정의하고 company-image 클래스를 적용 */}
                <img src='./uploads/image1.jpg' alt="Company" className="company-image" />
            </div>
            {/* 우측 컬럼을 정의하는 div 요소에 right-column 클래스를 적용 */}
            <div className="right-column">
                {/* about-content 클래스를 적용하여 콘텐츠를 포함하는 div 요소 */}
                <div className="about-content">
                    {/* 메인 제목을 나타내는 h1 요소 */}
                    <h1>About Me</h1>
                    {/* 이름을 굵게 표시하는 p 요소 */}
                    <p><strong>김 현섭</strong></p>
                    {/* 이메일 주소를 표시하는 p 요소 */}
                    <p>cineamdoc@naver.com</p>
                    {/* 위치를 표시하는 p 요소 */}
                    <p>아산, 대한민국</p>

                    {/* 소개 섹션을 정의하는 div 요소에 section 및 about-section 클래스를 적용 */}
                    <div id="about" className="section about-section">
                        {/* 섹션 제목을 나타내는 h2 요소 */}
                        <h2>소개</h2>
                        {/* 소개 내용을 포함하는 p 요소, 블로그 링크 포함 */}
                        <p>저는 꿈을 코딩으로 실현하고자 하는 소프트웨어 개발자입니다. <a href="your-blog-url">블로그</a></p>
                        {/* 백엔드 개발에 대한 관심을 나타내는 p 요소, 깃허브 링크 포함 */}
                        <p>현재는 인프라를 설계하고 API를 만드는 백엔드 개발에 관심이 있습니다. <a href="your-github-url">깃허브</a></p>
                    </div>

                    {/* 학력 섹션을 정의하는 div 요소에 section 및 about-section 클래스를 적용 */}
                    <div id="education" className="section about-section">
                        {/* 섹션 제목을 나타내는 h2 요소 */}
                        <h2>학력</h2>
                        {/* 학력 내용을 포함하는 p 요소 */}
                        <p>서강대학교에서 컴퓨터 공학 학사 과정을 밟고 있으며, 2021년에 공학부 학생회장을 역임했습니다.</p>
                    </div>

                    {/* 경력 섹션을 정의하는 div 요소에 section 및 about-section 클래스를 적용 */}
                    <div id="experience" className="section about-section">
                        {/* 섹션 제목을 나타내는 h2 요소 */}
                        <h2>경력</h2>
                        {/* 경력 내용을 포함하는 여러 p 요소 */}
                        <p>소프트웨어 마에스트로 13기에 참여하여 최우수 선정(상위 8%)을 받았습니다. 이 과정에서 앱 서비스 백엔드 개발과 비즈니스 기획을 담당했습니다. 'DDAKZIP' 프로젝트에서 백엔드 개발, AWS 인프라 설정 및 API 개발(Typescript+GraphQL)을 수행하였으며, 프론트엔드 개발자가 쉽게 사용할 수 있도록 깨끗한 API 작성에 집중했습니다. 프로젝트 기획, 디자인, 마케팅 등 다양한 파트에서 경험을 쌓았고, 리팩토링을 통해 성능 향상 및 프로젝트 종료 시 클라우드 배포 자동화를(Terraform 사용) 실현했습니다.</p>

                        <p>서강대학교 ICPC 팀의 알고리즘 스터디 클럽에서 알고리즘 스터디 튜터로 활동하며 2021년과 2022년 봄 학기에 기초 알고리즘 CPP 강의(1, 3, 5, 7 강의)를 진행했습니다.</p>

                        <p>서강대학교 SWIC - 소프트웨어 투자 클럽의 팀 리더로서 2021년 1학기와 2학기에 Python을 사용한 회사 분석과 효율적인 포트폴리오 최적화 연구를 진행했습니다. 클럽 내 초보자들을 위한 Python 스터디를 진행하고 주식 백테스팅 및 시각화 프로그램을 생성했습니다.</p>

                        <p>서강대학교 파이썬 강의 멘토로서 2021년에 신입생을 대상으로 파이썬 강의를 진행했습니다.</p>
                    </div>

                    {/* 수상 및 인증 섹션을 정의하는 div 요소에 section 및 about-section 클래스를 적용 */}
                    <div id="awards" className="section about-section">
                        {/* 섹션 제목을 나타내는 h2 요소 */}
                        <h2>수상 및 인증</h2>
                        {/* 수상 및 인증 내용을 포함하는 p 요소 */}
                        <p>2020 서강대학교 프로그래밍 대회에서 동상을 수상했습니다. 2022년 겨울 SUAPC(알고리즘 콘테스트)에서 9위를, 2021년 서강대학교 해커톤에서 1위를 차지했습니다. 2021년 여름 SUAPC(알고리즘 콘테스트)에서 19위를, 2021년 ICPC 아시아 서울 예선에서 86위를 기록했습니다. 2020년 제4회 정부 혁신 제안 해커톤에서 인기상을 받았으며, 2020년 IEEE Xtreme 14.0(알고리즘 콘테스트)에서 글로벌 396위를 기록했습니다.</p>
                    </div>

                    {/* 자격증 섹션을 정의하는 div 요소에 section 및 about-section 클래스를 적용 */}
                    <div id="certifications" className="section about-section">
                        {/* 섹션 제목을 나타내는 h2 요소 */}
                        <h2>자격증</h2>
                        {/* 자격증 내용을 포함하는 p 요소 */}
                        <p>인터넷 정보 검색사 2급 자격증과 산업기사 정보처리 자격증을 보유하고 있습니다. 또한 TOPCIT (Grade III, 535 points)를 취득했습니다.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// AboutPage 컴포넌트를 기본 내보내기
export default AboutPage;
