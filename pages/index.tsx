import { useContext, useState } from "react";
import { CartSideBar } from "../components/CartSidebar";
import { BannerHome } from "./components/BannerHome";
import { Products } from "./components/Products";
import { ProdcutTitle } from "./styles";
import { ShowSideBarContext } from "../contexts/ShowSideBarCartContext";

export default function Home() {
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <>
      <BannerHome />
      <ProdcutTitle>Nossos cafés</ProdcutTitle>
      <ShowSideBarContext.Provider value={{showSideBar, setShowSideBar}}>
        <Products />
        <CartSideBar />
      </ShowSideBarContext.Provider>
    </>
  )
}