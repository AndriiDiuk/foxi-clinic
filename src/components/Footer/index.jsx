import React from 'react';
import { Link } from 'react-router-dom';
import InstagramIcon from 'assets/icons/instagram.svg';
import { styled } from 'styled-components';

import Container from '../Container';

const FooterWrapper = styled.footer`
  text-align: center;
  color: ${({ theme }) => theme.colors.defaultWhite};
  padding: 28px 0;
  background: ${({ theme }) => theme.colors.defaultText};
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;

  .footer__container {
    display: flex;
    flex-direction: column;
    gap: 38px;
  }
`;

const FooterLinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 37px;

  a {
    color: ${({ theme }) => theme.colors.defaultWhite};
    transition: opacity ${({ theme }) => theme.constant.transition};

    &:hover {
      opacity: 80%;
    }
  }
`;

const StyledIconLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const FooterTextWrapper = styled.div``;

const Footer = () => {
  return (
    <FooterWrapper>
      <Container className="footer__container">
        <FooterLinkWrapper>
          <StyledIconLink
            to="https://www.instagram.com/foxi.abrechnung"
            target="_blank"
          >
            <img src={InstagramIcon} alt="instagram" />
            Instagram
          </StyledIconLink>
          <Link to="/imprint">Impressum</Link>
          <Link to="/policy">Datenschutzbestimmungen</Link>
        </FooterLinkWrapper>
        <FooterTextWrapper>
          Hopf & Hopf GmbH. Copyright © {new Date().getFullYear()}. Alle Rechte
          vorbehalten.
        </FooterTextWrapper>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
