import React from 'react';
import AnimatedMoveTitle from 'components/Animation/AnimatedMoveTitle';
import PropTypes from 'prop-types';
import { styled } from 'styled-components';

const StyledTitle = styled.h2`
  width: auto;
  text-align: center;
  font-size: clamp(1.125rem, 0.909vw + 0.943rem, 1.625rem);
  font-weight: 400;
  padding: clamp(0.625rem, 3.636vw - 0.102rem, 0.875rem)
    clamp(1rem, 3.636vw + 0.273rem, 1.25rem);
  border-radius: 33px;
  ${({ $defaultTitle, theme }) =>
    $defaultTitle &&
    ` 
		color:${theme.colors.defaultWhite};
		background: none;
	`};
`;

const SectionTitle = ({ children, defaultTitle, ...rest }) => {
  return (
    <AnimatedMoveTitle defaultTitle={defaultTitle}>
      <StyledTitle $defaultTitle={defaultTitle} {...rest}>
        {children}
      </StyledTitle>
    </AnimatedMoveTitle>
  );
};

SectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
  defaultTitle: PropTypes.bool,
};

export default SectionTitle;
