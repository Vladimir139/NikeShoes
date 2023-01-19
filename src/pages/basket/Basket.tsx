import React, {FC} from 'react';
import {Container} from "@assets/styles/globalElements";
import {useTypedSelector} from "@hooks/useTypedSelector";
import SneakersCardBasket from "@components/ui/sneakerscardbasket/SneakersCardBasket";
import {
  BoxOrder, ListCard,
  OrderTitle,
  ProceedToCheckoutBtn,
  TitleYourProducts,
  TotalAmount,
  TotalItems,
  WrapperBasket,
  WrapperYourProducts
} from "./BasketElements";
import BasketButton from "@components/ui/buyButton/basketButton/BasketButton";
import {IAddToCartPayload} from "@store/reducers/types";
import {useActions} from "@hooks/useActions";

const Basket:FC = () => {
  const cart = useTypedSelector(state => state.basket.cartItems)

  const total = cart.reduce((acc, item) => acc + (item.product.price * item.quantity), 0)
  const aroundTotal = Number(total.toString().slice(0, 6))

  const {clearAllCart} = useActions()

  // @ts-ignore
  const endActions = (callback) => {
    alert('Don\'t worry it\'s just a template !');
    callback();
  }

  return (
    <>
      <Container>
        <WrapperBasket>
          <BoxOrder>
            <OrderTitle>Order Summary</OrderTitle>
            <TotalItems>Total Items : {cart.length}</TotalItems>
            <TotalAmount>Total Amount : <span> ${aroundTotal}</span></TotalAmount>
            <ProceedToCheckoutBtn onClick={() => endActions(clearAllCart)}>Proceed to Checkout</ProceedToCheckoutBtn>
          </BoxOrder>
          <WrapperYourProducts>
            <BasketButton/>
            <TitleYourProducts>Your Products</TitleYourProducts>
            <ListCard>
              {cart.map((item: IAddToCartPayload) => {
                return <SneakersCardBasket
                  key={item.product.id}
                  title={item.product.title}
                  urlImg={item.product.urlImg}
                  price={item.product.price}
                  id={item.product.id}/>
              })}
            </ListCard>
          </WrapperYourProducts>
        </WrapperBasket>
      </Container>
    </>
  );
};

export default Basket;