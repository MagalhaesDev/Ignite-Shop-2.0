import Head from 'next/head'
import Link from 'next/link'
import Image from "next/image"

import { ButtonLeft, ButtonRight, HomeContainer, Product } from '../styles/pages/home'
import { useKeenSlider } from 'keen-slider/react'

import 'keen-slider/keen-slider.min.css'
import {  CaretRight, Handbag } from 'phosphor-react'
import { stripe } from '../lib/stripe'
import { GetStaticProps } from 'next'

import Stripe from "stripe"
import { useState } from 'react'


interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
  }[]
}

export default function Home({ products }: HomeProps) {
  const [countSlider, setCountSlider] = useState(1);
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 2,
      origin: 'center',
      spacing: 48,
    },
  })

  function handleNextProduct() {
    instanceRef.current.next()
    setCountSlider(countSlider + 1)

  }

  function handlePrevProduct() {
    instanceRef.current.prev()
    setCountSlider(countSlider - 1)

  }

  return (
    <>
      <Head>
        <title>Home | Ignite shop</title>
      </Head>

      {countSlider !== 1 &&  
        <ButtonLeft>
          <button onClick={handlePrevProduct}>
            <CaretRight size={50} />
          </button>
        </ButtonLeft>
      }

      <HomeContainer ref={sliderRef} className="keen-slider">

        {products.map(product => (
          <Link key={product.id} prefetch={false} href={`/product/${product.id}`}>
            <Product className='keen-slider__slide' >
              <Image src={product.imageUrl} alt="" width={520} height={480}/>

              <footer>
                <div>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </div>

                <button>
                  <span>
                    <Handbag size={32} weight="bold" />
                  </span>      
                </button>
              </footer>
            </Product>
          </Link>
        ))}
      </HomeContainer>

      {countSlider !== products.length && 
        <ButtonRight>
            <button onClick={handleNextProduct}>
              <CaretRight size={50} />
            </button>
        </ButtonRight>
      }

    </>
  )
}


export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(price.unit_amount / 100),
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2, // 2 hours 
  }
}
