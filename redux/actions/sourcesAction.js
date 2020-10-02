import { bindActionCreators } from 'redux';
import { store } from 'redux/store';

export const setSourceList = (payload) => ({
  type: 'SET_SOURCE_DATA',
  payload
});

export const setLanguageList = (payload) => ({
  type: 'SET_LANGUAGE_DATA',
  payload
});

export const setCategoryList = (payload) => ({
  type: 'SET_CATEGORY_DATA',
  payload
});

export const setCountryList = (payload) => ({
  type: 'SET_COUNTRY_DATA',
  payload
});

export const sourcesAction = bindActionCreators(
  {
    setSourceList,
    setLanguageList,
    setCategoryList,
    setCountryList
  },
  store.dispatch
);
