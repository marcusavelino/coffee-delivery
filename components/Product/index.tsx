import { ProductCart, ProductContent, ProductData, ProductPrice } from "./styles";
import  ImageCoffe from './images/coffee.png'
import Image from "next/image";
import { ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { ShowSideBarContext } from "../../contexts/ShowSideBarCartContext";

export function Product({ title, subTitle, price, image }) {
  const { cart, setCart } = useContext(CartContext);
  const { showSideBar, setShowSideBar } = useContext(ShowSideBarContext);

  function addProductCart({target}) {
    event.preventDefault();

    let price = target.priceProduct.value;
    let title = target.tileProduct.value;
    let amount = target.amountProduct.value;

    let obj = {
      title: title,
      price: price,
      amount: amount
    }

    setCart(state => {
      return [...state, obj]
    })
  }

  return (
    <ProductContent>
      <Image src={ImageCoffe} alt="" />
      <span className="tag">TRADICIONAL</span>
      <h4>{ title }</h4>
      <p>{ subTitle }</p>
      <ProductData>
        <ProductPrice><span>R$</span>{ price }</ProductPrice>
        <ProductCart>
          <form onSubmit={addProductCart}>
            <input name="tileProduct" value={title} hidden readOnly />
            <input name="priceProduct" value={price} hidden readOnly />
            <input name="amountProduct" type="number" defaultValue={1} />
          <button onClick={() => setShowSideBar(true)}><ShoppingCart weight="fill" size={22} /></button>
          </form>
        </ProductCart>
      </ProductData>
    </ProductContent>
  )
}