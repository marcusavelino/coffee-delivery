import styled from "styled-components";

export const BannerContainer = styled.div`
  display: flex;
  padding: 94px 0;
`
export const BannerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .title {
    h1 {
      font-weight: 800;
      font-size: 48px;
      line-height: 43px;
      color: ${props => props.theme['gray:700']};
    }

    h4 {
      padding-top: 20px;
      font-weight: 400;
      font-size: 20px;
      line-height: 26px;
    }
  }

  .iconsText{
    padding-top: 100px;
    display: grid;
    grid-template-columns: 1fr 1fr;

    div {
      margin-bottom: 40px;

      span {
        padding: 7px;
        border-radius: 999px;
        color: white;
        margin-right: 10px;
      }

      .cart {
        background-color: ${props => props.theme['yellow-600']};
      }

      .clock {
        background-color: ${props => props.theme['yellow-400']};
      }

      .coffe {
        background-color: ${props => props.theme['purple-400']};
      }

      .pack {
        background-color: ${props => props.theme['gray:600']};
      }
    }
  }
`