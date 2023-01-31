import { AnyAction, createSlice } from "@reduxjs/toolkit";
import { DataState, UserState } from "../interfaces";
import { DATA_FETCH_SUCCEEDED, DATA_START_LOADING, USER_FETCH_SUCCEEDED, USER_START_LOADING } from "./actions";

const initialDataState: DataState = {
  coordinates_bounding_box: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  data: [[]],
  isLoading: false,
}

const initialUserState: UserState = {
  username: "",
  password: "",
  key: "",
  isLoading: false,
};

export const userReducer = (state = initialUserState, action: AnyAction) => {
  switch (action.type) {
    case USER_FETCH_SUCCEEDED:
      
      return {
        ...state,
        key: action.action.key.key,
        username: action.action.username,
        password: action.action.password,
        isLoading: false,
      };
    case USER_START_LOADING:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};

export const dataReducer = (state = initialDataState, action: AnyAction) => {
  switch (action.type) {
    case DATA_FETCH_SUCCEEDED:
      console.log('actionData', action);
      return {
        ...state,
        coordinates_bounding_box: action.action.data.coordinates_bounding_box,
        data: action.action.data.data,
        isLoading: false,
      };
    case DATA_START_LOADING:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};