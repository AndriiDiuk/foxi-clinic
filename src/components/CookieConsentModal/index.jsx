import React from 'react';
import play from 'assets/icons/play.svg';
import Button from 'components/Button';
import PropTypes from 'prop-types';

import {
  ButtonWrapper,
  ContentWrapper,
  Description,
  StyledWrapper,
  Text,
  Title,
} from './styles';

const CookieConsentModal = ({ isVisible, onAccept, onDecline }) => {
  return (
    <StyledWrapper $isVisible={isVisible}>
      <ContentWrapper>
        <Title>Diese Webseite verwendet Cookies</Title>
        <Description>
          <Text>
            Wir verwenden Cookies, um das ordnungsgemße Funktionieren dieser
            Webseite zu gewährleisten.
          </Text>
          <Text>
            Darüber hinaus verwenden wir Cookies oder vergleichbare
            Technologien, die das Nutzerverhalten messen und den auf unserer
            Webseite angezeigten Inhalt anpassen, sofern Sie Ihre Einwilligung
            erteilt haben.
          </Text>
          <Text>
            Ihre Einwilligung erteilen Sie, indem Sie auf “Zulassen” klicken.
            Wenn Sie auf “Ablehnen” klicken, werden nur erforderliche Cookies
            eingesetzt.
          </Text>
        </Description>
        <ButtonWrapper>
          <Button onlyBorder onClick={onDecline}>
            Ablehnen
          </Button>
          <Button onlyBorder onClick={onAccept}>
            <img src={play} alt="play icon"></img>
            Zulassen
          </Button>
        </ButtonWrapper>
      </ContentWrapper>
    </StyledWrapper>
  );
};

CookieConsentModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onAccept: PropTypes.func.isRequired,
  onDecline: PropTypes.func.isRequired,
};
export default CookieConsentModal;
