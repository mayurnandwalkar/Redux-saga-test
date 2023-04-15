import * as types from "./actionTypes";
import {take,takeEvery,takeLatest,put,all,delay,fork,call} from "redux-saga/effects";
import {loadDataSuccess,loadDataError,updateDataSuccess,updateDataError} from "./actions";
import {loadDataApi,updateDataApi} from "./api";

function* onLoadDataStartAsync() {
  try {
    const response = yield call(loadDataApi);
    if (response.status === 200) {
      yield delay(500);
      yield put(loadDataSuccess(response.data));
    }
  } catch (error) {
    yield put(loadDataError(error.response.data));
  }
}

export function* helloSaga() {
  console.log('Hello Sagas!')
}

function* onUpdateDataStartAsync({ payload: data }) {
  try {
    const response = yield call(updateDataApi, data.name);
    if (response.status === 204) {
      yield put(updateDataSuccess(data.name));
    }
  } catch (error) {
    yield put(updateDataError(error.response.data));
  }
}

function* onLoadUsers() {
  yield takeEvery(types.LOAD_DATA_START, onLoadDataStartAsync);
}

function* onUpdateUser() {
  yield takeLatest(types.UPDATE_DATA_START, onUpdateDataStartAsync);
}

const userSagas = [
  fork(onLoadUsers),
  fork(onUpdateUser),
];

export default function* rootSaga() {
  yield all([...userSagas]);
}