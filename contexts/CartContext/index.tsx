import { Dispatch, SetStateAction, createContext } from "react";

interface CartProduct {
  id: number;
  title: string;
  amount: number;
  price: number;
}

interface CartProduct {
  cart: CartProduct[] | undefined;
  setCart: Dispatch<SetStateAction<CartProduct[]>>;
}

export const CartContext = createContext({} as CartProduct);