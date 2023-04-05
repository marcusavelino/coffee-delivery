import { useContext } from "react";
import { Product } from "../../../components/Product";
import { ShowSideBarContext } from "../../../contexts/ShowSideBarCartContext";
import { ProductContainer } from "./styles";

export function Products() {
  interface ProductInterface {
    id: number,
    title: string,
    subTitle: string,
    price: number,
    image: string,
  }

  const products: ProductInterface[] = [
    {
      id: 1,
      title: 'Expresso Tradicional',
      subTitle: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
      image: 'coffee.png'
    },
    {
      id: 2,
      title: 'Expresso Americano',
      subTitle: 'O tradicional café feito com água quente e grãos moídos',
      price: 8.9,
      image: 'coffee.png'
    },
    {
      id: 3,
      title: 'Expresso Cremoso',
      subTitle: 'O tradicional café feito com água quente e grãos moídos',
      price: 5.9,
      image: 'coffee.png'
    },
    {
      id: 4,
      title: 'Expresso Gelado',
      subTitle: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
      image: 'coffee.png'
    },
    {
      id: 5,
      title: 'Expresso Tradicional',
      subTitle: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
      image: 'coffee.png'
    }
  ]

  return(
    <ProductContainer>
      { products.map((product) => {
        return (
        <Product
          title={product.title}
          subTitle={product.subTitle}
          image={product.image}
          price={product.price} 
          key={product.id}
        />
        )
      }) }
    </ProductContainer>
  )
}