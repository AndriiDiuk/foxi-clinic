import React from 'react';
import { Helmet } from 'react-helmet-async';
import Container from 'components/Container';
import Page from 'components/Page';

import {
  BlockInfo,
  ContentWrapper,
  Text,
  TextWrapper,
  Title,
  TitlePage,
} from './styles';

const Imprint = () => {
  return (
    <Page>
      <Helmet>
        <title>Foxi abrechnung</title>
        <meta name="description" content="Endlich automatisierte Abrechnung!" />
      </Helmet>
      <ContentWrapper>
        <Container className="imprint__container">
          <TitlePage>Impressum</TitlePage>
          <BlockInfo>
            <Title>Angaben gemäß § 5 TMG</Title>
            <TextWrapper>
              <Text>Hopf & Hopf GmbH</Text>
              <Text>Glockenstraße 35</Text>
              <Text>40476 Düsseldorf</Text>
            </TextWrapper>
            <TextWrapper>
              <Text>Handelsregister: 101752</Text>
              <Text>Registergericht: Amtsgericht Düsseldorf</Text>
            </TextWrapper>
            <TextWrapper>
              <Text>
                <b>Vertreten durch: </b>
              </Text>
              <Text>Dr. Michael Hopf</Text>
            </TextWrapper>
          </BlockInfo>
          <BlockInfo>
            <Title>Kontakt</Title>
            <TextWrapper>
              <Text>E-Mail: info@foxi-abrechnung.de</Text>
            </TextWrapper>
          </BlockInfo>
          <BlockInfo>
            <Title>Redaktionell verantwortlich</Title>
            <TextWrapper>
              <Text>Dr. Michael Hopf</Text>
            </TextWrapper>
          </BlockInfo>
        </Container>
      </ContentWrapper>
    </Page>
  );
};

export default Imprint;
