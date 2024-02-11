import { styled } from 'styled-components';

export const SectionTeamPay = styled.section`
  .team-pay__container {
    display: flex;
    flex-direction: column;
    gap: clamp(2.625rem, 12.731vw - 3.486rem, 6.063rem);
    align-items: center;
    padding-top: clamp(3.75rem, 2.273vw + 3.295rem, 5rem);
    padding-bottom: clamp(2.25rem, 6.818vw + 0.886rem, 6rem);
  }
`;

export const TeamPayContent = styled.div`
  display: flex;
  gap: clamp(2.5rem, 8.333vw + 0rem, 4rem);

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    flex-direction: column;
  }
`;

export const TeamPayTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const TeamPayImageWrapper = styled.div`
  height: clamp(13.75rem, 26.596vw + 5.771rem, 26.25rem);
`;

export const TeamPayImage = styled.img`
  --radius: clamp(98px, 7.407vw + 41.104px, 130px);

  border-radius: 0px var(--radius) var(--radius) var(--radius);
  border: 3px solid ${({ theme }) => theme.colors.primary};
`;

export const TeamPayDesc = styled.span`
  display: block;
  font-size: 28px;
  font-weight: 400;
  line-height: 41.5px;
  padding-top: 30px;
  max-width: clamp(10.5rem, 54.787vw - 5.936rem, 36.25rem);

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 26px;
    line-height: 31.125px;
    padding-top: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 21px;
    line-height: 31.125px;
    text-align: center;
    max-width: fit-content;
  }
`;

export const TeamPayTitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    display: flex;
    align-items: center;
  }
`;

export const TeamPayTitleWrapTablet = styled(TeamPayTitleWrap)`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    display: flex;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    display: none;
  }
`;

export const TeamPayTitle = styled.h3`
  font-size: clamp(2.625rem, 3.704vw + 0.847rem, 3.625rem);
  font-weight: 700;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.secondary};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    text-align: center;
  }
`;
