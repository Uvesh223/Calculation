import {put, call, all, takeEvery} from 'redux-saga/effects';
import {GET_DATA, GET_DATA_FAILURE, GET_DATA_SUCCESS} from '../actionTypes';
import axiosConfig from '../../utils/AxiosConfig';
import API from '../../utils/HttpService';
function requestApi(type, url, params, headers) {
  return axiosConfig.request({
    method: type,
    url: url,
    data: params,
    headers: headers,
  });
}
function* getData(action) {
  try {
     let postData = action.payload;
    let response = yield call(
      requestApi,
      'POST',
      API.home,
      postData,
    );
    yield put({
      type: GET_DATA_SUCCESS,
      payload: response,
    });
  } catch (err) {
    //alert(JSON.stringify(err));
    yield put({
      type: GET_DATA_FAILURE,
      payload: err,
    });
  }
}

function* getDataSaga() {
  yield takeEvery(GET_DATA, getData);
}
export default function* rootDataSaga() {
  yield all([getDataSaga()]);
}
