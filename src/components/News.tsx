import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// 전체 컨테이너
const NewsContainer = styled.div`
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
  height: 32vh;
`;

// 제목과 더보기 컨테이너
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

// 뉴스 그리드
const NewsGrid = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

// 뉴스 아이템 컨테이너
const NewsItem = styled.div`
  display: flex;
  width: 33%; // 전체 3개의 요소가 들어가도록 설정
  background-color: #f9f9f9;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

// 이미지
const NewsImage = styled.img`
  width: 150px; // 정사각형 이미지 설정
  height: 150px;
  object-fit: cover;
`;

// 뉴스 텍스트 정보
const NewsContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
`;

// 뉴스 타이틀
const NewsTitle = styled.h2`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 10px;
`;

// 뉴스 부제목
const NewsSubtitle = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

// 뉴스 날짜
const NewsDate = styled.p`
  font-size: 0.8rem;
  color: #999;
`;

// 데이터 예시
const newsData = [
  {
    id: 1,
    title: "[WIN A PRIZE] 2024 대한민국녹색건축대전 시상식 진행",
    subtitle: "2024 대한민국녹색건축대전 시상식 진행 '국립어린이박물관 및 통합운영본부'",
    date: "2024-09-09",
    imageUrl: "/assets/diprima-1.jpg"
  },
  {
    id: 2,
    title: "[WIN A PRIZE] 2024 울산광역시 건축상, 'The BRICK Wall' 대상",
    subtitle: "2024 울산광역시 건축상 'The BRICK Wall(G-House)'",
    date: "2024-09-04",
    imageUrl: "/assets/diprima-1.jpg"
  },
  {
    id: 3,
    title: "[J NEWS] 금강공업(주) 과천 신사옥 준공식 진행",
    subtitle: "금강공업(주) 과천 신사옥 준공식 진행 지난 8월 8일...",
    date: "2024-08-12",
    imageUrl: "/assets/diprima-1.jpg"
  }
];

// 메인 컴포넌트
const NewsSection: React.FC = () => {
  return (
    <NewsContainer>
      {/* 헤더 */}
      <Header>
        <Title>NEWS</Title>
        <MoreContainer>
          <Line className="line" />
          <MoreText to="/about" className="more-text">더보기</MoreText>
        </MoreContainer>
      </Header>

      {/* 뉴스 그리드 */}
      <NewsGrid>
        {newsData.map((news) => (
          <NewsItem key={news.id}>
            <NewsImage src={news.imageUrl} alt={news.title} />
            <NewsContent>
              <NewsTitle>{news.title}</NewsTitle>
              <NewsSubtitle>{news.subtitle}</NewsSubtitle>
              <NewsDate>{news.date}</NewsDate>
            </NewsContent>
          </NewsItem>
        ))}
      </NewsGrid>
    </NewsContainer>
  );
};

export default NewsSection;
