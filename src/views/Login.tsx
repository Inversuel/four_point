import { LoginBackground } from "../components/LoginBackground";
import { LoginForm } from "../components/LoginForm";
import { LoginSidebar } from "../components/LoginSidebar";

export const Login = () => {
  return (
    <>
      <LoginSidebar>
        <LoginForm />
      </LoginSidebar>
      <LoginBackground />
    </>
  )
};
