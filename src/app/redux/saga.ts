import axios, { AxiosResponse } from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { API_URLS, BASE_URL } from "../apiUrls";
import { DataResponse, UserData, UserState } from "../interfaces";
import {
  USER_FETCH_SUCCEEDED,
  USER_FETCH_FAILED,
  USER_FETCH_REQUESTED,
  DATA_FETCH_REQUESTED,
  DATA_FETCH_FAILED,
  DATA_FETCH_SUCCEEDED,
} from "./actions";

function* fetchUser(action: { payload: UserData; type: string }): any {
  try {
    const userKey = yield call(Api.fetchUser, {
      password: action.payload.password,
      username: action.payload.username,
    });

    yield put({
      type: USER_FETCH_SUCCEEDED,
      action: { ...action.payload, key: userKey },
    });
  } catch (e: any) {
    yield put({ type: USER_FETCH_FAILED, message: e.message });
  }
}

function* fetchAreasData(action: { payload: UserData; type: string }): any {
  try {
    const data = yield call(Api.fetchAreasData);

    yield put({
      type: DATA_FETCH_SUCCEEDED,
      action: { ...action.payload, data },
    });
  } catch (e: any) {
    yield put({ type: DATA_FETCH_FAILED, message: e.message });
  }
}

function* mySaga() {
  yield takeEvery(USER_FETCH_REQUESTED, fetchUser);
  yield takeEvery(DATA_FETCH_REQUESTED, fetchAreasData);
}

export default mySaga;

const Api = {
  fetchUser: ({ username, password }: UserState): Promise<{ key: string }> => {
    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);

    return axios
      .post(`${BASE_URL}${API_URLS.login}`, formData)
      .then((response: AxiosResponse<{ key: string }>) => {
        return response.data;
      });
  },
  fetchAreasData: (): Promise<DataResponse> => {
    return axios
      .get(`${BASE_URL}${API_URLS.data}`)
      .then((response: AxiosResponse<DataResponse>) => {
        return response.data;
      });
  },
};
