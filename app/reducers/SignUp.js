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
    case '@@redux-form/DESTROY':
    case 'UPDATE_HEADER':
      return '';
    default:
      return state;
  }
}

function step1Continue(state: boolean = false, action): boolean {
  switch (action.type) {
    case 'UPDATE_HEADER':
      return false;
    case 'SIGNUP_STEP_1_SUCCESS':
      return true;
    default:
      return state;
  }
}

function step2Loading(state: boolean = false, action): boolean {
  switch (action.type) {
    case 'SIGNUP_STEP_2_FAILED':
    case 'SIGNUP_STEP_2_SUCCESS':
      return false;
    case 'SIGNUP_STEP_2':
      return true;
    default:
      return state;
  }
}

function step2Error(state: string = '', action): string {
  switch (action.type) {
    case 'SIGNUP_STEP_2_FAILED':
      return action.message;
    case 'SIGNUP_STEP_2_SUCCESS':
    case '@@redux-form/DESTROY':
    case 'UPDATE_HEADER':
      return '';
    default:
      return state;
  }
}

function data(state: {} = {}, action): {} {
  switch (action.type) {
    case 'FACEBOOK_LOGIN':
      return {
        ...state,
        email: action.email,
        fullName: action.name,
        facebookId: action.id,
      };
    case 'SIGNUP_STEP_1':
      return {
        ...state,
        email: action.email,
        password: action.password,
      };
    case 'SIGNUP_STEP_2':
      return {
        ...state,
        username: action.username,
        fullName: action.fullName,
      };
    default:
      return state;
  }
}

export default combineReducers({
  step1Loading,
  step1Error,
  step1Continue,
  step2Loading,
  step2Error,
  data,
});
