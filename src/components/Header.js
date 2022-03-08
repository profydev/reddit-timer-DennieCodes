import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent } from '../images/logo.svg';

const HeaderContainer = styled.header`
  padding: 2em 80px;
`;

const MainNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Logo = styled(ReactComponent)`
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
        <Link to="/">
          <Logo alt="reddit timer logo" />
        </Link>

        <NavLinks>
          <LinkItem to="/search/javascript">Search</LinkItem>
          <LinkItem to="#how-it-works">How it works</LinkItem>
          <LinkItem to="#about">About</LinkItem>
        </NavLinks>
      </MainNav>
    </HeaderContainer>
  );
}

export default Header;
