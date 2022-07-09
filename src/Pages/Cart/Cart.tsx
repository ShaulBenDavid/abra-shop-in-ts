import React, { Fragment, useContext, useMemo } from "react";
import { CartContext } from "../../Context/CartContext";

import EmptyCart from "../../Components/CartComponents/EmptyCart";
import CartProductList from "../../Components/CartComponents/CartProductList/index";
import * as S from "./style";

const Cart = () => {
  const { cartItems, checkoutCartItems } = useContext(CartContext);

  // Cart total
  const cartTotal = useMemo(() => {
    return cartItems.reduce(
      (total, currentPrice) =>
        total + currentPrice.cartQuantity * currentPrice.price,
      0
    );
  }, [cartItems]);

  // Handle Checkout

  const handleCheckout = () => {
    checkoutCartItems();
  };

  return (
    <S.StyledCartWrapper>
      <S.CartTitle>My cart</S.CartTitle>

      {cartItems.length ? (
        <Fragment>
          <S.ProductCartContent>
            Items are reserved for 60 minutes
          </S.ProductCartContent>
          <CartProductList cartProducts={cartItems} />

          <S.ProductCartTotal>
            <span>Subtotal:</span>
            <span>{cartTotal} ILS</span>
          </S.ProductCartTotal>
        </Fragment>
      ) : (
        <EmptyCart />
      )}

      <S.CartButton
        type="inverted"
        disabled={cartItems.length ? false : true}
        onClick={handleCheckout}
      >
        Checkout
      </S.CartButton>
    </S.StyledCartWrapper>
  );
};

export default Cart;
