import Stripe from 'stripe'
import {  GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useContext, useState } from 'react';
import { stripe } from '../../lib/stripe';
import { ImageContainer, ProductContainer, ProductDetails } from '../../styles/pages/product';
import { CartContext } from '../../contexts/CartContext';
import { formatPrice } from '../../utils/format';
import { v4 as uuidv4 } from "uuid";


interface ProductItem {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    description: string;
    defaultPriceId: string;
}

interface ProductProps {
    product: ProductItem
}

export default function Product({product}: ProductProps) {
    const [ isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)
    const { addProductCart } = useContext(CartContext)
    


    function handleAddProductCart({id, name, imageUrl, price, defaultPriceId}: ProductItem) {
        const keyValue = uuidv4()

        addProductCart({id, name, imageUrl, price, defaultPriceId, keyValue})
    }

    return (
        <>
          <Head>
              <title>{product.name} | Ignite shop</title>
          </Head>

          <ProductContainer>
            <ImageContainer>
                <Image src={product.imageUrl} width={520} height={480} alt='' />
            </ImageContainer>
            <ProductDetails>
                <h1>{product.name}</h1>
                <span>{formatPrice(Number(product.price) / 100)}</span>
              
                <p>{product.description}</p>

                <button disabled={isCreatingCheckoutSession} onClick={() => handleAddProductCart(product)}>Colocar na sacola</button>
            </ProductDetails>
          </ProductContainer>
        </>
    )
}


export const getStaticPaths: GetStaticPaths = async () => {
    return {
      paths: [
        { params: {id: 'prod_MXIP6I84ovIZX2'}}
      ],
      fallback: true,
    }
  }

export const getStaticProps: GetStaticProps<any, {id: string}> = async ({ params }) => {
    const productId = params.id;

    const product = await stripe.products.retrieve(productId, {
        expand: ['default_price']
    });

    const price = product.default_price as Stripe.Price

    return {
        props: {
            product: {
                id: product.id,
                name: product.name,
                imageUrl: product.images[0],
                price: price.unit_amount,
                description: product.description,
                defaultPriceId: price.id,
            }
        },
        revalidate: 60 * 60 * 1, // 1 hour
    }
}