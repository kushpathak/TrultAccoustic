import { isEmpty } from "lodash";
import Link from "next/link";
import React, { useState } from "react";
import {
  Title,
  UserName,
  Password,
  ErrorText,
  NewUserText,
  AuthContainer,
  AuthBox,
  AuthButton,
} from "./AuthStyle";
import { ERRORS } from "./ErroConstants";

const LoginUser = () => {
  const defaultErrors = {
    Username: "",
    Password: "",
  };

  const [errors, setErrors] = useState(defaultErrors);

  const handleTextChange = (event, key) => {
    const { value } = event?.target;
    const prevErrors = { ...errors };
    if (isEmpty(value)) {
      prevErrors[key] = `${key} cannot be empty`;
    } else {
      prevErrors[key] = "";
    }
    setErrors(prevErrors);
  };

  return (
    <AuthContainer>
      <AuthBox>
        <Title>SIGN IN</Title>
        <UserName
          placeholder="Enter Username"
          onChange={(e) => handleTextChange(e, "Username")}
        />
        <ErrorText>{errors.Username}</ErrorText>
        <Password
          type="password"
          placeholder="Enter Password"
          onChange={(e) => handleTextChange(e, "Password")}
        />
        <ErrorText>{errors.Password}</ErrorText>
        <AuthButton>SIGN IN</AuthButton>
        <NewUserText>
          <Link href="signup" style={{ color: "black" }}>
            New User? Create a new Account
          </Link>
        </NewUserText>
      </AuthBox>
    </AuthContainer>
  );
};

export default LoginUser;
