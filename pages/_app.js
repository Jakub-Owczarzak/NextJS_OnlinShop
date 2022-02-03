import React from 'react';

import '../styles/globals.css'
import Layout from '../components/Layout';
import { createContext } from 'react';
import { CartProvider } from '../context/storeContext';
import Busket from '../components/Busket';


function MyApp({ Component, pageProps }) {

  return (
    <CartProvider>
      <Layout>
        <Busket />
        <Component {...pageProps} />
      </Layout >
    </CartProvider>
  )


}

export default MyApp
