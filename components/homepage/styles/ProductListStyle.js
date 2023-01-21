import styled from "styled-components";

export const ProductListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 40px 0px;
  align-items: center;
  justify-content: center;
  background: #f5fbfd;
  column-gap: 40px;
`;

export const Info = styled.div`
  opacity: 0;
  position: absolute;
  top: 0px;
  left: 0px;
  background: rgba(0, 0, 0, 0.5);
  z-index: 3;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 500ms ease;
`;

export const Product = styled.div`
  background: white;
  margin-bottom: 25px;
  position: relative;
  display: flex;
  flex-direction: column;
  &:hover ${Info} {
    opacity: 1;
  }
`;

export const IconContainer = styled.div`
  display: flex;
`;

export const Name = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 15px;
  width: 300px;
  padding: 5px 15px;
  min-height: 100px;
`;

export const PriceContainer = styled.div`
  padding: 0px 20px 10px 20px;
  display: flex;
  column-gap: 10px;
  align-items: flex-end;
`;

export const DiscountedPrice = styled.div`
  font-family: "Open-Sans", sans-serif;
  font-weight: 500;
  font-size: 19px;
`;

export const Price = styled.s`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 13px;
  line-height: 1px;
  margin-bottom: 10px;
`;

export const Discount = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 14px;
`;
