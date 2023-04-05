import { Header, Main, Content } from "./styles";
import Logo from "../../assets/logo.png"
import Image from "next/image";
import { ButtonIcon } from "../Buttons";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export default function Layout({ children }) {
  const { cart } = useContext(CartContext)

  return (
    <>
      <Header>
        <Image src={Logo} alt="Logo coffee Delivery" />
        <div>
          <ButtonIcon text='Brasília, DF' icon='map' color='purple' />
          <ButtonIcon text='' icon='cart' color='yellow' textSup={cart.length} />
        </div>
      </Header>
      <Main>
        <Content>
          {children}
        </Content>
      </Main>
    </>
  )
}