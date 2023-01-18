import styled from "styled-components";

export const AboutWrapper = styled.div`
  
`
export const AboutImage = styled.div`
  background-image: linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.4)),url(/img/about/aboutimg.jpg);
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
  height: 100vh;
  border-radius: 20px;
  box-shadow: 10px 10px 10px grey;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;  
  align-items: start;

  @media (max-width: 901px) {
    height: 40vh;
    margin: 5px;
  }
  
  div {
    width: 40%;
  }
`
export const AboutImageSlogan = styled.p`
  font-size: 25px;
  text-shadow: 4px 4px 1px #1e80d4;
  color: #000;
  font-family: "Rowdies",cursive;
  text-align: center;
  
  @media (max-width: 901px) {
    font-size: 20px;
  }

  @media (max-width: 601px) {
    font-size: 15px;
  }
`
export const AboutImageSubSlogan = styled.p`
  text-align: center;
  margin: 20px;
  font-size: 22px;
  text-shadow: 1px 1px 1px #1b4d7c;
  color: #000;
  font-family: "Rowdies",cursive;

  @media (max-width: 901px) {
    font-size: 15px;
  }

  @media (max-width: 601px) {
    font-size: 10px;
  }
`
export const AboutNikeTitle = styled.h2`
  text-align: center;
  font-family: "Rowdies", cursive;
  margin: 20px 20px 20px;
  font-size: 40px;
  text-shadow: 4px 2px 1px #000;
  color: #5fa5ff;
  font-feature-settings: "c2sc";
  font-variant: small-caps;

  @media (max-width: 901px) {
    font-size: 30px;
  }

  @media (max-width: 601px) {
    font-size: 25px;
    margin-bottom: 0px;
  }
`
export const AboutNikeText = styled.p`
  text-align: center;
  font-family: "Rowdies",cursive;
  padding: 10px;
  text-shadow: 1px 1px 1px grey;
  justify-content: center;
  font-size: 25px;
  font-weight: 300;

  @media (max-width: 901px) {
    font-size: 18px;
  }

  @media (max-width: 551px) {
    font-size: 14px;
    padding: 0px;
  }

  @media (max-width: 451px) {
    font-size: 11px;
  }
`

export const WrapperAboutNike = styled.div`
  margin: 120px 90px 120px;

  @media (max-width: 901px) {
    margin: 80px 60px 80px;
  }

  @media (max-width: 501px) {
    margin: 30px 0px 20px;
    padding: 0 30px;
  }
`
