import { Add, Remove } from "@mui/icons-material";
import Image from "next/image";
import React, { useState } from "react";
import {
  ActionContainer,
  AddToCart,
  Counter,
  Description,
  Heading,
  IncreaseCart,
  Info,
  Price,
  ProductContainer,
  ProductMain,
} from "./ProductStyle";

const Product = ({ product }) => {
  const [currentCount, setCurrentCount] = useState(0);

  const updateCount = (delta) => {
    if (currentCount + delta < 0) return;
    setCurrentCount(currentCount + delta);
  };

  return (
    <ProductContainer>
      <ProductMain>
        <Image
          src={product?.image}
          width={600}
          height={400}
          alt={product?.name}
          style={{
            objectFit: "contain",
          }}
        />
        <Info>
          <Heading>Yamaha Guitar</Heading>
          <Description>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora in
            optio, dolore eveniet fugiat minima saepe. Doloribus et odio, quis
            placeat dolores dolor odit, iusto deleniti sed veniam quae rerum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            expedita tempore, earum cum voluptas libero cupiditate illum
            architecto doloribus qui veniam? Tenetur officia aspernatur
            voluptatibus aliquam excepturi soluta accusamus vitae?
          </Description>
          <Price>Price: 15000 Rs</Price>
          <ActionContainer>
            <IncreaseCart>
              <Add onClick={() => updateCount(1)} />
              <Counter>{currentCount}</Counter>
              <Remove onClick={() => updateCount(-1)} />
            </IncreaseCart>
            <AddToCart>Add To Cart</AddToCart>
          </ActionContainer>
        </Info>
      </ProductMain>
    </ProductContainer>
  );
};

export default Product;
