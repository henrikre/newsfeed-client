// Set up your root reducer here...
import { combineReducers } from 'redux';
import numAjaxCalls from './ajaxCallReducer';
import articles from './articleReducer';

const rootReducer = combineReducers({
  articles,
  numAjaxCalls
});

export default rootReducer;
