export interface UserData {
  username: string;
  password: string;
}

export interface UserState {
  username: string;
  password: string;
  key?: string;
  isLoading: boolean;
}
export interface DataResponse {
  coordinates_bounding_box: {
    left: number;
    right: number;
    top: number;
    bottom: number;
  };
  data: [number[]];
}

export interface DataState {
  coordinates_bounding_box: {
    left: number;
    right: number;
    top: number;
    bottom: number;
  };
  data: [number[]];
  isLoading: boolean;
}
