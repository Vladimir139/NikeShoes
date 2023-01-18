import styled from "styled-components";

export const WrapperBasket = styled.div`
  
`
export const BoxOrder = styled.div`
  color: rgba(0, 0, 0, 0.87);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 4px;
  overflow: hidden;
  background: transparent!important;
  width: 80%;
  margin: 0 auto;
  text-align: center;
  box-shadow: 0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%);
`
export const OrderTitle = styled.p`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  line-height: 1.167;
  letter-spacing: 0em;
  font-size: 40px;
  text-align: center;
  margin-top: 14px;
  margin-bottom: 14px;

  @media (max-width: 901px) {
    font-size: 30px;
  }
`
export const TotalItems = styled.p`
  font-size: 1rem;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.00938em;
  color: rgba(0, 0, 0, 0.54);
  text-align: center;

  @media (max-width: 901px) {
    font-size: 20px;
  }
`
export const TotalAmount = styled.p`
  font-size: 1.5rem;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  line-height: 1.334;
  letter-spacing: 0em;
  text-align: center;

  @media (max-width: 901px) {
    font-size: 20px;
  }
  
  span {
    font-family: "Allerta",sans-serif;
    font-weight: bold;
  }
`
export const ProceedToCheckoutBtn = styled.a`
  display: inline-block;
  text-decoration: none;
  border: none;
  outline: none;
  color: #fff;
  background: #5d0137;
  margin: 15px;
  font-size: 22px;
  border-radius: 20px;
  padding: 10px 20px;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;
  cursor: pointer;
  vertical-align: middle;
  transform: translateZ(0);
  box-shadow: 0 0 1px transparent;
  backface-visibility: hidden;
  transition-duration: .5s;
  transition-property: transform;
  text-align: center;

  @media (max-width: 701px) {
    font-size: 18px;
  }

  &:hover {
    transform: scale(1.05);
  }
`
export const WrapperYourProducts = styled.div`
  display: grid;
  justify-content: center;
`

export const TitleYourProducts = styled.p`
  color: #000;
  margin: 0px 0px 22px;
  text-shadow: 2px 3px 3px grey;
  text-align: center;
  font-size: 18px;
  font-family: "Merienda One", cursive;
  font-weight: bold;
`

export const ListCard = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 30px;
`

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

