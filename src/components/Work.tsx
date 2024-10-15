import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
  height: 100vh;

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
const ImageGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px; /* 세로 간격 */
  
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start; /* 세로 정렬을 위해 flex-end 사용 */
  gap: 20px; /* 좌우 간격 */
  
`;
const Row2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end; /* 세로 정렬을 위해 flex-end 사용 */
  gap: 20px; /* 좌우 간격 */
  margin-top: -100px;
`;

const ImageWrapper = styled.div<{ isWide: boolean }>`
  position: relative;
  width: 100%; 
  max-width: ${(props) => (props.isWide ? '330px' : '330px')}; /* 가로 폭은 동일 */
  height: ${(props) => (props.isWide ? '250px' : '420px')}; /* 가로로 긴 사진은 250px, 세로로 긴 사진은 420px */
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    filter: brightness(1.1);
    background-color: rgba(26, 109, 255, 0.3); /* hover 시 텍스트 배경색 변경 */
    
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

const TextWrapper = styled.div`
  position: absolute;
  bottom: -30px;
  width: 100%;
  height: 60%;
  background-color: transparent;
  transition: background-color 0.3s ease;
  padding: 10px;
  display: flex;
  justify-content: center;
  z-index: -1;
  border-bottom-right-radius: 20px;
  

  &:hover {
    
    background-color: rgba(26, 109, 255, 0.3); /* hover 시 텍스트 배경색 변경 */
  }
`;

const Text = styled.div`
  text-align: center;
  font-size: 1rem;
  color: #333;
  margin-top: 10px;
  text-align: left;
  padding: 8px;

  
 
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
];

const Work: React.FC = () => {
  return (
    <Container>
      {/* 헤더 */}
      <Header>
        <Title>WORKS</Title>
        <MoreContainer>
          <Line className="line" />
          <MoreText to="/Works" className="more-text">더보기</MoreText>
        </MoreContainer>
      </Header>

      {/* 이미지 그리드 */}
      <ImageGrid>
        {/* 첫 번째 줄 - 가로, 세로 섞어서 배치 */}
        <Row>
          {images.slice(0, 4).map((img) => (
            <ImageWrapper key={img.id} isWide={img.isWide}>
              <Image imageUrl={img.imageUrl} />
              <TextWrapper/>
              <Text>{img.title}</Text>
            
            </ImageWrapper>
          ))}
        </Row>

        {/* 두 번째 줄 - 바닥을 맞춤 */}
        <Row2>
          {images.slice(4).map((img) => (
            <ImageWrapper key={img.id} isWide={img.isWide}>
              <Image imageUrl={img.imageUrl} />
              <Text>{img.title}</Text>
              <TextWrapper/>  
            </ImageWrapper>
          ))}
        </Row2>
      </ImageGrid>
    </Container>
  );
};

export default Work;
