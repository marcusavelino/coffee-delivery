import React from "react";
import { ButtonStyled } from "./styles";
import { MapPin, ShoppingCart } from "phosphor-react";

interface ButtonIconType {
  text: string;
  icon: string;
  color: string;
  textSup?: string | number;
}

export function ButtonIcon({ text, icon, color, textSup }: ButtonIconType) {
  return(
    <ButtonStyled color={color}>
      { icon == 'map' && <MapPin  size={25} weight="fill" /> }
      { icon == 'cart' && <ShoppingCart   size={25} weight="fill" /> }    
      {text}
      <sup>{textSup}</sup>
    </ButtonStyled>
  )
}