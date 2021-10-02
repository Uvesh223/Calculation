import { GET_DATA, GET_DATA_FAILURE, GET_DATA_SUCCESS, GET_DATA_CLEAR,
  DELETE_DATA, DELETE_DATA_FAILURE, DELETE_DATA_SUCCESS, } from '../actionTypes';
const INIT_STATE = {
  data: [],
  loading: false,
  error: null,
};
const dashboard = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_DATA:
      return { ...state, loading: true };
    case GET_DATA_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
    case GET_DATA_FAILURE:
      return { ...state, loading: false, error: action.payload.data };
      case GET_DATA_CLEAR:
        return { ...state, loading: false, data:[]}
      case DELETE_DATA:
        return { ...state, loading: true };
      case DELETE_DATA_SUCCESS:
        return { ...state, loading: false, data: action.payload.data };
      case DELETE_DATA_FAILURE:
        return { ...state, loading: false, error: action.payload.data };
    default:
      return { ...state, loading: false };
  }
};
export default dashboard;
