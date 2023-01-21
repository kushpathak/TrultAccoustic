import styled from "styled-components";

export const AuthContainer = styled.div`
  background: url("images/login.jpg");
  background-size: cover;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AuthBox = styled.div`
  border-radius: 10px;
  min-height: 280px;
  width: ${(props) => (props.width ? props.width : "350px")};
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 10px;
  padding: 20px;
  font-family: "Open Sans", sans-serif;
`;

export const Title = styled.div`
  font-size: 22px;
  font-weight: 400;
  color: black;
  margin-bottom: 15px;
`;

export const UserName = styled.input`
  border: 2px solid lightgrey;
  width: 90%;
  min-height: 30px;
  font-size: 13px;
  padding: 3px;
  font-weight: 400;

  :focus {
    border: none;
    outline: 2px solid black;
  }
`;

export const ErrorText = styled.div`
  font-size: 12px;
  color: red;
`;

export const Password = styled.input`
  margin-top: 10px;
  border: 2px solid lightgrey;
  width: 90%;
  min-height: 30px;
  font-size: 13px;
  font-weight: 400;
  padding: 3px;

  :focus {
    border: none;
    outline: 2px solid black;
  }
`;

export const AuthButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: teal;
  padding: 10px 15px;
  color: white;
  text-align: center;
  font-size: 14px;
  text-align: center;
  margin-top: 13px;
`;

export const NewUserText = styled.div`
  color: black;
  font-size: 13px;
  text-decoration: underline;
  cursor: pointer;
  margin-top: 6px;
`;
