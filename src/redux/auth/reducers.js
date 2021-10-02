import {SIGN_IN,SIGN_IN_FAILURE,SIGN_IN_SUCCESS,ON_LOGOUT, SIGN_IN_CLEAR} from '../actionTypes';
const INIT_STATE = {
  loading: false,
  error: null,
  data:[],
  signInSuccess: false,
  signUpSuccess: false,
};
const auth = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ON_LOGOUT:
      return {};
    case SIGN_IN:
      return {...state, loading: true,signInSuccess:false,loading:true,error: null};
    case SIGN_IN_SUCCESS:
      return {...state, loading: false, data: action.payload.data,signInSuccess:true,loading:false};
    case SIGN_IN_FAILURE:
      return {...state, loading: false,signInSuccess:false,loading:false,error: action.payload.data};
      case SIGN_IN_CLEAR:
        return {...state, loading: false,data:null,signInSuccess:false,loading:false};
    default:
      return {...state};
  }
};
export default auth;
