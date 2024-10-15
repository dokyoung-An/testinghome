import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// 이미지 데이터
const images = [
  {
    url: '/assets/diprima-1.jpg',
    title1: '롯데몰 웨스트레이크 하노이',
    title2: '제28회 대한민국 녹색건축대상 수상',
    subtitle: 'LotteMall Westlake Hanoi - Winner of the 28th Korea Green Building Award',
    link: '자세히보기',
  },
  {
    url: '/assets/diprima-2.jpg',
    title1: '네이버 데이터센터 각 세종',
    title2: '기술부문 대상',
    subtitle: 'Naver Data Center Gak Sejong - Technical Grand Prize Winner',
    link: '자세히보기',
  },
  {
    url: '/assets/diprima-3.jpg',
    title1: 'UNIST sdfsdf sdfs',
    title2: '울산광역시 건축상 수상',
    subtitle: 'UNIST - Ulsan Metropolitan City Architecture Award Winner',
    link: '자세히보기',
  },
  {
    url: '/assets/diprima-1.jpg',
    title1: '롯데몰 웨스트레이크 하노이',
    title2: '제28회 대한민국 녹색건축대상 수상',
    subtitle: 'LotteMall Westlake Hanoi - Winner of the 28th Korea Green Building Award',
    link: '자세히보기',
  },
  {
    url: '/assets/diprima-2.jpg',
    title1: '네이버 데이터센터 각 세종',
    title2: '기술부문 대상',
    subtitle: 'Naver Data Center Gak Sejong - Technical Grand Prize Winner',
    link: '자세히보기',
  },
  {
    url: '/assets/diprima-3.jpg',
    title1: 'UNIST sdfsdfsd sdfsdfs',
    title2: '울산광역시 건축상 수상',
    subtitle: 'UNIST - Ulsan Metropolitan City Architecture Award Winner',
    link: '자세히보기',
  },
];

// 슬라이더 컨테이너
const SliderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
`;

// 각 슬라이드 스타일
const Slide = styled.div<{ isActive: boolean; position: 'left' | 'center' | 'right'; backgroundUrl: string }>`
  flex: ${(props) => (props.isActive ? '8' : '1')};
  transition: transform 0.45s ease-in-out;
  height: 100vh;
  background-image: url(${(props) => props.backgroundUrl});
  background-size: cover;
  background-position: center;
  position: relative;
  filter: ${(props) => (props.isActive ? 'none' : 'brightness(0.5)')};

  &:hover {
    flex: 3.5;
  }

  ${(props) => props.position === 'left' && 'cursor: default;'}
  ${(props) => props.position === 'right' && 'cursor: default;'}
`;

// 슬라이드 정보 (번호와 제목) 스타일
const SlideInfo = styled.div`
  position: absolute;
  top: 50%;
  left: 0%;
  transform: translate(48%, -50%);
  text-align: center;
  color: white;
  z-index: 999;

  .slide-number {
    font-size: 1.2rem;
    font-weight: bold;
  }

  .line {
    width: 30px;
    height: 2px;
    background-color: white;
    margin: 10px auto;
    transition: width 0.5s ease;
  }

  .title {
    font-size: 1rem;
  }

  &:hover .line {
    width: 100px;
  }
`;
const SlideInfo2 = styled.div`
  position: absolute;
  top: 50%;
  right: 0%;
  transform: translate(-50%, -50%); // x축은 -50%로 설정하여 정확한 배치
  text-align: center;
  color: white;
  z-index: 999;

  .slide-number {
    font-size: 1.2rem;
    font-weight: bold;
  }

  .line {
    width: 30px;
    height: 2px;
    background-color: white;
    margin: 10px auto;
    transition: width 0.5s ease;
  }

  .title {
    font-size: 1rem;
  }

  &:hover .line {
    width: 100px;
  }
`;

// 네비게이션 바 스타일
const NavigationBar = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
`;
// 네비게이션 바의 네모 블럭 스타일
const NavDot = styled.div<{ isActive: boolean }>`
  width: 20px;
  height: 3px;
  background-color: ${(props) => (props.isActive ? '#fff' : '#aaa')};
  cursor: pointer;
  transition: transform 0.3s ease;
  transform-origin: bottom; // 높이가 하단을 기준으로 변경되도록 설정

  ${(props) => props.isActive && 'transform: scaleY(1.2);'}
`;

// 슬라이드 텍스트 스타일
const Title = styled.div`
  position: absolute;
  bottom: 5%;
  left: 40px;
  color: white;
  font-size: 1.5rem;
  background: rgba(0, 0, 0, 0);
  padding: 20px;
  z-index: 2;

  .title1 {
    font-size: 1.8rem;
    font-weight: bold;
  }

  .title2 {
    font-size: 1.3rem;
    margin-top: 10px;
  }

  .subtitle {
    font-size: 1rem;
    margin-top: 10px;
  }

  .line {
    width: 50px;
    height: 2px;
    background-color: white;
    margin-top: 25px;
    transition: width 0.5s ease;
  }

  .link {
    font-size: 1rem;
    margin-top: 20px;
    color: white;
    text-decoration: none;
    cursor: pointer;
  }

  &:hover .line {
    width: 100px;
  }

  .link:hover {
    text-decoration: underline;
  }
`;

// 메인 슬라이더 컴포넌트
const MainSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000); // 5초마다 슬라이드 변경

    return () => clearInterval(interval);
  }, []);

  const handleNavClick = (index: number) => {
    setCurrentSlide(index);
  };

  const prevSlide = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
  const nextSlide = currentSlide === images.length - 1 ? 0 : currentSlide + 1;

  return (
    <SliderContainer>
        <SlideInfo>
          <div className="slide-number">{prevSlide+1}</div>
          <div className="line"></div>
          <div className="title">{images[prevSlide].title1}</div>
        </SlideInfo>
      <Slide isActive={false} position="left" backgroundUrl={images[prevSlide].url}>
      
      </Slide>

      <Slide isActive={true} position="center" backgroundUrl={images[currentSlide].url}>
        <Title>
          <div className="title1">{images[currentSlide].title1}</div>
          <div className="title2">{images[currentSlide].title2}</div>
          <div className="subtitle">{images[currentSlide].subtitle}</div>
          <div className="line"></div>
          <div className="link">{images[currentSlide].link}</div>
        </Title>
      </Slide>
      <SlideInfo2>
          <div className="slide-number">{nextSlide + 1}</div>
          <div className="line"></div>
          <div className="title">{images[nextSlide].title1}</div>
        </SlideInfo2>
      <Slide isActive={false} position="right" backgroundUrl={images[nextSlide].url}>
        
      </Slide>

      {/* 네비게이션 바 */}
      <NavigationBar>
        {images.map((_, index) => (
          <NavDot
            key={index}
            isActive={currentSlide === index}
            onClick={() => handleNavClick(index)}
          />
        ))}
      </NavigationBar>
    </SliderContainer>
  );
};

export default MainSlider;
