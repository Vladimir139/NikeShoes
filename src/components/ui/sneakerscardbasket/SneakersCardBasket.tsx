import React, {FC, useState} from 'react';
import {
  DecrementButton,
  IncrementButton,
  ItemsCount, RemoveButton,
  SneakersBasketCard,
  SneakersCount,
  SneakersTitle,
  SneakersPrice,
  SneakersImage
} from "./SneakersCardElements";
import {useNumberInput} from "@chakra-ui/react";
import {ISneakers} from "@data/sneakersTypes";
import {useActions} from "@hooks/useActions";

const SneakersCardBasket:FC<ISneakers> = ({title, price, urlImg, id}) => {
  const {changeQuantity, removeFromCart} = useActions();
  const {getInputProps, getIncrementButtonProps, getDecrementButtonProps} = useNumberInput({
    step: 1,
    defaultValue: 1,
    min: 1
  })

  const inc = getIncrementButtonProps()
  const input = getInputProps()
  const dec = getDecrementButtonProps()

  return (
    <SneakersBasketCard>
      <SneakersTitle>{title}</SneakersTitle>
      <RemoveButton onClick={() => removeFromCart({id: id})}>
        <img src="/img/basket/removeBtn.svg" alt=""/>
      </RemoveButton>
      <SneakersPrice>{price}</SneakersPrice>
      <SneakersCount>
        Items &nbsp;
        <IncrementButton
          onClick={() => changeQuantity({type: 'minus', id: id})}
          {...dec}
        >-</IncrementButton>
        <ItemsCount {...input}>
        </ItemsCount>
        <DecrementButton
          onClick={() => changeQuantity({type: 'plus', id: id})}
          {...inc}
        >+</DecrementButton>
      </SneakersCount>
      <SneakersImage src={urlImg}/>
</SneakersBasketCard>
  );
};

export default SneakersCardBasket;