import styled from "styled-components";

export const BasketBtn = styled.button`
  margin: 30px auto;
  padding: 10px 0;
  width: 72px;
  border-radius: 10px;
  border: none;
  outline: none;
  background: #efd2d2;
  cursor: pointer;
  box-shadow: 0 5px #999;
  transition: all 0.2s ease;
  
  img {
    display: block;
    margin: 0 auto;
    height: 50px;
  }
  
  &:hover {
    background: rgba(62,142,65,.81);
  }
  
`