import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1400px;
  height: 85vh;
  margin: 0 auto;
  gap: 0px 20px; /* 상하 간격 85px, 좌우 간격 255px */
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 100px;
  width: 100%;
  padding: 0 40px;
`;

const IdentityText = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: black;
`;

const MoreContainer = styled.div`
  display: flex;
  align-items: center;

  &:hover .more-text {
    color: #00aaff;
  }

  &:hover .line {
    width: 72px; /* Hover 시 20% 증가 */
  }
`;

const MoreText = styled(Link)`
  font-size: 0.8rem;
  color: black;
  text-decoration: none;
  margin-right: 10px;
  transition: color 0.3s ease;
  &.more-text {
    color: black;
  }
`;

const Line = styled.div`
  margin-right: 10px;
  width: 50px;
  height: 2px;
  background-color: black;
  transition: all 0.3s ease;
  &.line {
    background-color: black;
  }
`;

const ImageWrapper = styled.div<{ isActive: boolean }>`
  position: relative;
  width: ${(props) => (props.isActive ? '690px' : '155px')}; /* 펼쳐진 이미지 가로 690px, 나머지 155px */
  height: 420px; /* 고정 높이 420px */
  transition: all 0.5s ease;
  cursor: ${(props) => (props.isActive ? 'default' : 'pointer')}; /* 펼쳐진 이미지 클릭 불가 */
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    filter: ${(props) => (!props.isActive ? 'brightness(1.1)' : 'none')};
  }

  ${(props) =>
    !props.isActive &&
    `
    &:hover {
      background-color: rgba(0, 0, 0, 0.7); /* 마우스 오버 시 어두운 필터 강화 */
    }
  `}
`;

const Cover = styled.div<{ isActive: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 펼쳐지기 전 필터 */
  transition: background-color 0.3s ease;
  z-index: 1;
  ${(props) => props.isActive && 'background-color: transparent;'} /* 펼쳐지면 필터 제거 */
`;

const Image = styled.div<{ imageUrl: string }>`
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease;
`;

const TextOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 1.5rem;
  text-align: center;
  z-index: 2;
`;

const AdditionalText = styled.div<{ isActive: boolean }>`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
  font-size: 1.2rem;
  opacity: ${(props) => (props.isActive ? 0.8 : 0)};
  transition: opacity 0.3s ease;
`;

const images = [
  {
    id: 1,
    imageUrl: '/assets/diprima-1.jpg',
    title: 'IDENTITY',
    additionalText: '우리는 건강한 공간환경을 믿습니다.',
  },
  {
    id: 2,
    imageUrl: '/assets/diprima-2.jpg',
    title: 'LIFE',
    additionalText: '현대적으로 해석된 통합의 부락',
  },
  {
    id: 3,
    imageUrl: '/assets/diprima-3.jpg',
    title: 'RELATION',
    additionalText: '우리와 공간의 관계',
  },
  {
    id: 4,
    imageUrl: '/assets/diprima-4.jpg',
    title: 'MOTIVE',
    additionalText: '공간의 목적과 동기',
  },
  {
    id: 5,
    imageUrl: '/assets/diprima-5.jpg',
    title: 'INTEGRATION',
    additionalText: '우리의 통합된 공간경험',
  },
];

const Identity: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0); // 처음에 첫 번째 이미지가 펼쳐짐

  const handleClick = (index: number) => {
    if (activeIndex !== index) {
      setActiveIndex(index); // 한 번 클릭된 사진이 펼쳐진 상태 유지
    }
  };

  return (
    <Container>
      <Header>
        <IdentityText>IDENTITY</IdentityText>
        <MoreContainer>
          <Line className="line" />
          <MoreText to="/IdentityPage" className="more-text">더보기</MoreText>
        </MoreContainer>
      </Header>

      {images.map((img, index) => (
        <ImageWrapper
          key={img.id}
          isActive={activeIndex === index}
          onClick={() => handleClick(index)}
        >
          <Cover isActive={activeIndex === index} />
          <Image imageUrl={img.imageUrl} />
          <TextOverlay>{img.title}</TextOverlay> {/* 타이틀은 항상 보임 */}
          <AdditionalText isActive={activeIndex === index}>
            {img.additionalText}
          </AdditionalText>
        </ImageWrapper>
      ))}
    </Container>
  );
};

export default Identity;
