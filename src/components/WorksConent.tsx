import React from "react";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: #555;
  line-height: 1.6;
  max-width: 800px;
`;

const DesignSection = () => {
  return (
    <Section>
      <Title>Design</Title>
      <Description>
        반세기 대한민국 현대건축사를 이끌어 온 형우건축은 풍부한 경험을 바탕으로
        차별화된 디자인과 탁월한 기술력이 돋보이는 국내외 대형 프로젝트를
        성공적으로 수행하고 있습니다.
      </Description>
    </Section>
  );
};

export default DesignSection;
