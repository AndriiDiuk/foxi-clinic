import { styled } from 'styled-components';

export const SectionOffers = styled.section`
  background: ${({ theme }) => theme.colors.secondary};

  .offers__container {
    display: flex;
    flex-direction: column;
    gap: clamp(42px, 4.416vw + 23.008px, 76px);
    align-items: center;
    padding-top: clamp(2.938rem, 0.694vw + 2.604rem, 3.125rem);
    padding-bottom: clamp(2.938rem, 4.861vw + 0.604rem, 4.25rem);
  }
`;

export const OffersContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
`;

export const OfferItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(8px, 3.472vw - 8.672px, 18px);
  line-height: 21px;
  color: ${({ theme }) => theme.colors.defaultWhite};
`;

export const OfferHeader = styled.div`
  display: flex;
  padding: clamp(0.875rem, 4.514vw - 0.479rem, 1.688rem) 0;
  gap: 52px;
  user-select: none;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    gap: 8px;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const OfferNumber = styled.div`
  font-size: 24px;
  font-weight: 700;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    gap: 20px;
  }
`;

export const OfferTitle = styled.div`
  font-size: 22px;
  font-weight: 400;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    gap: 18px;
  }
`;

export const OfferBody = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  overflow: hidden;
  max-height: 0;
  transition: all 4s ease-out;

  ${({ $show }) =>
    $show &&
    ` 
   max-height: 1000px;
	`};

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    flex-direction: column;
    justify-content: flex-start;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    justify-content: flex-end;
    flex-direction: column-reverse;
  }
`;

export const OfferDescriptionWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
  padding-left: 86px;
  height: fit-content;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    padding-left: 0;
  }
`;

export const OfferDescriptionItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const OfferText = styled.div`
  font-size: 22px;
  font-weight: 700;
`;

export const OfferSubtext = styled.span`
  font-size: 18px;
`;

export const OfferImageWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 50%;
  min-height: auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    align-items: center;
    width: 100%;
  }
`;

export const OfferImage = styled.img`
  display: block;
`;
