import React from 'react';
import { Link } from 'react-router-dom';
import LogoFox from 'assets/icons/logo.svg';
import routes from 'constants/routes';
import { styled } from 'styled-components';

const LogoWrapper = styled.div`
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: clamp(0.5rem, 0.519vw + 0.36rem, 0.75rem);

    &:active,
    &:visited {
      color: ${({ theme }) => theme.colors.defaultText};
    }
  }
`;

const LogoIcon = styled.img`
  width: clamp(2.375rem, 1.558vw + 1.956rem, 3.125rem);
  height: clamp(2.375rem, 1.558vw + 1.956rem, 3.125rem);
`;

const LogoText = styled.div`
  font-size: clamp(0.938rem, 0.649vw + 0.763rem, 1.25rem);

  b {
    font-size: clamp(1.375rem, 1.039vw + 1.096rem, 1.875rem);
    font-weight: 700;

    letter-spacing: 2px;
    text-transform: uppercase;

    @media (max-width: ${({ theme }) => theme.breakpoint.smallMobile}) {
      display: block;
      line-height: 1;
    }
  }
`;

const Logo = () => {
  return (
    <LogoWrapper>
      <Link to={routes.home}>
        <LogoIcon src={LogoFox} alt="Fox" loading="lazy" />
        <LogoText>
          <b>FOXI</b> abrechnung
        </LogoText>
      </Link>
    </LogoWrapper>
  );
};

export default Logo;
