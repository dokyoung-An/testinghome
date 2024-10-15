import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  height: 15vh;
  margin-top: 30px;
  border-top: 1px solid rgba(51, 51, 51,0.1);
  width: 100%;
  
`;

const FooterLinks = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 30px;
`;

const FooterLink = styled(Link)`
  color: #333;
  text-decoration: none;
  margin: 0 10px;
  font-size: 14px;
  font-weight: 600;

  &:hover {
    color: #000;
  }
`;

const Divider = styled.div`
  width: 1px;
  height: 100%;
  background-color: #333;
  margin: 0 10px;
`;

const FooterInfo = styled.div`
  font-size: 12px;
  color: #666;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinks>
        <FooterLink to="/legal">법적고지</FooterLink>
        <Divider />
        <FooterLink to="/recruitment">인재채용</FooterLink>
        <Divider />
        <FooterLink to="/contact">Contact</FooterLink>
        <Divider />
        <FooterLink to="/facebook">페이스북</FooterLink>
        <Divider />
        <FooterLink to="/blog">블로그</FooterLink>
        <Divider />
        <FooterLink to="/instagram">인스타그램</FooterLink>
        <Divider />
        <FooterLink to="/youtube">유튜브</FooterLink>
      </FooterLinks>
      <FooterInfo>
        서울특별시 중구 세종대로 12길 12 | Tel: (02)708-8600 | Fax: (02)2039-6430<br />
        COPYRIGHT©2018 JUNGLIM ARCHITECTURE, JUNGLIM CM ARCHITECTURE<br />
        ALL RIGHTS RESERVED.
      </FooterInfo>
    </FooterContainer>
  );
};

export default Footer;
