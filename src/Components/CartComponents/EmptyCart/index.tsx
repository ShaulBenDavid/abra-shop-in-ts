import React from "react";
// import EmptyCartImage from "../../../Assets/empty-cart.svg";
import * as S from "./style";
const EmptyCartImage = require("../../../Assets/empty-cart.svg").default as string;

const EmptyCart = () => {
  return (
    <S.EmptyCartContainer>
      <S.EmptyCartImg src={EmptyCartImage} alt="empty cart" />
      <S.EmptyCartText>Your cart is empty</S.EmptyCartText>
    </S.EmptyCartContainer>
  );
};

export default EmptyCart;
