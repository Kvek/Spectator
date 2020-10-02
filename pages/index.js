import { useEffect } from 'react';
import { connect } from 'react-redux';
import { sourcesAction } from 'redux/actions/sourcesAction';

import PropTypes from 'prop-types';
import getCountryName from 'utility';

import styled from '@emotion/styled';

const MainContainer = styled.div`
  display: flex;
  position: relative;
  max-width: 1200px;
  width: 100%;
`;

const ArticleContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
  justify-items: center;
  grid-gap: 15px;

  @media (min-width: ${(props) => props.theme.breakPoints.desktop}) {
    min-width: calc(75% - 300px);
    width: 100%;
  }
`;

const BookmarkListContainer = styled.div`
  display: none;

  @media (min-width: ${(props) => props.theme.breakPoints.desktop}) {
    display: flex;
    position: relative;
    width: 25%;
    max-height: 100%;
    min-width: 300px;
    margin-left: 10px;
    height: 100%;
    border-left: 1px solid rgba(38, 34, 34, 0.15);
  }
`;

const ListContianer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Home = ({
  countriesData,
  updateCountryList,
  updateLanguageList,
  updateCategoryList,
  updateSourceList
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

    updateCountryList(countryObj.filter((el) => el !== null));
  };

  useEffect(() => {
    setCountryList(countriesData);
    updateLanguageList(getfilteredList('language', countriesData));
    updateCategoryList(getfilteredList('category', countriesData));
    updateSourceList(countriesData);
  }, [countriesData]);

  return (
    <MainContainer>
      <ArticleContainer />
      <BookmarkListContainer>
        <ListContianer />
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
  return { countriesData: sourcesData.sources, headlines: headlinesData };
};

const mapDispatchToProps = () => ({
  updateCountryList: (status) => sourcesAction?.setCountryList(status),
  updateLanguageList: (status) => sourcesAction?.setLanguageList(status),
  updateCategoryList: (status) => sourcesAction?.setCategoryList(status),
  updateSourceList: (status) => sourcesAction?.setSourceList(status)
});

Home.propTypes = {
  countriesData: PropTypes.array.isRequired,
  updateCountryList: PropTypes.func.isRequired,
  updateLanguageList: PropTypes.func.isRequired,
  updateCategoryList: PropTypes.func.isRequired,
  updateSourceList: PropTypes.func.isRequired
};

export default connect(mapDispatchToProps)(Home);
