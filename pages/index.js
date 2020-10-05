import { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { sourcesAction } from 'redux/actions/sourcesAction';
import { getCountryName } from 'utility';
import { headlineAction } from 'redux/actions/headlineAction';

import PropTypes from 'prop-types';

import styled from '@emotion/styled';
import BookmarkTile from '@components/BookmarkTile';
import Tile from '@components/Tile';

const MainContainer = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 80px);
  overflow: hidden;

  @media (min-width: ${(props) => props.theme.breakPoints.desktop}) {
    height: calc(100vh - 210px);
  }
`;

const ArticleContainer = styled.div`
  display: grid;
  width: calc(100% - 16px);
  grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
  justify-items: center;
  grid-gap: 15px;
  height: 100%;
  overflow: auto;
  margin: 8px;
  scrollbar-width: 0;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.desktop}) {
    min-width: calc(75% - 300px);
    width: 75%;
    margin: 0;
  }
`;

const BookmarkListContainer = styled.div`
  display: none;
  scrollbar-width: 0;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.desktop}) {
    display: flex;
    flex-direction: column;
    width: 25%;
    right: 0;
    min-height: 100%;
    min-width: 300px;
    margin-left: 10px;
    height: 100%;
    border-left: 1px solid rgba(38, 34, 34, 0.15);
    bottom: 0;
    overflow: auto;
  }
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const BookmarkHeader = styled.div`
  position: sticky;
  top: 0;
  color: ${(props) => props.theme.colors.app_default};
  background: ${(props) => props.theme.colors.white};
  padding-left: 15px;
  z-index: 1;

  hr {
    margin: none;
  }

  .seperator {
    border: none;
    border-bottom: 1px solid rgba(211, 13, 29, 0.7);

    &.main {
      border-bottom: 2px solid ${(props) => props.theme.colors.app_default};
    }

    &.end {
      border-color: rgba(211, 13, 29, 0.2);
    }
  }

  h3 {
    font-family: goudy-old-style;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    margin-bottom: 10px;
    padding: 0 15px;
  }

  span {
    color: rgba(38, 34, 34, 0.6);
    font-family: SFProDisplay;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: normal;
    margin-bottom: 30px;
    display: block;
    padding: 0 15px;
  }
`;

const Home = ({
  headlines,
  countriesData,
  updateCountryList,
  updateLanguageList,
  updateCategoryList,
  updateSourceList,
  updateHeadline,
  bookmarks
}) => {
  const getfilteredList = (filter, data) => {
    const dataSet = [];

    data?.forEach((category) => {
      dataSet.push(category?.[filter]);
    });

    return [...new Set(dataSet)];
  };

  const setCountryList = (data) => {
    const countryObj = [];

    getfilteredList('country', data)?.forEach((country) =>
      countryObj.push(getCountryName(country?.toString().toUpperCase()))
    );

    updateCountryList(countryObj.filter((country) => country !== null));
  };

  useEffect(() => {
    setCountryList(countriesData);
    updateLanguageList(getfilteredList('language', countriesData));
    updateCategoryList(getfilteredList('category', countriesData));
    updateSourceList(countriesData);
    updateHeadline(headlines);
  }, [countriesData]);

  const isPreviouslyBookmarked = (currentBookmark) =>
    bookmarks?.filter((bookmark) => bookmark?.title === currentBookmark?.title)
      .length > 0;

  if (!headlines) return null;

  return (
    <MainContainer>
      <ArticleContainer>
        {headlines?.map((headline) => (
          <Fragment key={headline?.title}>
            <Tile
              bookmark={headline}
              isBookmarked={isPreviouslyBookmarked(headline)}
            />
          </Fragment>
        ))}
      </ArticleContainer>
      <BookmarkListContainer>
        <BookmarkHeader>
          <hr className='seperator main' />
          <hr className='seperator' />
          <hr className='seperator end' />
          <h3>Your Bookmarks</h3>
          <span>Articles you bookmark will be added to the list.</span>
        </BookmarkHeader>
        <ListContainer>
          {bookmarks?.map((bookmark) => (
            <Fragment key={bookmark?.title}>
              <BookmarkTile bookmark={bookmark} />
            </Fragment>
          ))}
        </ListContainer>
      </BookmarkListContainer>
    </MainContainer>
  );
};

Home.getInitialProps = async () => {
  const headlines = await fetch(
    'https://newsapi.org/v2/top-headlines?country=us&apiKey=3a4277082eb247ebbd868f4afb2f2f0b'
  );

  const res = await fetch(
    'https://newsapi.org/v2/sources?apiKey=3a4277082eb247ebbd868f4afb2f2f0b'
  );

  const sourcesData = await res.json();
  const headlinesData = await headlines.json();
  return {
    countriesData: sourcesData.sources,
    headlines: headlinesData?.articles
  };
};

const mapDispatchToProps = () => ({
  updateCountryList: (data) => sourcesAction?.setCountryList(data),
  updateLanguageList: (data) => sourcesAction?.setLanguageList(data),
  updateCategoryList: (data) => sourcesAction?.setCategoryList(data),
  updateSourceList: (data) => sourcesAction?.setSourceList(data),
  updateHeadline: (data) => headlineAction?.updateHeadline(data)
});

const mapStateToProps = (state) => ({
  bookmarks: state?.bookmark?.bookmarks
});

Home.propTypes = {
  countriesData: PropTypes.array.isRequired,
  headlines: PropTypes.array.isRequired,
  updateCountryList: PropTypes.func.isRequired,
  updateLanguageList: PropTypes.func.isRequired,
  updateCategoryList: PropTypes.func.isRequired,
  updateSourceList: PropTypes.func.isRequired,
  updateHeadline: PropTypes.func.isRequired,
  bookmarks: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
