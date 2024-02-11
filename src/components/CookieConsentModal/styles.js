import { styled } from 'styled-components';

export const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(19, 41, 61, 0.8);
  z-index: 10;
  display: ${({ $isVisible }) => ($isVisible ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  max-width: clamp(17.5rem, 109.091vw - 4.318rem, 25rem);
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.defaultWhite};
  padding-bottom: 28px;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 160%;
  color: ${({ theme }) => theme.colors.defaultWhite};
  border-radius: 8px;
  padding: 10px 16px;
  width: 100%;
  height: 49px;
  text-align: center;
  background: ${({ theme }) => theme.colors.secondary};
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-inline: 8px;
  font-size: clamp(0.875rem, 1.818vw + 0.511rem, 1rem);
`;

export const Text = styled.p`
  text-align: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(1.5rem, 45.455vw - 7.591rem, 4.625rem);

  button {
    width: 104px;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    letter-spacing: 0px;

    &:nth-child(1) {
      border: 1px solid #ebf0f5;

      &:hover,
      &:visited {
        opacity: 80%;
        border: 1px solid ${({ theme }) => theme.colors.secondary};
      }
    }

    &:nth-child(2) {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
    }
  }
`;
