import React, {FC} from 'react';
import {BasketBtn} from "./BasketButtonElements";
import {useActions} from "@hooks/useActions";

const BasketButton:FC = () => {
  const {clearAllCart} = useActions()

  return (
    <BasketBtn onClick={() => clearAllCart()}>
      <img src="/img/buyButton/orderButton.svg"/>
    </BasketBtn>
  );
};

export default BasketButton;