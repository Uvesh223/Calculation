import {put, call, all, takeEvery} from 'redux-saga/effects';
import {SIGN_IN,SIGN_IN_FAILURE,SIGN_IN_SUCCESS} from '../actionTypes';
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
function* signIn(action) {
  console.log("action",action)
  try {
    var postData = action.payload;
    let response = yield call(
      requestApi,
      'POST',
      API.login,
      postData,
    );
    yield put({
      type: SIGN_IN_SUCCESS,
      payload: response,
    });
  } catch (err) {
    alert(JSON.stringify(err));
    yield put({
      type: SIGN_IN_FAILURE,
      payload: err,
    });
  }
}

function* signInSaga() {
  yield takeEvery(SIGN_IN, signIn);
}
export default function* rootSigninSaga() {
  yield all([signInSaga()]);
}
