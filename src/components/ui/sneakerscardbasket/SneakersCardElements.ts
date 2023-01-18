import styled from "styled-components";
import {Input} from "@chakra-ui/react";

export const SneakersBasketCard = styled.li`
  display: inline-block;
  margin: 10px;
  text-decoration: none;
  position: relative;
  border: 1px solid hsla(0,0%,50.2%,.24);
  border-radius: 20px;
  padding: 10px 0;
  background: #fafaf8;
  box-shadow: 2px 2px 2px grey;
  width: 300px;
  height: 290px;
`
export const SneakersTitle = styled.h3`
  color: #000;
  font-size: 14px;
  font-family: "Times New Roman",Times,serif!important;
  text-align: center;
`
export const RemoveButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  border: none;
  background: inherit;
  
  img {
    height: 30px;
  }
`
export const SneakersPrice = styled.p`
  margin-top: 25px;
  font-size: 20px;
  font-family: "Times New Roman",Times,serif!important;
  color: #2a2626;
  text-align: center;
  font-weight: bold;
`
export const SneakersCount = styled.div`
  font-family: "Merienda One",cursive;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`
export const IncrementButton = styled.button`
  padding: 5px;
  width: 32px;
  font-size: 1.2rem;
  cursor: pointer;
  
`
export const ItemsCount = styled(Input)`
  margin: 0 2px;
  text-align: center;
  text-shadow: 1px 1px 2px grey;
  align-self: center;
  padding: 8px;
  border-radius: 10px;
  width: 60px;
  background: #e0e0e0;
  font-size: 20px;
  outline: none;
`
export const DecrementButton = styled(IncrementButton)`
  
`
export const SneakersImage = styled.img`
  border-radius: 50px;
  display: block;
  height: 150px;
  margin: 0 auto;
`