import React, { FC } from 'react';
import { Container } from '@assets/styles/globalElements';
import {
  HomeWrapper,
  MainImage,
  HomeTitle,
  Subtitle,
  LatestDesignSection,
  WrapperTitleLatestDesign,
  LatestDesignTitle,
  ListLatestDesign
} from './HomeElements';
import { sneakersData } from '@data/sneakersData';
import SneakersCardHome from '@components/ui/sneakerscardhome/SneakersCardHome';

const Home: FC = () => {
  return (
    <>
      <Container>
        <HomeWrapper>
          <MainImage />
          <HomeTitle>JUST DO IT</HomeTitle>
          <Subtitle>
            Nike has been your companion in happiness, both big and small, for over 50 years. Our roots are firmly grounded in Pakistan and with its people.
          </Subtitle>
          <LatestDesignSection>
            <WrapperTitleLatestDesign>
              <hr />
              <LatestDesignTitle>
                Latest Designs
              </LatestDesignTitle>
              <hr />
            </WrapperTitleLatestDesign>
            <ListLatestDesign>
              {sneakersData.filter(item => {
                if (item.latestDesign) {
                  return item
                }
              }).map(item => {
                return <SneakersCardHome urlImg={item.urlImg} title={item.title} price={item.price} key={item.id} id={item.id}/>
              })}
            </ListLatestDesign>
          </LatestDesignSection>
        </HomeWrapper>
      </Container>
    </>
  );
};

export default Home;
