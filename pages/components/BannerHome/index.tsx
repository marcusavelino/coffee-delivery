import { BannerContainer, BannerText } from "./styles";
import Coffe from './images/imagem.png';
import Image from "next/image";
import { ShoppingCart, Package, Clock, Coffee } from "phosphor-react";

export function BannerHome() {
  return(
    <BannerContainer>
      <BannerText>
        <div className="title">
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h4>Com o Coffee Delivery você recebe seu café onde estiver, a <br /> qualquer hora</h4>
        </div>
        <div className="iconsText">
          <div><span className="cart"><ShoppingCart weight="fill" /></span> Compra simples e segura</div>
          <div><span className="pack"><Package weight="fill" /></span>Embalagem mantém o café intacto</div>
          <div><span className="clock"><Clock weight="fill" /></span>Entrega rápida e rastreada</div>
          <div><span className="coffe"><Coffee weight="fill" /></span>O café chega fresquinho até você</div>
        </div>
      </BannerText>
      <Image src={Coffe} alt="Coffe" />
    </BannerContainer>
  )
}