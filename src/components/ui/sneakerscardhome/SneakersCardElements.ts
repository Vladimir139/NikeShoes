import styled from "styled-components";


export const SneakersItem = styled.li`
  margin: 10px;
  text-decoration: none;
  border: 1px solid hsla(0, 0%, 50.2%, .24);
  border-radius: 20px;
  padding: 10px 0;
  box-shadow: 2px 2px 2px grey;
  font-size: 100%;
  width: 270px;
  background: #fff;
  height: 250px;
  
  @media (max-width: 701px) {
    width: 200px;
    height: 150px;
    font-size: 70%;
  }
`
export const SneakersImage = styled.img`
    display: block;
    margin: 0 auto;
    height: 150px;

  @media (max-width: 701px) {
    height: 80px;
  }
`
export const SneakersTitle = styled.h3`
    font-family: "Merienda One",cursive;
    text-align: center;
    font-size: 100%;
    font-weight: 700;
    color: #5d0137;

  @media (max-width: 701px) {
    margin-top: 10px;
  }
`
export const SneakersPrice = styled.p`
    font-size: 100%;
    text-align: center;
    color: #606e60;
    text-shadow: 1px 1px 1px #000;
`