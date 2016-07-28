import initialState from './initialState';
import * as types from '../constants/actionTypes';

function isActionTypeSuccess(actionType) {
  var actionTypeEnding = actionType.split('_');
  actionTypeEnding = actionTypeEnding[actionTypeEnding.length - 1];
  return (actionTypeEnding === 'SUCCESS') ? actionType : null;
}

export default function(state = initialState.numAjaxCalls, action) {
  switch (action.type) {
    case types.AJAX_CALL_BEGIN:
      return state + 1;
    case types.AJAX_CALL_ERROR:
    case isActionTypeSuccess(action.type):
      return state - 1;
    default:
      return state;
  }
}
