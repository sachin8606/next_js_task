import Head from 'next/head'
import MediaCard from '@/components/card'
import { useQuery } from 'react-query';
import style from '../styles/Home.module.css'
export default function Home(props:any) {

  // fetch product data from api
  const { isLoading, error, data } = useQuery('data', () =>
    fetch('https://dummyjson.com/products?limit=12').then(res => {
      console.log(res)
      let result = res.json()
      return result;
    }
    ),
    {
      staleTime: 60 * 1000
    }
  )


  // add to cart

  function addToCart(name:string,price:number){
    console.log(name,price)
    props.addCart(price,name)
  }

  // while Fetching data
  if (isLoading) {
    return <>Loading...</>
  }

  // Handle error
  else if (error) {
    return <>Error</>
  }
  


  else {
    return (
      <>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={style.main}>
          {data.products && data.products.map((item: any, index: any) => {
            return (
              <MediaCard
                key={index}
                addToCart = {addToCart}
                no={index}
                pname={item.title}
                detail={item.description}
                price={item.price}
                img={item.thumbnail}
              />
            )
          })}
        </main>
      </>
    )
  }
}
