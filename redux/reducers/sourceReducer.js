const sourceData = {
  sourceList: [],
  languages: [],
  categories: [],
  countries: []
};

const sourceReducer = (state = sourceData, action) => {
  switch (action.type) {
    case 'SET_SOURCE_DATA':
      return { ...state, sourceList: action.payload };
    case 'SET_LANGUAGE_DATA':
      return { ...state, languages: action.payload };
    case 'SET_CATEGORY_DATA':
      return { ...state, categories: action.payload };
    case 'SET_COUNTRY_DATA':
      return { ...state, countries: action.payload };
    default:
      return state;
  }
};

export default sourceReducer;
