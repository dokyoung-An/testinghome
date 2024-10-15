import React from "react";
import styled from 'styled-components';
import WorksNavi from "../components/WorksNavi";
import DesignSection from "../components/WorksConent";
import Work from "../components/WorksWork";
import Footer from "../components/Footer";

const WorkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

const Works: React.FC = () => {
  return (
   <>
   <WorkContainer>
   <WorksNavi/>
   <DesignSection/>
   </WorkContainer>
   <Work/>
   <Footer/>
   
   </>
  );
}

export default Works;
