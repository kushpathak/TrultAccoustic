import { isEmpty } from "lodash";
import Link from "next/link";
import React, { useState } from "react";
import {
  AuthBox,
  AuthContainer,
  Title,
  UserName,
  Password,
  AuthButton,
  NewUserText,
  ErrorText,
} from "./AuthStyle";

const CreateAccount = () => {
  const defaultErrors = {
    Username: "",
    Password: "",
    ConfirmPassword: "",
  };

  const [errors, setErrors] = useState(defaultErrors);

  const handleTextChange = (event, key) => {
    const { value } = event?.target;
    const currentErrors = { ...errors };
    if (isEmpty(value)) {
      currentErrors[key] = `${key} cannot be empty`;
    } else {
      currentErrors[key] = "";
    }
    setErrors(currentErrors);
  };

  debugger;
  return (
    <AuthContainer>
      <AuthBox width="380px">
        <Title>CREATE NEW ACCOUNT</Title>
        <UserName
          placeholder="Username"
          type="text"
          onChange={(e) => handleTextChange(e, "Username")}
        />
        <ErrorText>{errors.Username}</ErrorText>
        <Password
          placeholder="Password"
          type="password"
          onChange={(e) => handleTextChange(e, "Password")}
        />
        <ErrorText>{errors.Password}</ErrorText>
        <Password placeholder="Confirm Password" type="password" />
        <ErrorText></ErrorText>
        <AuthButton>Create Account</AuthButton>
        <NewUserText>
          <Link href="login" style={{ color: "black" }}>
            Already a user? Log in
          </Link>
        </NewUserText>
      </AuthBox>
    </AuthContainer>
  );
};

export default CreateAccount;
