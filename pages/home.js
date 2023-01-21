import React from "react";
import styled from "styled-components";
import CategoryList from "../components/homepage/CategoryList";
import MusicInfo from "../components/homepage/MusicInfo";
import ProductList from "../components/homepage/ProductList";
import { Products } from "../config/ProductConfig";

const ProductContainer = styled.div``;

const HomePage = () => {
  return (
    <>
      <MusicInfo />
      <CategoryList />
      <ProductContainer id="products">
        {Products.map((product) => {
          return (
            <ProductList productInformation={product} key={product.category} />
          );
        })}
      </ProductContainer>
    </>
  );
};

export default HomePage;
