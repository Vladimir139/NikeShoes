import React, {FC} from 'react';
import {
  SneakersImageProducts,
  SneakersItemProducts,
  SneakersPriceProducts,
  SneakersTitleProducts
} from "./SneakerCardProductsElements";
import {ISneakers} from '@data/sneakersTypes';
import {useActions} from "@hooks/useActions";
import {ProdBuyButton} from "@pages/basket/BasketElements";



const SneakersCardProducts:FC<ISneakers> = (item) => {
  const {addToCart} = useActions();

  return (
    <SneakersItemProducts>
      <SneakersTitleProducts>{item.title}</SneakersTitleProducts>
      <SneakersPriceProducts>{item.price}</SneakersPriceProducts>
      <SneakersImageProducts src={item.urlImg}></SneakersImageProducts>
      <ProdBuyButton onClick={() => {
        addToCart({product: item, quantity: 1})
        }}>
        <img src="/img/buyButton/productsButton.svg" alt=""/>
      </ProdBuyButton>
    </SneakersItemProducts>
  );
};


export default SneakersCardProducts;