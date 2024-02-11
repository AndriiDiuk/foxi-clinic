import React, { useLayoutEffect, useRef } from 'react';
import bill from 'assets/icons/icon-3x.svg';
import sales from 'assets/icons/icon-15.svg';
import correctness from 'assets/icons/icon-100.svg';
import Container from 'components/Container';
import SectionTitle from 'components/SectionTitle';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import {
  AdvantageCard,
  AdvantageCardBg,
  AdvantageCardWrap,
  AdvantageDesc,
  AdvantageIcon,
  AdvantageText,
  SectionAdvantageCards,
  TextBottom,
} from './styles';

const AdvantageCards = () => {
  const containerBg = useRef(null);
  const container = useRef(null);
  const cardWrap = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const { top, bottom } = container.current.getBoundingClientRect();

    const visiblePixels =
      Math.min(bottom, window.innerHeight) - Math.max(top, 0);

    const mm = gsap.matchMedia();
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: () => `top bottom-=${visiblePixels}px`,
        end: 'bottom+=100px bottom',
        markers: false,
      },
    });

    mm.add('(min-width: 1030px)', () => {
      timeline
        .to(containerBg.current, { width: '100%', duration: 2 })
        .to(cardWrap.current, { scale: 1.24, duration: 2 }, '<');
    });
  }, []);

  return (
    <SectionAdvantageCards ref={container}>
      <AdvantageCardBg ref={containerBg}>
        <Container className="advantage-cards__container">
          <SectionTitle defaultTitle>Deine Vorteile mit FOXI</SectionTitle>
          <AdvantageCardWrap ref={cardWrap}>
            <AdvantageCard>
              <AdvantageIcon src={sales} />
              <AdvantageText>+15%</AdvantageText>
              <AdvantageDesc>Umsatz</AdvantageDesc>
            </AdvantageCard>
            <AdvantageCard>
              <AdvantageIcon src={bill} />
              <AdvantageText>3x</AdvantageText>
              <AdvantageDesc>schneller abrechnen</AdvantageDesc>
            </AdvantageCard>
            <AdvantageCard>
              <AdvantageIcon src={correctness} />
              <AdvantageText>100%</AdvantageText>
              <AdvantageDesc>Korrektheit</AdvantageDesc>
            </AdvantageCard>
          </AdvantageCardWrap>
          <TextBottom>
            <div>
              FOXI ist Deine neue Software, um Abrechnung und Dokumentation so
              einfach und schnell wie möglich zu machen!
            </div>
          </TextBottom>
        </Container>
      </AdvantageCardBg>
    </SectionAdvantageCards>
  );
};

export default AdvantageCards;
