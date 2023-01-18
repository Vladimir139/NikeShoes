import styled from "styled-components";

export const HomeWrapper = styled.div`
    
`
export const MainImage = styled.div`
  background-image: url('/img/home/homepage.jpg');
  background-size: cover;
  background-position: 50%;
  height: 100vh;
  border-radius: 20px;
  margin: 1rem;
  box-shadow: 10px 10px 10px rgb(14 12 12 / 53%);
  
  @media (max-width: 1001px) {
    height: 50vh;
  }
`
export const HomeTitle = styled.p`
    text-align: center;
    font-family: "Acme",sans-serif;
    font-size: 70px;
    color: #5d0137;
    margin-top: 50px;
    text-shadow: 2px 4px 2px #e7d8e1;

  @media (max-width: 701px) {
    font-size: 50px;
  }

  @media (max-width: 501px) {
    font-size: 40px;
  }
`
export const Subtitle = styled.p`
  text-align: center;
  width: 50%;
  justify-content: center;
  font-family: "Karla", sans-serif;
  font-size: 25px;
  color: rgba(12, 11, 11, .99);
  margin: 0 auto 100px;

  @media (max-width: 701px) {
    font-size: 20px;
    margin-bottom: 60px;
  }
  @media (max-width: 501px) {
    font-size: 14px;
  }
  
`
export const LatestDesignSection = styled.section`
  width: 70%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const WrapperTitleLatestDesign = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 30px;
  
  hr {
    display: inline-block;
    height: 1px;
    margin-top: auto;
    width: 20%;
  }

  @media (max-width: 701px) {
    margin-bottom: 15px;
  }

  @media (max-width: 501px) {
    hr {
      width: 10%;
    }
  }
`
export const LatestDesignTitle = styled.h3`
  margin-left: 15px;
  margin-right: 15px;
  font-family: "Merienda One",cursive;
  font-weight: normal;

  @media (max-width: 501px) {
    font-size: 18px;
  }
`
export const ListLatestDesign = styled.ul`
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
  flex-wrap: wrap;

  @media (max-width: 701px) {
    margin-bottom: 60px;
  }
`

