import {SIGN_IN,ON_LOGOUT,SIGN_IN_CLEAR} from '../actionTypes';
export function signIn(data) {
  return {
    type: SIGN_IN,
    payload: data,
  };
}

export function onLogOut() {
  return {
      type: ON_LOGOUT,
  };
}

export function clear() {
  return {
      type: SIGN_IN_CLEAR,
  };
}