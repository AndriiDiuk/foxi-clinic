import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useRouteError } from 'react-router-dom';
import Container from 'components/Container';
import Page from 'components/Page';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Page>
      <Helmet>
        <title>Page not found</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Container>
        <div id="error-page">
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <p>
            <i>{error.statusText || error.message}</i>
          </p>
        </div>
      </Container>
    </Page>
  );
}
