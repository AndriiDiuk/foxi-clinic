import React from 'react';
import PropTypes from 'prop-types';
import { styled } from 'styled-components';

const StyledButton = styled.button`
  display: flex;
  padding: clamp(0.5rem, 1.064vw + 0.181rem, 1rem)
    clamp(1.125rem, 2.527vw + 0.367rem, 2.313rem);
  justify-content: center;
  align-items: center;
  font-size: clamp(0.563rem, 1.25vw + 0.188rem, 1.125rem);
  font-weight: 700;
  letter-spacing: 2.07px;
  line-height: 160%;
  text-transform: uppercase;
  border-radius: clamp(16px, 0.833vw + 12px, 22px);
  white-space: nowrap;
  width: max-content;
  height: 100%;
  max-height: 61px;
  min-height: 45px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.defaultWhite};
  transition: all ${({ theme }) => theme.constant.transition};

  ${({ $blue, theme }) =>
    $blue &&
    ` 
		background-color: ${theme.colors.secondary};	
		color: ${theme.colors.defaultWhite};
	`};

  ${({ $onlyBorder, theme }) =>
    $onlyBorder &&
    ` 
	 	display: flex;
	 	align-items:center;
		justify-content: center;
	 	font-size: 14px;
	   border-radius: 8px;
		background: transparent;
		border: 1px solid ${theme.colors.secondary};
		color: ${theme.colors.defaultText};
		min-width: 110px;
		max-height:32px;
		min-height:32px;
		background: rgba(255, 255, 255, 0.50);
		text-transform: none;
		
		&:hover,&:active{
			background:#d7e7f6;
		}
	`};

  &:hover,
  &:visited {
    opacity: 80%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.smallMobile}) {
    font-size: 9px;
    white-space: normal;
  }
`;

const Button = ({ children, orange, darkText, blue, onlyBorder, ...rest }) => {
  return (
    <StyledButton
      $orange={orange}
      $darkText={darkText}
      $blue={blue}
      $onlyBorder={onlyBorder}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  orange: PropTypes.bool,
  darkText: PropTypes.bool,
  blue: PropTypes.bool,
  onlyBorder: PropTypes.bool,
};

export default Button;
