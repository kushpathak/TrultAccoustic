import { useRouter } from "next/router";
import React from "react";
import Product from "../../components/ProductPage/Product";
import { Products } from "../../config/ProductConfig";

const ProductId = (props) => {
  const router = useRouter();
  const { productId, category } = router.query;
  const productList = Products;

  const getCurrentProduct = () => {
    const currentCategoryList = productList.filter(
      (product) => product.category === category
    )[0]?.productList;
    return currentCategoryList?.filter(
      (product) => product.id === productId
    )[0];
  };

  const currentProduct = getCurrentProduct();
  return <Product product={currentProduct} />;
};

export default ProductId;
