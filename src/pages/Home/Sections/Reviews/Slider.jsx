/* eslint-disable import/no-unresolved */
import React from 'react';
import quotes from 'assets/icons/quotes.svg';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { dataReviews } from './dataReviews.js';
import {
  ReviewBody,
  ReviewDesc,
  ReviewFooter,
  ReviewImg,
  ReviewInfo,
  ReviewItem,
  ReviewName,
  ReviewQuotes,
  ReviewText,
} from './styles';

import 'swiper/css';

const Slider = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={16}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 70,
        },
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {dataReviews.map(({ name, review, profession, image }, index) => {
        return (
          <SwiperSlide key={index + 1}>
            <ReviewItem>
              <ReviewBody>
                <ReviewQuotes src={quotes} />
                <ReviewText>{review}</ReviewText>
              </ReviewBody>
              <ReviewFooter>
                <ReviewInfo>
                  <ReviewName>{name}</ReviewName>
                  <ReviewDesc>{profession}</ReviewDesc>
                </ReviewInfo>
                <ReviewImg src={image} />
              </ReviewFooter>
            </ReviewItem>
          </SwiperSlide>
        );
      })}{' '}
    </Swiper>
  );
};

export default Slider;
