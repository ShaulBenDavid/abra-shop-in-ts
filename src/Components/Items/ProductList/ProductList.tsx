import React from "react";
import * as S from "./style";
import ProductCard from "../ProductCard/ProductCard";

type ProductListProps = {
  image: string;
  name: string;
  price: number;
  quantity: number;
  cartQuantity: number;
  id: number;
  catagories: string[];
}

const ProductList: React.FC <{productsData: ProductListProps[]}> = ({ productsData }) => {
  return (
    <S.ProductListContainer>
      {productsData.map((product: ProductListProps) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </S.ProductListContainer>
  );
};

export default ProductList;
