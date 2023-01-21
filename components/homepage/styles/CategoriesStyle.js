import styled from "styled-components";

export const CategoryContainer = styled.div`
  padding: 60px 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: #f5fbfd;
`;

export const Category = styled.div`
  position: relative;
  font-family: "Poppins", sans-serif;
  margin-bottom: 8px;
`;

export const Info = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 20px;
  font-weight: 500;
`;

export const Description = styled.div`
  color: white;
`;

export const Button = styled.button`
  margin-top: 8px;
  border: none;
  font-size: 15px;
  border-radius: 5px;
  cursor: pointer;
`;
