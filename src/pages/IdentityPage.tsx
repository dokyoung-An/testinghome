import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import WorksNavi from '../components/WorksNavi';

const IdentityContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

// 텍스트 애니메이션
const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const fadeOut = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0; }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 10vh;
  transform: translateY(-200px);
`;

const Text = styled.h1<{ fade: boolean }>`
  font-size: 2rem;
  animation: ${(props) => (props.fade ? fadeIn : fadeOut)} 2s ease-in-out;
  opacity: ${(props) => (props.fade ? 1 : 0)};
  transition: opacity 2s ease-in-out;
  color: #00aaff;
  margin-top: 50px;
`;

const Arrow = styled.div`
  cursor: pointer;
  font-size: 2rem;
  margin-top: 2rem;
`;

const IdentityMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
  position: relative;
  background-color: white;
`;

const IdentityTitle = styled.h1`
  font-size: 4rem;
  font-weight: 600;
  color: black;
  text-align: center;
`;

const ArrowDown = styled.div`
  margin-top: 20px;
  width: 30px;
  height: 30px;
  border-left: 2px solid grey;
  border-bottom: 2px solid grey;
  transform: rotate(-45deg);
  cursor: pointer;
`;

const SectionContainer = styled.div`
  height: 100vh;
  width: 100%;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
`;

const Section = styled.div<{ backgroundImage: string }>`
  height: 100vh;
  width: 100%;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  position: relative;
`;

// 세로선 스타일
const VerticalLine = styled.div`
  position: absolute;
  top: 0;
  left: 50.5%;
  transform: translateX(-50%);
  height: 50px;
  width: 1px;
  background-color: white;
`;

// 텍스트를 중앙에 배치하는 스타일
const TextWrapper = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  width: 35%;
`;

const SectionTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
`;

const SectionDescription = styled.p`
  font-size: 1rem;
  margin-top: 20px;
  line-height: 2rem;
`;

// 카테고리 컨테이너 스타일
const CategoryContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 55%;
  background-color: #f0f0f0;
  padding: 0px;
  position: relative;
  top: 0;
`;

// 카테고리 항목 스타일
const CategoryItem = styled.div`
  flex: 1;
  padding: 20px 0px;
  text-align: center;
  font-size: 1.2rem;
  cursor: pointer;
  background-color: #f2f2f2;
  border-right: 1px solid white;

  &:last-child {
    border-right: none;
  }

  &:hover {
    background-color: #e0e0e0;
  }

`;

const IdentityPage: React.FC = () => {
  const [showText, setShowText] = useState(false);
  const navigate = useNavigate();
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (index: number) => {
    if (sectionRefs.current[index]) {
      sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleArrowClick = () => {
    setShowText(true);
    setTimeout(() => {
      setShowText(false);
      setTimeout(() => {
        navigate('/portfolio');
      }, 2000);
    }, 3000);
  };

  return (
    <>
      <IdentityContainer>
        <WorksNavi />
        <IdentityMain>
          <IdentityTitle>IDENTITY</IdentityTitle>
          <ArrowDown onClick={handleArrowClick} />
        </IdentityMain>

        {showText && (
          <Container>
            <Text fade={showText}>
              우리는 '건강한 공간환경'이 세상을 변화시킬 수 있다고 믿습니다.
            </Text>
          </Container>
        )}

        <CategoryContainer>
          <CategoryItem onClick={() => scrollToSection(0)}>LIFE</CategoryItem>
          <CategoryItem onClick={() => scrollToSection(1)}>RELATION</CategoryItem>
          <CategoryItem onClick={() => scrollToSection(2)}>MOTIVE</CategoryItem>
          <CategoryItem onClick={() => scrollToSection(3)}>INTEGRATION</CategoryItem>
        </CategoryContainer>

        <SectionContainer>
          <Section
            ref={(el) => (sectionRefs.current[0] = el)}
            backgroundImage="/assets/diprima-1.jpg"
          >
            <VerticalLine /> {/* 세로선 추가 */}
            <TextWrapper>
              <SectionTitle>LIFE</SectionTitle>
              <SectionDescription>
                장소를 이용하는 사람의 요구와 삶의 경험을 기반으로 하는 건축을 추구합니다.
                우리는 인간의 삶과 행위에 대한 끝없는 탐구로 인간중심의 공간을 구현합니다.
              </SectionDescription>
            </TextWrapper>
          </Section>

          <Section
            ref={(el) => (sectionRefs.current[1] = el)}
            backgroundImage="/assets/diprima-2.jpg"
          >
            <VerticalLine />
            <TextWrapper>
              <SectionTitle>RELATION</SectionTitle>
              <SectionDescription>
                우리는 사람과 공간의 상호작용을 연구하며, 이를 통해 관계를 강화하는 디자인을 제공합니다.
              </SectionDescription>
            </TextWrapper>
          </Section>

          <Section
            ref={(el) => (sectionRefs.current[2] = el)}
            backgroundImage="/assets/diprima-3.jpg"
          >
            <VerticalLine />
            <TextWrapper>
              <SectionTitle>MOTIVE</SectionTitle>
              <SectionDescription>
                우리 건축의 동기는 사람들을 위한 더 나은 공간과 삶의 질을 높이는 데 중점을 둡니다.
              </SectionDescription>
            </TextWrapper>
          </Section>

          <Section
            ref={(el) => (sectionRefs.current[3] = el)}
            backgroundImage="/assets/diprima-4.jpg"
          >
            <VerticalLine />
            <TextWrapper>
              <SectionTitle>INTEGRATION</SectionTitle>
              <SectionDescription>
                통합적인 건축 솔루션을 통해 환경, 사람, 그리고 기술을 하나로 연결합니다.
              </SectionDescription>
            </TextWrapper>
          </Section>
        </SectionContainer>
      </IdentityContainer>
    </>
  );
};

export default IdentityPage;
