import React from 'react';
import PropTypes from 'prop-types';
import { styled } from 'styled-components';

const StyledContainer = styled.div`
  width: 100%;
  max-width: ${({ theme }) =>
    `calc(${theme.constant.containerWidth} + ${theme.constant.containerPaddingX} * 2)`};
  margin-inline: auto;
  padding-inline: ${({ theme }) => theme.constant.containerPaddingX};
`;

const Container = React.forwardRef(({ children, ...rest }, ref) => {
  return (
    <StyledContainer ref={ref} {...rest}>
      {children}
    </StyledContainer>
  );
});

Container.displayName = 'Container';

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
