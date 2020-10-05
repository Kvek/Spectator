const headlineData = {
  headlines: []
};

const headlineReducer = (state = headlineData, action) => {
  switch (action.type) {
    case 'SET_HEADLINE_DATA':
      return { ...state, headlines: action.payload };
    default:
      return state;
  }
};

export default headlineReducer;
