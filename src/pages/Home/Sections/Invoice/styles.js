import { styled } from 'styled-components';

export const SectionInvoice = styled.section`
  overflow: hidden;

  .invoice__container {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: end;
  }
`;

export const Content = styled.div`
  padding: clamp(2.188rem, 8.644vw - 0.406rem, 6.25rem) 0px 0 0;
  display: flex;
  flex-direction: column;
  gap: clamp(36px, 0.926vw + 28.896px, 40px);
  max-width: clamp(28.75rem, 51.724vw + 3.922rem, 43.75rem);

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    padding: 30px 0 0 0;
    max-width: clamp(14.375rem, 44.379vw + 2.448rem, 23.75rem);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    max-width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.smallMobile}) {
    gap: 20px;
  }
`;

export const InvoiceImageWrapper = styled.div`
  --width-img: clamp(16.625rem, 31.034vw + 1.728rem, 25.625rem);
  --height-img: clamp(420px, 51.724vw + 22.752px, 660px);
  --width-img-tablet: clamp(120px, 50.694vw - 123.328px, 266px);
  --height-img-tablet: clamp(330px, 30.556vw + 183.328px, 418px);
  --width-img-mobile: clamp(120px, 51.875vw - 46px, 203.008px);
  --height-img-mobile: clamp(194px, 85vw - 78px, 330px);

  width: var(--width-img);
  height: var(--height-img);

  div {
    position: relative;
    width: 100%;
    min-height: 100%;
  }

  ${({ $mobile }) =>
    $mobile &&
    ` 
	 	display: none;
	`};

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: var(--width-img);
    height: var(--height-img);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    display: none;

    ${({ $mobile }) =>
      $mobile &&
      ` 
	 		display: block;
				width:var(--width-img-mobile);
				height: var(--height-img-mobile);
		`}
  }
`;

export const ImgFox = styled.img`
  position: absolute;
  top: -10%;
  right: 0;
  z-index: -1;
  object-fit: contain;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    top: -26%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    top: -20%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.smallMobile}) {
    top: -10%;
  }
  @media (max-width: 330px) {
    top: 20%;
  }
`;

export const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(1.25rem, 3.611vw + 0.167rem, 2.875rem);

  h2 {
    text-align: left;
    width: max-content;
    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
      padding: 10px 15px;
      font-size: clamp(0.813rem, 1.688vw + 0.359rem, 1.625rem);
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
      font-size: 13px;
    }
  }
`;

export const Title = styled.h1`
  display: block;
  font-size: clamp(1.75rem, 3.659vw + 0.881rem, 3.625rem);
  font-style: normal;
  font-weight: 700;
  line-height: clamp(2.375rem, 3.117vw + 1.537rem, 3.875rem);
`;

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(2.188rem, 5.195vw + 0.791rem, 4.688rem);
  padding-bottom: clamp(40px, 1.33vw + 33.616px, 50px);

  button {
    @media (max-width: ${({ theme }) => theme.breakpoint.smallMobile}) {
      /* white-space: normal; */
      width: min-content;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    align-items: center;
    max-width: clamp(12.25rem, 87.574vw - 11.286rem, 30.75rem);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    max-width: 196px;
    flex-direction: column-reverse;
  }
`;

export const BottomWrapper = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }
`;

export const AdvantagesWrap = styled.div`
  display: flex;
  gap: clamp(20px, 10.185vw - 58.224px, 64px);

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const Advantage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    flex-direction: row;
    gap: 2px;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    flex-direction: column;
  }
`;

export const Number = styled.div`
  font-size: clamp(1.5rem, 1.299vw + 1.151rem, 2.125rem);
  font-weight: 700;
`;

export const Description = styled.span`
  font-size: clamp(0.875rem, 0.779vw + 0.666rem, 1.25rem);
  font-weight: 400;
  color: #76889a;
`;
