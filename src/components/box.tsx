
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Container for the two boxes
const BoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1400px;
  margin: 0 auto;
  gap: 20px; /* 2개의 박스 간격 */
  height: 10vh;
`;

// Individual box style
const Box = styled(Link)<{ bgImage: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 48%; /* 각 박스의 너비 */
  padding: 20px;
  background-image: url(${(props) => props.bgImage}); /* 배경 이미지 추가 */
  background-size: cover; /* 이미지 크기를 박스에 맞추기 */
  background-position: center; /* 이미지 중앙 배치 */
  text-decoration: none;
  color: white;
  transition: background-color 0.3s ease;
  cursor: pointer;
  position: relative;

  &:hover {
    background-color: rgba(0, 0, 0, 0.5); /* 호버 시 어두운 레이어 추가 */
  }
`;

// Text inside the box
const BoxText = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  z-index: 1; /* 텍스트가 이미지 위에 보이도록 설정 */
`;

// Right arrow icon
const Arrow = styled.div`
  font-size: 1.5rem;
  color: white;
  z-index: 1; /* 화살표도 이미지 위에 보이도록 설정 */
`;

// Semi-transparent layer over the image
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3); /* 반투명 레이어 */
  z-index: 0; /* 레이어가 텍스트 아래에 위치 */
`;

// Component implementation
const ActionBoxes = () => {
  return (
    <BoxContainer>
      {/* First box with background image */}
      <Box to="/recruitment" bgImage="/assets/diprima-1.jpg">
        <BoxText>형우건축 인재채용 바로가기</BoxText>
        <Arrow>→</Arrow>
        <Overlay />
      </Box>

      {/* Second box with background image */}
      <Box to="/contact" bgImage="/assets/diprima-1.jpg">
        <BoxText>CONTACT US</BoxText>
        <Arrow>→</Arrow>
        <Overlay />
      </Box>
    </BoxContainer>
  );
};

export default ActionBoxes;
