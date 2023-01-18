import styled from "styled-components";

export const ProdBuyButton = styled.button`
  display: block;
  margin: 10px auto 0;
  padding: 5px;
  border-radius: 20px;
  border: none;
  outline: none;
  background: #efd2d2;
  cursor: pointer;
  box-shadow: 0 5px #999;
  transition: all .2s ease;

  &:hover {
    background: rgba(62, 142, 65, .81);
  }

  img {
    height: 30px;
  }

  @media (max-width: 678px) {
    img {
      height: 20px;
    }

    margin: 15px auto 0;
  }
`