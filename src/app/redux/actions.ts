import { UserData } from "../interfaces";

export const USER_FETCH_REQUESTED = "USER_FETCH_REQUESTED";
export const USER_FETCH_SUCCEEDED = "USER_FETCH_SUCCEEDED";
export const USER_FETCH_FAILED = "USER_FETCH_FAILED";
export const USER_START_LOADING = "USER_START_LOADING";

export const DATA_FETCH_REQUESTED = "DATA_FETCH_REQUESTED";
export const DATA_FETCH_SUCCEEDED = "DATA_FETCH_SUCCEEDED";
export const DATA_FETCH_FAILED = "DATA_FETCH_FAILED";
export const DATA_START_LOADING = "DATA_START_LOADING";



export const getUserKeyFetch = (action: UserData) => ({
  type: USER_FETCH_REQUESTED,
  payload: action,
});

export const getDataFetch = () => ({
  type: DATA_FETCH_REQUESTED,
});