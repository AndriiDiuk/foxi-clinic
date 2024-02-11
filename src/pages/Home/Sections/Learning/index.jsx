import React from 'react';
import check from 'assets/icons/check.svg';
import learning01 from 'assets/icons/learning-01.svg';
import learning02 from 'assets/icons/learning-02.svg';
import learning03 from 'assets/icons/learning-03.svg';
import AnimatedReveal from 'components/Animation/AnimatedReveal';
import Container from 'components/Container';
import SectionTitle from 'components/SectionTitle';

import {
  LearningContent,
  LearningImageScreen1,
  LearningImageScreen2,
  LearningImageScreen3,
  LearningImageWrapper,
  LearningItem,
  LearningItemIcon,
  LearningItemText,
  LearningTextWrapper,
  SectionLearning,
} from './styles';

const Learning = () => {
  return (
    <SectionLearning>
      <Container className="learning__container">
        <SectionTitle>Sofort nutzen ohne Lernkurve</SectionTitle>
        <LearningContent>
          <LearningTextWrapper>
            <LearningItem>
              <LearningItemIcon src={check} />
              <LearningItemText>
                Innovatives Design zur perfekten Abrechnung mit wenigen Klicks
              </LearningItemText>
            </LearningItem>
            <LearningItem>
              <LearningItemIcon src={check} />
              <LearningItemText>
                Keine Leistung mehr verschenken
              </LearningItemText>
            </LearningItem>
            <LearningItem>
              <LearningItemIcon src={check} />
              <LearningItemText>
                Keine Abrechnungsfortbildungen mehr nötig
              </LearningItemText>
            </LearningItem>
            <LearningItem>
              <LearningItemIcon src={check} />
              <LearningItemText>
                Regresssichere Dokumentation in Sekundenschnelle erstellen
              </LearningItemText>
            </LearningItem>
          </LearningTextWrapper>
          <LearningImageWrapper>
            <AnimatedReveal>
              {' '}
              <LearningImageScreen1 src={learning01} />
            </AnimatedReveal>
            <AnimatedReveal>
              <LearningImageScreen2 src={learning02} />
            </AnimatedReveal>
            <AnimatedReveal>
              <LearningImageScreen3 src={learning03} />
            </AnimatedReveal>
          </LearningImageWrapper>
        </LearningContent>
      </Container>
    </SectionLearning>
  );
};

export default Learning;
