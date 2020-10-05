import { ThemeProvider } from 'emotion-theming';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { saveState } from 'utility';

import PropTypes from 'prop-types';
import theme from 'theme';

import styled from '@emotion/styled';
import Banner from '@components/Banner';
import BookmarkSidebar from '@components/BookmarkSidebar';

const ComponentWrapper = styled.div`
  padding-top: 80px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  @media (min-width: ${(props) => props.theme.breakPoints.desktop}) {
    padding-top: 240px;
  }
`;

// updating localstorage on redux store change
store.subscribe(() => {
  saveState(store.getState());
});

const MyApp = ({ Component, pageProps }) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Banner />
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
