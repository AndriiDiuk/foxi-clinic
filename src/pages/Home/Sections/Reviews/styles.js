import { styled } from 'styled-components';

export const SectionReviews = styled.section`
  overflow: hidden;
  .reviews__container {
    display: flex;
    flex-direction: column;
    gap: clamp(42px, 4.416vw + 23.008px, 76px);
    align-items: center;
    padding-top: clamp(52px, 3.377vw + 37.488px, 78px);
    padding-bottom: clamp(58px, 13.896vw - 1.76px, 165.008px);
  }
`;

export const ReviewsContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: clamp(16.25rem, 103.07vw - 4.364rem, 75rem);
  cursor: pointer;

  .swiper {
    padding-bottom: 50px;
  }

  .swiper-slide {
  }

  .swiper-pagination {
    margin-top: 50px !important;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    gap: 16px;
  }
`;

export const ReviewItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
  justify-content: space-between;
  align-items: flex-start;
  min-width: 298px;
  height: 100%;
  min-height: 340px;
  padding: 26px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.lightGrey};

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    min-height: 300px;
    min-width: 258px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    min-height: 300px;
    max-width: fit-content;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.smallMobile}) {
    padding: 16px;
  }
`;

export const ReviewBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
`;

export const ReviewQuotes = styled.img`
  width: 16px;
  height: 14px;
`;

export const ReviewText = styled.div`
  font-size: 16px;
  font-weight: 400;
  min-height: 130px;
  align-self: stretch;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 15px;
    line-height: 1.5;
  }
`;

export const ReviewFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
`;

export const ReviewInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ReviewName = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 21px;
`;

export const ReviewImg = styled.img`
  display: block;
  max-width: 48px;
  width:100%
  height:100%;
  max-height: 48px;
  border-radius: 50px;
  object-fit: cover;
`;

export const ReviewDesc = styled.div`
  font-size: 14px;
`;
