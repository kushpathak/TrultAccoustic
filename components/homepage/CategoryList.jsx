import Image from "next/image";
import React from "react";
import { Categories } from "../../config/ProductConfig";
import {
  Button,
  Category,
  CategoryContainer,
  Description,
  Info,
} from "./styles/CategoriesStyle";

const CategoryList = () => {
  const categories = Categories;
  return (
    <CategoryContainer>
      {categories.map((category) => {
        return (
          <Category
            key={category.name}
            onClick={(e) => {
              const element = document.getElementById(category.name);
              element?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <Image
              src={category.image}
              width={300}
              height={300}
              alt={category.name}
              style={{
                objectFit: "cover",
              }}
            />
            <Info>
              <Description>{category.name}</Description>
              <Button>Shop Now</Button>
            </Info>
          </Category>
        );
      })}
    </CategoryContainer>
  );
};

export default CategoryList;
