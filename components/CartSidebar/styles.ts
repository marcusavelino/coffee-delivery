import styled from "styled-components";

// src/components/breathe.js
import { keyframes } from 'styled-components'
const breatheAnimation = keyframes`
 0% { height: 100vh; width: 100px; }
 30% { height: 100vh; width: 400px;}
 100% { height: 100vh; width: 400px;}
`
export const HeaderSideBarCart = styled.header`
  display: flex;
  justify-content: space-between;

  svg {
    color: ${props => props.theme['purple-400']};
    cursor: pointer;

    &:hover {
      color: ${props => props.theme['purple-600']};
    }
  }
`

interface ShowSideBar {
  show: boolean;
}

export const ContentCartAddProduct = styled.div<ShowSideBar>`
  padding: 10px;
  overflow: auto;
  width: 400px;
  background-color: white;
  color: ${props => props.theme['gray:600']};
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  -webkit-box-shadow: -10px 4px 20px -7px rgba(0,0,0,0.75);
  -moz-box-shadow: -10px 4px 20px -7px rgba(0,0,0,0.75);
  box-shadow: -10px 4px 20px -7px rgba(0,0,0,0.75);
  animation-name: ${breatheAnimation};
  animation-duration: 2s;

  display: ${props => props.show ? 'block' : 'none'}

`
export const ProducCartContainer = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr 100px; 
  margin-top: 10px;
  background: ${props => props.theme['gray:200']};
  padding: 15px;
  border-radius: 8px

  div {
    background-color: black;
  }

  p {
    text-align: end;

    span {
      font-weight: bold;
    }
  }
`
export const AmountCartProduct = styled.div`
  display: flex;

  button {
    border: none;
    background: ${props => props.theme['gray:400']};
    padding: 4px 10px;
    border-radius: 8px;
  }

  p {
    background: ${props => props.theme['gray:400']};
    padding: 4px 10px;
    margin-right: 5px;
    border-radius: 8px;
  }
`

export const ProductData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    text-align: initial;
  }
`

export const TotalCart = styled.div`
  position: fixed;
  bottom: 10px;
  width: 370px;
  height: 100px;
  background-color: ${props => props.theme['gray:200']};
  margin: 0 5px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  font-size: 35px;
  box-shadow: -10px 4px 20px -7px rgba(0,0,0,0.75);

  span {
    font-weight: bold;
    margin-right: 20px
  }
`
