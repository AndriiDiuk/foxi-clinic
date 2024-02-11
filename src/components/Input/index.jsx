import React from 'react';
import ErrorMessage from 'components/ErrorMessage';
import PropTypes from 'prop-types';
import { styled } from 'styled-components';

const InputWrapper = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 100%;
  }
`;

const StyledInput = styled.input.withConfig({
  shouldForwardProp: (prop) => !['error'].includes(prop),
})`
  display: flex;
  padding: 15px 21px;
  align-items: center;
  gap: 10px;
  flex: 1 0 0;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
  min-width: clamp(280px, 6vw + 260.8px, 304px);
  width: 100%;
  background: ${({ theme }) => theme.colors.defaultWhite};
`;

const Input = React.forwardRef((props, ref) => {
  return (
    <InputWrapper>
      <StyledInput ref={ref} {...props} />
      <ErrorMessage error={props.error} />
    </InputWrapper>
  );
});

Input.displayName = 'Input';

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.string,
};

export default Input;
