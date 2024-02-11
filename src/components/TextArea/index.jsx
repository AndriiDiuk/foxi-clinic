import React from 'react';
import ErrorMessage from 'components/ErrorMessage';
import PropTypes from 'prop-types';
import { styled } from 'styled-components';

const TextareaWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const StyledTextarea = styled.textarea.withConfig({
  shouldForwardProp: (prop) => !['error'].includes(prop),
})`
  width: 100%;
  resize: none;
  min-height: 156px;
  padding: 15px 21px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
`;

const Textarea = React.forwardRef((props, ref) => {
  return (
    <TextareaWrapper>
      <StyledTextarea ref={ref} {...props} />
      <ErrorMessage error={props.error} />
    </TextareaWrapper>
  );
});

Textarea.displayName = 'Textarea';

Textarea.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.string,
};

export default Textarea;
