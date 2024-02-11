import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Lenis from '@studio-freight/lenis';
import Page from 'components/Page';

import AdvantageCards from './Sections/AdvantageCards';
import ContactsUs from './Sections/ContactsUs/index.jsx';
import Faq from './Sections/Faq';
import Invoice from './Sections/Invoice';
import Learning from './Sections/Learning';
import Offers from './Sections/Offers';
import Reviews from './Sections/Reviews';
import Steps from './Sections/Steps';
import TeamPay from './Sections/TeamPay';

const HomePage = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.6,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <Page>
      <Helmet>
        <title>Foxi abrechnung</title>
        <meta name="description" content="Endlich automatisierte Abrechnung!" />
      </Helmet>
      <Invoice />
      <AdvantageCards />
      <Learning />
      <TeamPay />
      <Steps />
      <Reviews />
      <Offers />
      <Faq />
      <ContactsUs />
    </Page>
  );
};

export default HomePage;
