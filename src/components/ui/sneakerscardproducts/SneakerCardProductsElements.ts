import styled from "styled-components";

export const SneakersItemProducts = styled.li`
  margin: 10px;
  text-decoration: none;
  background: #fff;
  border: 1px solid hsla(0,0%,50.2%,.24);
  border-radius: 20px;
  padding: 10px 20px;
  box-shadow: 3px 3px 7px #363236;
  width: 350px;
  height: 300px;
  vertical-align: middle;
  transition: all ease .3s;
  
  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 678px) {
    width: 200px;
    height: 220px;
  }
`
export const SneakersTitleProducts = styled.h3`
  font-size: 98%;
  color: #5d0137;
  text-align: center;
  font-family: "Merienda One",cursive;

  @media (max-width: 678px) {
    font-size: 16px;
  }
`
export const SneakersPriceProducts = styled.p`
  color: #606e60;
  text-shadow: 1px 1px 1px #000;
  text-align: center;
  font-family: "Merienda One",cursive;
  font-size: 24px;
  font-weight: bold;

  @media (max-width: 678px) {
    font-size: 16px;
  }
`
export const SneakersImageProducts = styled.img`
  display: block;
  width: 200px;
  margin: 0 auto;

  @media (max-width: 678px) {
    height: 80px;
    width: 100px;
  }
`