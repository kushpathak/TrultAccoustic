import {
  AddShoppingCartOutlined,
  ArrowForwardIosOutlined,
  ArrowForwardOutlined,
} from "@mui/icons-material";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { calculateDiscount } from "../../utils/formatUtil";
import {
  DiscountedPrice,
  IconContainer,
  Info,
  Name,
  Price,
  PriceContainer,
  Product,
  ProductListContainer,
  Discount,
} from "./styles/ProductListStyle";

const ProductList = ({ productInformation }) => {
  const router = useRouter();
  const { category, imageWidth, imageHeight, productList } = productInformation;

  const handleClick = (e, product) => {
    e.preventDefault();
    router.push({
      pathname: `product/[productId]`,
      query: {
        productId: product.id,
        category: category,
      },
    });
  };

  return (
    <ProductListContainer id={category}>
      {productList.map((product) => {
        return (
          <Product key={product.name} onClick={(e) => handleClick(e, product)}>
            <Image
              width={imageWidth}
              height={imageHeight}
              src={`${product.image}`}
              alt={product.name}
            />
            <Info>
              <IconContainer>
                <AddShoppingCartOutlined
                  style={{
                    color: "white",
                    marginRight: "13px",
                    cursor: "pointer",
                  }}
                />
                <ArrowForwardOutlined
                  onClick={(e) => handleClick(e, product)}
                  style={{ color: "white", cursor: "pointer" }}
                />
              </IconContainer>
            </Info>
            <Name>{product.name}</Name>
            <PriceContainer>
              <DiscountedPrice>
                &#x20B9;{calculateDiscount(product.price, product.discount)}
              </DiscountedPrice>
              <Price>&#x20B9;{product.price}</Price>
              <Discount>{`(${product.discount}% Off)`}</Discount>
            </PriceContainer>
          </Product>
        );
      })}
    </ProductListContainer>
  );
};

export default ProductList;
