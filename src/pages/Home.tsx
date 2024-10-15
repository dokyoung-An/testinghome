import React from "react";
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import MainSlider from '../components/MainSlider';
import Identity from '../components/Identity';
import Work from '../components/Work';
import NewsSection from "../components/News";
import ActionBoxes from "../components/box";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

// Change Title to a styled Link to support routing
const Title = styled(Link)`
  position: absolute;
  top: 0.2rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 2.5rem;
  color: white;
  z-index: 2;
  padding: 10px;
  text-decoration: none;

  &:hover {
    color: #ccc;  // Optional hover effect
  }
`;

const Content = styled.p`
  font-size: 1.5rem;
  margin-top: 1rem;
  color: #333;
  text-align: center;
`;

const IdentityWrapper = styled.div`
  width: 100%;
  margin-top: 100vh;  // This ensures the Identity section starts below the full height of MainSlider
`;

const ActionBoxesWrapper  = styled.div`
  height: 20vh;
`;

const Home: React.FC = () => {
  return <>
    <HomeContainer>
      {/* Navigation and Title */}
      <Navigation />
      <Title to="/">HyoungWoo</Title>  {/* Now Title is clickable */}
      <Content>Welcome to the Home page.</Content>

      {/* Main Slider */}
      <MainSlider />

      {/* Identity Section */}
      <IdentityWrapper>
        <Identity />
        <Work />
        <NewsSection />
        <ActionBoxesWrapper>
          <ActionBoxes />
        </ActionBoxesWrapper>
      </IdentityWrapper>

      
    </HomeContainer>
    <Footer />
    </>
}

export default Home;
