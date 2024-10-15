import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: black;
  width: 100%;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  margin-left: 5rem;
  cursor: pointer;
  text-decoration: none;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;
`;

const MenuItem = styled.li`
  color: white;
  text-transform: uppercase;
  font-size: 1rem;

  &:hover {
    color: #00aaff; /* Hover 시 색상 변경 */
  }
`;

const RightMenu = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  color: white;
  margin-right: 1rem;
`;

const Divider = styled.div`
  width: 1px;
  height: 20px;
  background-color: white;
`;

const SearchIcon = styled.i`
  font-size: 1rem;
  cursor: pointer;
`;

const WorksNavi: React.FC = () => {
  return (
    <Navbar>
      {/* 왼쪽 로고 */}
      <Logo to="/">HYUNG WOO</Logo>

      {/* 가운데 메뉴 */}
      <Menu>
        <MenuItem><Link to="/works" style={{ color: 'inherit', textDecoration: 'none' }}>Works</Link></MenuItem>
        <MenuItem><Link to="/service" style={{ color: 'inherit', textDecoration: 'none' }}>Service</Link></MenuItem>
        <MenuItem><Link to="/identity" style={{ color: 'inherit', textDecoration: 'none' }}>Identity</Link></MenuItem>
        <MenuItem><Link to="/about" style={{ color: 'inherit', textDecoration: 'none' }}>About</Link></MenuItem>
      </Menu>

      {/* 오른쪽 메뉴 */}
      <RightMenu>
        <div>Quick Link</div>
        <Divider />
        <div><Link to="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>Contact</Link></div>
        <Divider />
        <div>KOR</div>
        <Divider />
        <SearchIcon className="fas fa-search" />
      </RightMenu>
    </Navbar>
  );
};

export default WorksNavi;
