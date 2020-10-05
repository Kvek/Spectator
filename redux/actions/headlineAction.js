import { bindActionCreators } from 'redux';
import { store } from 'redux/store';

export const updateHeadline = (payload) => ({
  type: 'SET_HEADLINE_DATA',
  payload
});

export const headlineAction = bindActionCreators(
  {
    updateHeadline
  },
  store.dispatch
);
