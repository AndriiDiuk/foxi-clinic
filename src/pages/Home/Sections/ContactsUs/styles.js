import { styled } from 'styled-components';

export const SectionContactsUs = styled.section`
  background: ${({ theme }) => theme.colors.defaultText};
  color: ${({ theme }) => theme.colors.defaultWhite};

  .contacts-us__container {
    display: flex;
    flex-direction: column;
    gap: clamp(2.75rem, 3.289vw + 2.092rem, 4.625rem);
    align-items: center;
    padding-top: 44px;
    padding-bottom: 24px;

    > div:nth-child(1) {
      > div:nth-child(2) {
        display: none;
      }
    }
  }
`;

export const Tittle = styled.h2`
  text-align: center;
  font-size: clamp(1.125rem, 0.909vw + 0.943rem, 1.625rem);
  font-weight: 400;
`;

export const ContactsUsContent = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 29px;
  width: clamp(280px, 99.5vw - 38.4px, 678px);
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 29px;
  flex-wrap: wrap;
`;

export const Textarea = styled.textarea`
  resize: none;
  min-height: 156px;
  padding: 15px 21px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    font-size: clamp(0.938rem, 1.5vw + 0.637rem, 1.313rem);
    line-height: 21px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const SuccessMessage = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  font-size: clamp(0.938rem, 1.5vw + 0.637rem, 1.313rem);
  line-height: 26px;
`;
