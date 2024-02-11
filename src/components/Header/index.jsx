import React from 'react';
import { styled } from 'styled-components';
import { redirectToFoxiApp } from 'utils/redirect-to-foxi';

import Button from '../Button';
import Container from '../Container';
import Logo from '../Logo';

export const HeaderComponent = styled.header`
  max-height: 94px;
`;

export const HeaderContainer = styled(Container)`
  max-width: 1400px;
  padding: clamp(1rem, 8vw - 5rem, 2rem) clamp(1rem, 8vw - 5rem, 2rem);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = () => {
  return (
    <HeaderComponent>
      <HeaderContainer>
        <Logo />
        <Button onClick={redirectToFoxiApp} onlyBorder>
          Login
        </Button>
      </HeaderContainer>
    </HeaderComponent>
  );
};

export default Header;
