import styled from "styled-components";

export const BoxSocial = styled.a`
  display: block;
  width: 30px;
  height: 30px;
  color: #6b196b;
  border: 1px solid #000;
  transition: all .3s;
  border-radius: 5px;
  opacity: .5;
  margin-right: 12px;
  margin-bottom: 16px;
  
  &:last-child {
    margin-right: 0px;
  }
  
  &:hover {
    opacity: 1;
  }
`