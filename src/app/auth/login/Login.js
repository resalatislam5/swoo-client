"use client";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import AuthLayout from "../AuthLayout";

function Login() {
  const inputList = [
    {
      text: "Email Address",
      type: "email",
      placeholder: "Example@gmail.com",
    },
    {
      text: "Password",
      type: "password",
      placeholder: "...",
      eyse: <FaRegEye />,
      eyseH: <FaRegEyeSlash />,
    },
  ];
  const handelSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <AuthLayout
        heading="Welcome Back"
        subHeading="LOGIN TO CONTINUE"
        handelSubmit={handelSubmit}
        inputList={inputList}
        to={"/auth/signup"}
        toText="Sign Up"
        toText1="new user ?"
        forget="Forget Password ?"
      />
    </div>
  );
}

export default Login;
