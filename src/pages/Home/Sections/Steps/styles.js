import { styled } from 'styled-components';

export const SectionSteps = styled.section`
  background: ${({ theme }) => theme.colors.lightGrey};

  .steps__container {
    display: flex;
    flex-direction: column;
    gap: clamp(2.813rem, 3.506vw + 1.87rem, 4.5rem);
    align-items: center;
    padding-top: 64px;
    padding-bottom: 80px;
  }
`;

export const StepsContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  gap: clamp(0.875rem, 21.065vw - 9.236rem, 6.563rem);

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
  }
`;

export const StepsItem = styled.article``;

export const StepsNumber = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const StepsTitle = styled.div`
  position: relative;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 24px;
  width: 100%;

  &:after {
    content: '';
    display: block;
    position: absolute;
    bottom: -12px;
    left: 0;
    width: 100%;
    height: 1px;
    border-bottom: 1px dashed #76889a;
  }

  &:before {
    content: '';
    display: block;
    position: absolute;
    bottom: -13px;
    left: 0;
    height: 3px;
    background: ${({ theme }) => theme.colors.secondary};
    border-radius: 4px;
  }

  ${({ $startStep }) =>
    $startStep &&
    ` &:before {
			width:35%;
	 }
	`};

  ${({ $centerStep }) =>
    $centerStep &&
    ` &:before {
			width:65%;
	 }
	`};

  ${({ $finishStep }) =>
    $finishStep &&
    ` &:before {
			width:100%;
	 }
	`};
`;

export const StepsDescription = styled.span`
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
`;
