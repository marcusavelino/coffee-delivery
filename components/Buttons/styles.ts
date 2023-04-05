import styled from "styled-components";

export const ButtonStyled = styled.button`
  position: relative;
  border: none;
  padding: 8px;
  border-radius: 6px;
  gap: 4px;
  display: flex;
  align-items: center;

  ${props => props.color == 'purple' && 'background-color:' + props.theme['purple-200'] + '; color:' + props.theme['purple-400']};
  ${props => props.color == 'yellow' && 'background-color:' + props.theme['yellow-200'] + '; color:' + props.theme['yellow-600']};

  sup {
    color: white;
    position: absolute;
    padding: 4px 7px;
    right: -10px;
    top: -10px;
    border-radius: 999px;
    ${props => props.color == 'yellow' && 'background-color:' + props.theme['yellow-600'] + '; color:' + props.theme['white']};
  }
`