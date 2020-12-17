/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { HomePage } from './containers/HomePage/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import { Container } from 'react-bootstrap';
import { MyNavBar } from './components/MyNavBar';

export function App() {
  const { i18n } = useTranslation();
  return (
    <>
      <MyNavBar />
      <br />
      <Container>
        <BrowserRouter>
          <Helmet
            titleTemplate="%s - React Boilerplate"
            defaultTitle="React Boilerplate"
            htmlAttributes={{ lang: i18n.language }}
          >
            <meta
              name="description"
              content="A React Boilerplate application"
            />
          </Helmet>

          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route component={NotFoundPage} />
          </Switch>
          <GlobalStyle />
        </BrowserRouter>
      </Container>
    </>
  );
}
