import React, {FC} from 'react';
import {ProdBuyButton} from "./ProductsBuyButtonElements";

const ProductsBuyButton:FC = () => {
  return (
    <ProdBuyButton >
      <img src="/img/buyButton/productsButton.svg" alt=""/>
    </ProdBuyButton>
  );
};

export default ProductsBuyButton;