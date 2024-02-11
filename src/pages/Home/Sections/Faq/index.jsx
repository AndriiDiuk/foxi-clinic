import React, { useState } from 'react';
import minus from 'assets/icons/minus.svg';
import plus from 'assets/icons/plus.svg';
import AnimatedRotate from 'components/Animation/AnimatedRotate';
import Container from 'components/Container';
import SectionTitle from 'components/SectionTitle';

import { dataFaq } from './dataFaq.js';
import {
  FaqContent,
  FaqDesc,
  FaqIcon,
  FaqItem,
  FaqText,
  FaqTitle,
  SectionFaq,
} from './styles';

const Faq = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    selected === i ? setSelected(null) : setSelected(i);
  };

  return (
    <SectionFaq>
      <Container className="faq__container">
        <SectionTitle>FAQ</SectionTitle>
        <FaqContent>
          {dataFaq.map(({ title, description }, index) => {
            return (
              <FaqItem key={index}>
                <FaqTitle onClick={() => toggle(index)}>
                  <AnimatedRotate selected={selected == index}>
                    {selected == index ? (
                      <FaqIcon src={minus} />
                    ) : (
                      <FaqIcon src={plus} />
                    )}
                  </AnimatedRotate>
                  <FaqText> {title}</FaqText>
                </FaqTitle>
                <FaqDesc $show={selected == index}>{description}</FaqDesc>
              </FaqItem>
            );
          })}
        </FaqContent>
      </Container>
    </SectionFaq>
  );
};

export default Faq;
