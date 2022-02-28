import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../images/logo.png';

const HeaderContainer = styled.header`
  padding: 2em 80px;
`;

const MainNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Logo = styled.img`
  display: block;
`;

const NavLinks = styled.div`
  display: flex;
  flex-direction: row;
`;

const LinkItem = styled(Link)`
  margin-right: 25px;
  color: black;
`;

function Header() {
  return (
    <HeaderContainer>
      <MainNav>
        <Logo src={logo} alt="reddit timer logo" />
        <NavLinks>
          <LinkItem to="#">Search</LinkItem>
          <LinkItem to="#">How it works</LinkItem>
          <LinkItem to="#">About</LinkItem>
        </NavLinks>
      </MainNav>
    </HeaderContainer>
  );
}

export default Header;
