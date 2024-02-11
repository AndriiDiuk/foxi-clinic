import React from 'react';
import propTypes from 'prop-types';
import { styled } from 'styled-components';

import Footer from '../Footer';
import Header from '../Header';

const PageWrapper = styled.div`
  min-height: 100vh;
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  color: ${({ theme }) => theme.colors.defaultText};
`;

const Page = ({ children }) => {
  return (
    <PageWrapper>
      <Header />
      <main>{children}</main>
      <Footer />
    </PageWrapper>
  );
};

Page.propTypes = {
  children: propTypes.node.isRequired,
};

export default Page;
