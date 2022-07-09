import React from "react";
import * as S from "./style";
import CartProduct from "../CartProduct";

type CartProductsListProps = {
  price: number;
  name: string;
  image: string;
  cartQuantity: number;
  id: number;
  quantity: number;
  catagories: string[];
}

const CartProductList: React.FC <{cartProducts: CartProductsListProps[]}> = ({ cartProducts }) => {
  return (
    <S.ProductCartListWrapper>
      <S.CartProductContainer>
        {cartProducts.map((product) => (
          <CartProduct key={product.id} product={product} />
        ))}
      </S.CartProductContainer>
    </S.ProductCartListWrapper>
  );
};

export default CartProductList;
