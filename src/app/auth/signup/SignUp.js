"use client";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import AuthLayout from "../AuthLayout";

function SignUp() {
  const inputList = [
    {
      text: "Your Name",
      type: "email",
      placeholder: "Jhon Deo",
    },
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
    {
      text: "Confirm Password",
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
        heading="Register"
        subHeading="JOIN TO US"
        handelSubmit={handelSubmit}
        inputList={inputList}
        to={"/auth/login"}
        toText="Login"
        buttonText="Register"
        toText1="new user ? "
      />
    </div>
  );
}

export default SignUp;
