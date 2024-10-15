import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Styles for the hamburger button
const HamburgerButton = styled.div`
  width: 30px;
  height: 3px;
  background-color: white;
  margin: 4px 0;
`;

// Styles for the hamburger icon container
const MenuIcon = styled.div<{ isVisible: boolean }>`
  display: ${(props) => (props.isVisible ? 'flex' : 'none')}; /* 햄버거 버튼이 드롭다운이 열리면 숨겨짐 */
  flex-direction: column;
  cursor: pointer;
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 1001;
`;

// Styles for the dropdown menu with animation
const DropdownMenu = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: 60px;
  left: ${(props) => (props.$isOpen ? '0' : '-350px')}; /* 메뉴는 화면 밖에서 시작 */
  height: 100vh;
  width: 250px;
  background: rgba(0, 0, 0, 0.8);
  transition: left 0.8s ease-in-out; /* 부드럽게 열리고 닫히는 애니메이션 */
  z-index: 1000;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 1rem;
  right: -3rem;
  cursor: pointer;
  color: white;
  font-size: 2rem;
`;

// Nav styles for the regular links
const Nav = styled.nav`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  padding: 1rem;
  background: transparent;
  z-index: 1000;
`;

const NavItem = styled(Link)`
  color: white;
  margin-left: 2rem;
  text-decoration: none;
  font-size: 1rem;
  text-transform: uppercase;

  &:hover {
    color: #ccc;
  }
`;

// Language Switcher styles
const LanguageSwitcher = styled.div`
  margin-left: 2rem;
  font-size: 1rem;
  color: white;
`;

// Dropdown Menu Item Styles
const MenuItem = styled(Link)`
  display: block;
  padding: 1.5rem;
  color: white;
  font-size: 1.5rem;
  text-decoration: none;
  text-transform: uppercase;
  position: relative;

  &:hover {
    color: #00aaff;
  }

  &::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background-color: #00aaff;
    transition: width 0.3s ease;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  &:hover::after {
    width: 50%;
  }
`;

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // 드롭다운 메뉴의 열림/닫힘 상태
  const [isHamburgerVisible, setHamburgerVisible] = useState(true); // 햄버거 버튼 보임/숨김 상태

  const openMenu = () => {
    setHamburgerVisible(false); // 햄버거 버튼 숨기기
    setIsOpen(true); // 드롭다운 메뉴 열기
 
  };

  const closeMenu = () => {
    setIsOpen(false); // 드롭다운 메뉴 닫기
    setHamburgerVisible(true); // 햄버거 버튼 다시 보이기
  };

  return (
    <>
      {/* Regular Navigation Bar */}
      <Nav>
        <NavItem to="/">Quick Link</NavItem>
        <NavItem to="/contact">Contact</NavItem>
        <LanguageSwitcher>KOR</LanguageSwitcher>
        <NavItem to="#"><i className="fas fa-search"></i></NavItem>
      </Nav>

      {/* Hamburger Menu Icon */}
      <MenuIcon onClick={openMenu} isVisible={isHamburgerVisible}>
        <HamburgerButton />
        <HamburgerButton />
        <HamburgerButton />
      </MenuIcon>

      {/* Dropdown Menu */}
      <DropdownMenu $isOpen={isOpen}>
        <CloseButton onClick={closeMenu}>&times;</CloseButton>

        {/* Menu Items with hover effect and link transitions */}
        <MenuItem to="/works">WORKS</MenuItem>
        <MenuItem to="/service">SERVICE</MenuItem>
        <MenuItem to="/identity">IDENTITY</MenuItem>
        <MenuItem to="/about">ABOUT</MenuItem>
      </DropdownMenu>
    </>
  );
};

export default Navigation;
