import React, { useEffect, useState } from 'react';
import CookieConsentModal from 'components/CookieConsentModal';

import { GlobalStyle } from './GlobalStyles';
import Providers from './Providers';
import Routes from './Routes';

const App = () => {
  const [isCookieConsentModalVisible, setIsCookieConsentModalVisible] =
    useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (cookieConsent === null) {
      setIsCookieConsentModalVisible(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsCookieConsentModalVisible(false);
  };

  const handleDeclineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsCookieConsentModalVisible(false);
  };

  return (
    <Providers>
      <GlobalStyle />
      <Routes />
      <CookieConsentModal
        isVisible={isCookieConsentModalVisible}
        onAccept={handleAcceptCookies}
        onDecline={handleDeclineCookies}
      />
    </Providers>
  );
};

export default App;
