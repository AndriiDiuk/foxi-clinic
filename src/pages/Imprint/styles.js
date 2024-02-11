import { styled } from 'styled-components';

export const ContentWrapper = styled.section`
  padding: 70px 0;

  .imprint__container {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
`;

export const TitlePage = styled.h5`
  font-size: 32px;
  font-weight: 700;
  line-height: 1.1;
  /* text-align: center; */
`;
export const Title = styled.h5`
  font-size: clamp(1.25rem, 1.339vw + 0.982rem, 1.625rem);
  font-weight: 700;
`;

export const BlockInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Text = styled.p`
  font-size: clamp(0.938rem, 0.67vw + 0.804rem, 1.125rem);
  line-height: 1.4;

  a {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.secondary};
    transition: opacity ${({ theme }) => theme.colors.transition};
  }

  a:hover {
    opacity: 80%;
  }

  a:active,
  a:visited {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
