import Header from '@/components/header'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react';
import {QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient()
export default function App({ Component, pageProps }: AppProps) {

  const [cart,setCart] = useState([]);
  const [total, setTotal] = useState(0);


  // add to cart
  function addToCart(price:number,name:string){
    console.log(price,name)
    let newObj = {
      "name":name,"price":price
    }
    setCart(cart => cart.concat(newObj))
    setTotal(total+price)
  }


  // remove from cart
  function removeFromCart(no:number,price:number){
    console.log(no)
    let newCart = cart;
    newCart.splice(no,1)
    setCart(newCart)
    setTotal(total-price)
  }


  return (
    <>
      <QueryClientProvider client={queryClient}>
      <Header 
      addCart = {addToCart}
      removeCart = {removeFromCart}
      cartdata = {cart}
      total = {total}
      />
      <Component addCart = {addToCart} {...pageProps} />
      </QueryClientProvider>
    </>
  )
}
