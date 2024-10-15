import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
`;

const MoreContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;

  &:hover .more-text {
    color: #00aaff;
  }

  &:hover .line {
    width: 72px; /* Hover 시 20% 증가 */
  }
`;

const MoreText = styled.div`
  font-size: 0.8rem;
  color: black;
  text-decoration: none;
  margin-top: 8px;
  transition: color 0.3s ease;
`;

const Line = styled.div`
  width: 80px;
  height: 5px;
  background-color: black;
  margin: 10px auto; /* 숫자와 선의 간격 조절 */
  transition: all 0.3s ease;
`;

const ImageGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px; /* 세로 간격 */
  margin-bottom: 2rem;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start; 
  gap: 20px; /* 좌우 간격 */
`;

const MoreButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  text-align: center;
  margin-bottom: 5rem;
`;

const PageIndicator = styled.p`
  font-size: 0.9rem;
  margin: 0; /* 숫자가 선과 더보기 텍스트 사이에 위치 */
`;

const ImageWrapper = styled.div<{ isWide: boolean }>`
  position: relative;
  width: 100%; 
  max-width: 330px;
  height: ${(props) => (props.isWide ? '250px' : '420px')}; 
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    filter: brightness(1.1);
  }
`;

const Image = styled.div<{ imageUrl: string }>`
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease;
  
`;

const Text = styled.div`
  text-align: center;
  font-size: 1rem;
  color: #333;
  margin-top: 10px;
  
`;

const images = [
  { id: 1, imageUrl: '/assets/diprima-1.jpg', title: '국립 어린이 박물관', isWide: false },
  { id: 2, imageUrl: '/assets/diprima-2.jpg', title: '청라 가림스위트', isWide: true },
  { id: 3, imageUrl: '/assets/diprima-3.jpg', title: '영종하늘도시 광영스너그', isWide: false },
  { id: 4, imageUrl: '/assets/diprima-4.jpg', title: '신목동역 LT 삼보 센터', isWide: true },
  { id: 5, imageUrl: '/assets/diprima-5.jpg', title: '부산항 북항 마리나', isWide: true },
  { id: 6, imageUrl: '/assets/diprima-5.jpg', title: '의정부 을지대학 병원', isWide: false },
  { id: 7, imageUrl: '/assets/diprima-5.jpg', title: '건축 작품 7', isWide: true },
  { id: 8, imageUrl: '/assets/diprima-5.jpg', title: '건축 작품 8', isWide: false },
  { id: 9, imageUrl: '/assets/diprima-1.jpg', title: '국립 어린이 박물관', isWide: false },
  { id: 10, imageUrl: '/assets/diprima-2.jpg', title: '청라 가림스위트', isWide: true },
  { id: 11, imageUrl: '/assets/diprima-3.jpg', title: '영종하늘도시 광영스너그', isWide: false },
  { id: 12, imageUrl: '/assets/diprima-4.jpg', title: '신목동역 LT 삼보 센터', isWide: true },
  { id: 13, imageUrl: '/assets/diprima-5.jpg', title: '부산항 북항 마리나', isWide: true },
  { id: 14, imageUrl: '/assets/diprima-5.jpg', title: '의정부 을지대학 병원', isWide: false },
  { id: 15, imageUrl: '/assets/diprima-5.jpg', title: '건축 작품 7', isWide: true },
  { id: 16, imageUrl: '/assets/diprima-5.jpg', title: '건축 작품 8', isWide: false },
];

const Work: React.FC = () => {
  const [visibleRows, setVisibleRows] = useState(2); // 처음에는 두 줄만 보임
  const totalRows = Math.ceil(images.length / 4); // 총 줄 수 계산
  const pagesLeft = totalRows - visibleRows; // 남은 페이지 수 계산

  const showMoreRows = () => {
    if (visibleRows < totalRows) {
      setVisibleRows(visibleRows + 2); // 2줄씩 더 보여줌
    }
  };

  return (
    <Container>
      <Header>
        <Title>WORKS</Title>
      </Header>

      <ImageGrid>
        {/* 첫 번째 줄부터 visibleRows에 따라 표시 */}
        {Array.from({ length: visibleRows }).map((_, rowIndex) => (
          <Row key={rowIndex}>
            {images.slice(rowIndex * 4, (rowIndex + 1) * 4).map((img) => (
              <ImageWrapper key={img.id} isWide={img.isWide}>
                <Image imageUrl={img.imageUrl} />
                <Text>{img.title}</Text>
              </ImageWrapper>
            ))}
          </Row>
        ))}
      </ImageGrid>

      {visibleRows < totalRows && (
        <MoreButtonContainer>
          <PageIndicator>{visibleRows * 4} / {images.length}</PageIndicator>
          <Line />
          <MoreContainer onClick={showMoreRows}>
            <MoreText>더보기</MoreText>
          </MoreContainer>
        </MoreButtonContainer>
      )}
    </Container>
  );
};

export default Work;
