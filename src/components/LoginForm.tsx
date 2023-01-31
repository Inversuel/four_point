import { useEffect, useState } from "react";
import { UserData } from "../app/interfaces";
import { Button } from "./Button";
import { InputElement } from "./InputElement";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/redux/store";
import { getUserKeyFetch, USER_START_LOADING } from "../app/redux/actions";
import { LoadingSpinner } from "./LoadingSpinner";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const LoginForm = () => {
  const [user, setUser] = useState<UserData>({ username: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userData = useSelector((state: RootState) => state.user);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: USER_START_LOADING });
    dispatch(getUserKeyFetch(user));
  };

  if (userData.isLoading) return <LoadingSpinner />;

  
  if (userData.key !== "") {
    axios.defaults.headers.common['Authorization'] = `Token ${userData.key}`;
    navigate("/home");
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputElement
        value={user.username}
        name="username"
        label={"Username"}
        setValue={setUser}
      />
      <InputElement
        value={user.password}
        name="password"
        type={"password"}
        label={"Password"}
        setValue={setUser}
      />
      <Button primary type="submit" disabled={false}>
        Log in
      </Button>
    </form>
  );
};
