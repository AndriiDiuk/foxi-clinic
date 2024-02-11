import React, { useRef } from 'react';
import fox from 'assets/img/doctor-fox.png';
import Container from 'components/Container';
import LinkButton from 'components/LinkButton';
import SectionTitle from 'components/SectionTitle';
import { motion, useScroll, useTransform } from 'framer-motion';

import {
  Advantage,
  AdvantagesWrap,
  BottomWrapper,
  Content,
  Description,
  ImgFox,
  InfoWrap,
  InvoiceImageWrapper,
  Number,
  SectionInvoice,
  Title,
  TopWrapper,
} from './styles';

const Invoice = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  return (
    <SectionInvoice>
      <Container className="invoice__container" ref={containerRef}>
        <Content>
          <TopWrapper>
            <SectionTitle>VON ZAHNÄRZTEN FÜR ZAHNÄRZTE </SectionTitle>
            <Title>Endlich automatisierte Abrechnung!</Title>
          </TopWrapper>
          <BottomWrapper>
            <InfoWrap>
              <LinkButton
                orange
                href="https://calendly.com/foxi-abrechnung/30min?month=2024-02"
                target="_blank"
              >
                Termin vereinbaren!
              </LinkButton>
              <AdvantagesWrap>
                <Advantage>
                  <Number>15%</Number>
                  <Description>mehr Umsatz</Description>
                </Advantage>
                <Advantage>
                  <Number>3x</Number>
                  <Description>schneller abrechnen</Description>
                </Advantage>
                <Advantage>
                  <Number>100%</Number>
                  <Description>korrekte Dokumentation</Description>
                </Advantage>
              </AdvantagesWrap>
            </InfoWrap>
            <InvoiceImageWrapper $mobile>
              <motion.div style={{ y }}>
                <ImgFox src={fox} alt="Fox" loading="lazy" />
              </motion.div>
            </InvoiceImageWrapper>
          </BottomWrapper>
        </Content>
        <InvoiceImageWrapper>
          <motion.div style={{ y }}>
            <ImgFox src={fox} alt="Fox" loading="lazy" />
          </motion.div>
        </InvoiceImageWrapper>
      </Container>
    </SectionInvoice>
  );
};

export default Invoice;
