import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import propTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import theme from '../theme';
const Providers = ({ children }) => {
  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </HelmetProvider>
  );
};

Providers.propTypes = {
  children: propTypes.node.isRequired,
};

export default Providers;
