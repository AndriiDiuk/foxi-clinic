import React from 'react';
import Container from 'components/Container';
import SectionTitle from 'components/SectionTitle';

import {
  SectionSteps,
  StepsContent,
  StepsDescription,
  StepsItem,
  StepsNumber,
  StepsTitle,
} from './styles';

const Steps = () => {
  return (
    <SectionSteps>
      <Container className="steps__container">
        <SectionTitle>In 3 Schritten zur finalen Abrechnung!</SectionTitle>
        <StepsContent>
          <StepsItem>
            <StepsNumber>1</StepsNumber>
            <StepsTitle $startStep>Fall auswählen</StepsTitle>
            <StepsDescription>
              Du wählst Patientenversicherung und Deine Behandlungen aus
            </StepsDescription>
          </StepsItem>
          <StepsItem>
            <StepsNumber>2</StepsNumber>
            <StepsTitle $centerStep>Behandlung eingeben</StepsTitle>
            <StepsDescription>
              In einem übersichtlichen Interface wählst Du Deine genauen
              Behandlungsschritte aus
            </StepsDescription>
          </StepsItem>
          <StepsItem>
            <StepsNumber>3</StepsNumber>
            <StepsTitle $finishStep>Automatische Abrechnung</StepsTitle>
            <StepsDescription>
              Unsere Leistungsübersicht zeigt Dir dann genau an, was Du
              abrechnen kannst
            </StepsDescription>
          </StepsItem>
        </StepsContent>
      </Container>
    </SectionSteps>
  );
};

export default Steps;
