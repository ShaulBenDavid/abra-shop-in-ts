import React, { useContext } from "react";
import { CartContext } from "../../../Context/CartContext";

import Button from "../../Common/Button/index";
import * as S from "./style";

type ProductCardProps = {
  id: number;
  quantity: number;
  cartQuantity: number;
  price: number;
  name: string;
  image: string;
  catagories: string[];
};

const ProductCard: React.FC<{ product: ProductCardProps }> = ({ product }) => {
  const { addItemsToCart } = useContext(CartContext);

  const { image, name, price } = product;

  const handleClick = () => {
    addItemsToCart(product);
  };

  return (
    <S.ProductCardContainer>
      <img src={image} alt={name} />
      <S.ProductCardName>{name}</S.ProductCardName>
      <S.ProductCardPrice>{price} ILS</S.ProductCardPrice>
      {product.quantity !== 0 ? (
        <Button onClick={handleClick}>Add to bag</Button>
      ) : (
        <Button disabled>Out of stock</Button>
      )}
    </S.ProductCardContainer>
  );
};

export default ProductCard;
