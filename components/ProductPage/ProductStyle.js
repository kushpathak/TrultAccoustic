import styled from "styled-components";

export const ProductContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: #f5fbfd;
`;

export const ProductMain = styled.div`
  padding-top: 80px;
  display: flex;
  justify-content: space-around;
  font-family: "Poppins", sans-serif;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const Heading = styled.div`
  font-size: 24px;
`;

export const Description = styled.div`
  width: 500px;
`;

export const Price = styled.div`
  font-size: 25px;
  margin-top: 20px;
`;

export const ActionContainer = styled.div`
  width: 240px;
  display: flex;
  justify-content: space-between;
`;

export const AddToCart = styled.button`
  border: 2px solid teal;
  padding: 8px 15px;
  font-size: 15px;
  border-radius: 5px;
  background: white;
  outline: 3px solid white;
`;

export const IncreaseCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 6px;
`;

export const Counter = styled.div`
  width: 40px;
  border: 0.5px solid teal;
  border-radius: 3px;
  padding: 5px 11px;
  text-align: center;
`;
