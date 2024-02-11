import React from 'react';
import team from 'assets/img/team.webp';
import AnimatedReveal from 'components/Animation/AnimatedReveal';
import Container from 'components/Container';
import LinkButton from 'components/LinkButton';
import SectionTitle from 'components/SectionTitle';

import {
  SectionTeamPay,
  TeamPayContent,
  TeamPayDesc,
  TeamPayImage,
  TeamPayImageWrapper,
  TeamPayTextWrapper,
  TeamPayTitle,
  TeamPayTitleWrap,
  TeamPayTitleWrapTablet,
} from './styles';

const TeamPay = () => {
  return (
    <SectionTeamPay>
      <Container className="team-pay__container">
        <SectionTitle>Abrechnung für das ganze Team!</SectionTitle>
        <TeamPayContent>
          <TeamPayTextWrapper>
            <TeamPayDesc>
              Eine Implantation mit Sinuslift in 5&nbsp;Minuten abrechnen und
              dokumentieren?{' '}
            </TeamPayDesc>
            <TeamPayTitleWrap>
              <TeamPayTitle>Kein Problem!</TeamPayTitle>
              <LinkButton
                orange
                href="https://calendly.com/foxi-abrechnung/30min?month=2024-02"
                target="_blank"
              >
                Termin vereinbaren!
              </LinkButton>
            </TeamPayTitleWrap>
          </TeamPayTextWrapper>
          <TeamPayImageWrapper>
            <AnimatedReveal>
              <TeamPayImage src={team} />
            </AnimatedReveal>
          </TeamPayImageWrapper>
        </TeamPayContent>
        <TeamPayTitleWrapTablet>
          <TeamPayTitle>Kein Problem!</TeamPayTitle>
          <LinkButton
            orange
            href="https://calendly.com/foxi-abrechnung/30min?month=2024-02"
            target="_blank"
          >
            Termin vereinbaren!
          </LinkButton>
        </TeamPayTitleWrapTablet>
      </Container>
    </SectionTeamPay>
  );
};

export default TeamPay;
