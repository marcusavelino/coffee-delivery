import { useContext } from "react";
import { AmountCartProduct, ContentCartAddProduct, HeaderSideBarCart, ProducCartContainer, ProductData, TotalCart } from "./styles";
import { CartContext } from "../../contexts/CartContext";
import Image from "next/image";
import Coffe from "../Product/images/coffee.png"
import { ReducerTotal } from "../../hooks/ReducerTotal";
import { ShowSideBarContext } from "../../contexts/ShowSideBarCartContext";
import { XCircle } from "phosphor-react";

export function CartSideBar() {
  const { cart } = useContext(CartContext);
  const { showSideBar, setShowSideBar } = useContext(ShowSideBarContext);
  const total = ReducerTotal(cart);

  function handleDeleteProduct(id: string) {
    console.log('jaijaij');
    //const newTasks = tasks.filter(task => task.id != id)
    //setTasks(newTasks);
  }


  return(
    <ContentCartAddProduct show={showSideBar}>
      <HeaderSideBarCart>
        <h4>Cafés selecionados</h4>
        <XCircle size={30} onClick={() => setShowSideBar(false)} />
      </HeaderSideBarCart>
      {
        cart.map((productCar, key) => {
          let price = productCar.price * productCar.amount;

          return(
            <ProducCartContainer key={key}>
              <Image src={Coffe} alt="" width={64} height={64} />
              <ProductData>
                <p>{productCar.title}</p>
                <AmountCartProduct>
                  <p>{productCar.amount}</p>
                  <button onClick={handleDeleteProduct}>Remover</button>
                </AmountCartProduct>
              </ProductData>
              <p><span>R$ {price.toLocaleString('pt-br', {minimumFractionDigits: 2})}</span></p>
            </ProducCartContainer>
          )
        })
      }
      <TotalCart><span>Total:</span> {total}</TotalCart>
    </ContentCartAddProduct>
  )
}