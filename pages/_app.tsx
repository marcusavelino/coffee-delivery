import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import Layout from '../components/Layout/layout';
import { GlobalStyle } from '../styles/globals';
import { defaultTheme } from "../styles/themes/default";
import { Inter } from 'next/font/google'
import { useState } from 'react';
import { CartContext } from "../contexts/CartContext";

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  const [cart, setCart] = useState([]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <CartContext.Provider value={{cart, setCart}}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartContext.Provider>
    </ThemeProvider>
  )
}
