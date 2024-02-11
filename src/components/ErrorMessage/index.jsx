import React from 'react';
import PropTypes from 'prop-types';
import { styled } from 'styled-components';

const Error = styled.div`
  color: red;
  font-size: 0.75rem;
  margin-top: 0.25rem;
`;

const ErrorMessage = ({ error }) => {
  return <Error>{error}</Error>;
};

ErrorMessage.propTypes = {
  error: PropTypes.string,
};

export default ErrorMessage;
