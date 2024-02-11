import { styled } from 'styled-components';

export const SectionFaq = styled.section`
  .faq__container {
    display: flex;
    flex-direction: column;
    gap: clamp(2.125rem, 3.333vw + 1.125rem, 3.625rem);
    align-items: center;
    padding-top: clamp(3.125rem, 5.833vw + 1.375rem, 5.75rem);
    padding-bottom: 80px;
  }
`;

export const FaqContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
export const FaqItem = styled.div``;

export const FaqTitle = styled.div`
  display: flex;
  gap: 52px;
  align-items: center;
  min-height: clamp(2.813rem, 4.306vw + 1.521rem, 4.75rem);
  padding: 10px clamp(0rem, 4.444vw - 1.333rem, 2rem);
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    gap: 15px;
  }
`;

export const FaqIcon = styled.img`
  width: clamp(1.125rem, 4.167vw - 0.125rem, 1.875rem);
`;

export const FaqText = styled.div`
  font-size: clamp(1.125rem, 1.389vw + 0.708rem, 1.375rem);
  font-weight: 700;
`;

export const FaqDesc = styled.div`
  font-size: 18px;
  line-height: 26px;
  padding: 0px 0px 0px 114px;
  overflow: hidden;
  height: 0px;
  transition: all 0.5s ease-out;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    padding: 0px;
  }

  ${({ $show, theme }) =>
    $show &&
    ` 
	   height: auto;
		padding: 16px 0px 16px 114px;
		

		@media (max-width: ${theme.breakpoint.tablet}) {
   	 	padding: 16px 0px 16px 0px;
 		 }
	`};
`;
