import initialState from './initialState';
import * as types from '../constants/actionTypes';

export default function(state = initialState.articles, action) {
  switch (action.type) {
    case types.LOAD_ARTICLES_SUCCESS:
      return [...state, ...action.articles];
    case types.POST_TITLE_SUCCESS:
    case types.VOTE_TITLE_SUCCESS:
      const i = state.findIndex(article => article._id === action.article._id);
      return [
        ...state.slice(0, i),
        Object.assign({}, state[i], action.article),
        ...state.slice(i + 1)
      ];
    default:
      return state;
  }
}
