import { styled } from 'styled-components';

const additionalBreakpoint = '700px';

export const SectionAdvantageCards = styled.section`
  display: flex;
  justify-content: center;
  height: 100vh;
  overflow: hidden;

  .advantage-cards__container {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 60px;
    padding-top: clamp(60px, 2.273vw + 52.72px, 80px);
    padding-bottom: clamp(60px, 2.273vw + 52.72px, 80px);
    height: 100%;
  }

  @media (max-width: 1024px) {
    height: auto;
  }
`;

export const AdvantageCardBg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: clamp(0px, 5.093vw - 39.104px, 22px);
  background-color: ${({ theme }) => theme.colors.secondary};
  min-width: clamp(64rem, 100vw + 0rem, 75rem);
  width: min-content;
  margin-inline: auto;

  @media (max-width: 1024px) {
    min-width: 100%;
    align-items: center;
  }
`;

export const AdvantageCardWrap = styled.div`
  display: flex;
  justify-content: space-between;
  gap: clamp(16px, 5.093vw - 23.104px, 38px);
  padding: 16px clamp(1rem, 24.138vw - 10.586rem, 8rem);
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    position: relative;
  }

  @media (max-width: ${additionalBreakpoint}) {
    width: 100%;
    flex-direction: column;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    padding: 16px 0;
  }
`;

export const AdvantageCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 290px;
  padding: clamp(24px, 1.852vw + 9.776px, 32px);
  align-items: center;
  gap: clamp(1.25rem, 1.596vw + 0.771rem, 2rem);
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.defaultWhite};
  color: ${({ theme }) => theme.colors.defaultWhite};
  text-align: center;

  @media (max-width: ${additionalBreakpoint}) {
    flex-direction: row;
    justify-content: center;
    gap: 28px;
    width: auto;
    max-width: 100%;
    padding: 22px;
  }
`;

export const AdvantageIcon = styled.img`
  max-width: clamp(2.5rem, 3.241vw + 0.944rem, 3.375rem);

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    display: none;
  }
`;

export const AdvantageText = styled.div`
  font-size: clamp(2.25rem, 1.023vw + 2.045rem, 2.813rem);
  font-weight: 700;
`;

export const AdvantageDesc = styled.span`
  font-size: clamp(18px, 1.389vw + 7.328px, 24px);
  font-weight: 400;
  width: max-content;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 22px;
    font-weight: 400;
    line-height: 1;
    width: min-content;
  }
`;

export const TextBottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: end;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.defaultWhite};
  padding: 0 16px;

  div {
    max-width: 300px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
      max-width: 100%;
      text-align: center;
    }
  }
`;
