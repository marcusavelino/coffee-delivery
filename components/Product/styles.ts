import styled from "styled-components";

export const ProductContent = styled.div`
  width: 256px;
  height: 310px;
  background-color: ${props => props.theme['gray:100']};
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 70px;

  img {
    margin-top: -25px;
  }

  .tag {
    font-size: 10px;
    background-color: ${props => props.theme['yellow-200']};
    color: ${props => props.theme['yellow-600']};
    margin: 10px;
    padding: 5px 8px;
    font-weight: 700;
    border-radius: 8px;
  }

  h4 {
    font-weight: 700;
    font-size: 20px;
    color: ${props => props.theme['gray:600']};
    margin-bottom: 10px;
  }

  p {
    text-align: center;
    color: ${props => props.theme['gray:500']};
    font-size: 14px;
    padding: 20px 10px;
  }
`

export const ProductData = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  padding: 0 20px;
`

export const ProductCart = styled.div`
  display: grid;
  grid-template-columns: 1fr 22px;
  justify-items: end;
  gap: 24px;

  form {
    display: contents;
  }

  input {
    width: 72px;
    text-align: center;
    border: none;
    border-radius: 8px;
    background-color: ${props => props.theme['gray:300']};
  }

  button {
    background-color: ${props => props.theme['purple-600']};
    width: 38px;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;

    svg {
      color: white;
    }
  }
`

export const ProductPrice = styled.div`
  font-size: 24px;
  font-weight: 800;
  color: ${props => props.theme['gray:600']};

  span {
    font-size: 14px;
    color: ${props => props.theme['gray:500']};
  }
`