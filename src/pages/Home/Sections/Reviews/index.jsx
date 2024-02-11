import React from 'react';
import Container from 'components/Container';
import SectionTitle from 'components/SectionTitle';

import { dataReviews } from './dataReviews.js';
import SliderReviews from './Slider.jsx';
import { ReviewsContent, SectionReviews } from './styles';

const Reviews = () => {
  return (
    <SectionReviews>
      <Container className="reviews__container">
        <SectionTitle>Stimmen unserer Kunden</SectionTitle>
        <ReviewsContent>
          <SliderReviews data={dataReviews} />
        </ReviewsContent>
      </Container>
    </SectionReviews>
  );
};

export default Reviews;
