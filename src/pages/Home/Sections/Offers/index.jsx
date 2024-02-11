import React, { useEffect } from 'react';
import AnimatedReveal from 'components/Animation/AnimatedReveal';
import Container from 'components/Container';
import SectionTitle from 'components/SectionTitle';

import { dataOffers } from './dataOffers';
import {
  OfferBody,
  OfferDescriptionItem,
  OfferDescriptionWrap,
  OfferHeader,
  OfferImage,
  OfferImageWrap,
  OfferItem,
  OfferNumber,
  OffersContent,
  OfferSubtext,
  OfferText,
  OfferTitle,
  SectionOffers,
} from './styles';

const Offers = () => {
  const [openedOffers, setOpenedOffers] = React.useState([]);

  const handleScroll = () => {
    const threshold = window.innerHeight * 0.65;

    dataOffers.forEach((_, index) => {
      const element = document.getElementById(`offer-${index}`);
      const rect = element.getBoundingClientRect();
      if (rect.top - threshold < 0 && !openedOffers.includes(index)) {
        setOpenedOffers((prevOpened) => [...prevOpened, index]);
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [openedOffers]);

  return (
    <SectionOffers>
      <Container className="offers__container">
        <SectionTitle defaultTitle>Das bietet Foxi auch</SectionTitle>
        <OffersContent>
          {dataOffers.map(({ number, title, description, image }, index) => (
            <OfferItem key={index + 1} id={`offer-${index}`}>
              <OfferHeader role="button" tabIndex={0}>
                <OfferNumber>{number}</OfferNumber>
                <OfferTitle>{title}</OfferTitle>
              </OfferHeader>
              <OfferBody $show={openedOffers.includes(index)}>
                <OfferDescriptionWrap>
                  {description.map(({ text, subtext }, descIndex) => (
                    <OfferDescriptionItem key={descIndex}>
                      <OfferText>{text}</OfferText>
                      <OfferSubtext>{subtext}</OfferSubtext>
                    </OfferDescriptionItem>
                  ))}
                </OfferDescriptionWrap>
                <OfferImageWrap>
                  <AnimatedReveal
                    isOpen={openedOffers.includes(index)}
                    disableAuto
                  >
                    <OfferImage src={image} alt={title} />
                  </AnimatedReveal>
                </OfferImageWrap>
              </OfferBody>
            </OfferItem>
          ))}
        </OffersContent>
      </Container>
    </SectionOffers>
  );
};

export default Offers;
