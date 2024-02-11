import { styled } from 'styled-components';

export const SectionLearning = styled.section`
  .learning__container {
    display: flex;
    flex-direction: column;
    gap: clamp(48px, 3.068vw + 38.176px, 75.008px);
    align-items: center;
    padding-top: clamp(3.75rem, 2.273vw + 3.295rem, 5rem);
    padding-bottom: clamp(3.75rem, 2.273vw + 3.295rem, 5rem);
  }
`;

export const LearningContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 980px) {
    flex-direction: column-reverse;
    gap: 64px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    flex-direction: column-reverse;
    gap: 64px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    flex-direction: column;
    gap: 56px;
  }
`;

export const LearningTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 570px;

  @media (max-width: 980px) {
    max-width: 100%;
    gap: 32px;
  }
`;

export const LearningItem = styled.div`
  display: flex;
  gap: 10px;
`;

export const LearningItemIcon = styled.img``;

export const LearningItemText = styled.span`
  font-size: clamp(18px, 3.636vw + 6.368px, 22px);
  font-weight: 400;
  line-height: 26px;
`;

export const LearningImageWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-height: clamp(17.25rem, 23.333vw + 11.708rem, 26rem);

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    align-items: center;
    width: 100%;
    overflow: hidden;
  }

  div:nth-child(1),
  div:nth-child(3) {
    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
      margin: 0 auto 0 0;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
      margin: 0;
    }
  }

  div:nth-child(1) {
    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
      order: 2;
      margin: 0 auto;
    }
  }
  div:nth-child(2) {
    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
      order: 3;
      margin: 0 0 0 auto;
    }
  }
  div:nth-child(3) {
    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
      order: 1;
    }
  }
`;

export const LearningImageScreen1 = styled.img`
  max-width: clamp(300px, 20.455vw + 234.544px, 480px);
  margin-right: 38px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    margin-left: clamp(0px, 12.054vw - 38.576px, 54px);
    margin-right: auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin-top: -14px;
    margin-left: 0;
    order: 2;
  }
`;

export const LearningImageScreen2 = styled.img`
  max-width: clamp(240px, 17.857vw + 182.864px, 320px);
  margin-top: 0px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    margin-right: clamp(0px, 15.976vw - 68.704px, 54px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    order: 3;
  }
`;

export const LearningImageScreen3 = styled.img`
  max-width: clamp(280px, 35.556vw + 173.328px, 600px);
  margin-top: 0px;
  margin-right: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    margin-inline: auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    order: 1;
    margin-top: 0;
    margin-right: 0;
  }
`;
