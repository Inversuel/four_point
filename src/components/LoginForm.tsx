import { useState } from 'react';
import { UserData } from '../app/interfaces';
import { Button } from './Button';
import { InputElement } from './InputElement';

export const LoginForm = () => {
  const [user, setUser] = useState<UserData>({ username: '', password: '' });

  const handleSubmit = () => {};

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
      <Button
        primary
        type='submit'
        disabled={false}
      >
        Log in
      </Button>
    </form>
  )
};
