import { ThemeProvider } from 'emotion-theming';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

import PropTypes from 'prop-types';
import theme from 'theme';
import Head from 'next/head';

import styled from '@emotion/styled';
import Banner from '@components/Banner';
import BookmarkSidebar from '@components/BookmarkSidebar';
import NavSidebar from '@components/NavSidebar';

const ComponentWrapper = styled.div`
  padding-top: 80px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  @media (min-width: ${(props) => props.theme.breakPoints.desktop}) {
    padding-top: 210px;
  }
`;

const MyApp = ({ Component, pageProps }) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Head>
        <link rel='stylesheet' href='https://use.typekit.net/xkz5olp.css' />
      </Head>
      <Banner />
      <NavSidebar />
      <ComponentWrapper>
        <Component {...pageProps} />
      </ComponentWrapper>
      <BookmarkSidebar />
    </ThemeProvider>
  </Provider>
);

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired
};

export default MyApp;
