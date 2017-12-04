// @flow

import { combineReducers } from 'redux';

function step1Loading(state: boolean = false, action): boolean {
  switch (action.type) {
    case 'SIGNUP_STEP_1_FAILED':
    case 'SIGNUP_STEP_1_SUCCESS':
      return false;
    case 'SIGNUP_STEP_1':
      return true;
    default:
      return state;
  }
}

function step1Error(state: string = '', action): string {
  switch (action.type) {
    case 'SIGNUP_STEP_1_FAILED':
      return action.message;
    case 'SIGNUP_STEP_1_SUCCESS':
      return '';
    default:
      return state;
  }
}

export default combineReducers({
  step1Loading,
  step1Error,
});
