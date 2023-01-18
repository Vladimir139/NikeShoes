import React, {FC} from 'react';
import {Container} from "@assets/styles/globalElements";
import {
  ProductsWrapper,
  ListSneakers
} from './ProductsElements';
import {sneakersData} from "@data/sneakersData";
import SneakersCardProducts from "@components/ui/sneakerscardproducts/SneakerCardProducts";
const Products:FC = () => {
  return (
    <>
      <Container>
        <ProductsWrapper>
          <ListSneakers>
            {sneakersData.map(item => {
              return <SneakersCardProducts title={item.title} price={item.price} urlImg={item.urlImg} key={item.id} id={item.id}/>
            })}
          </ListSneakers>
        </ProductsWrapper>
      </Container>
    </>
  );
};

export default Products;