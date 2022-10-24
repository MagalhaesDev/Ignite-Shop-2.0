import Head from "next/head";
import Image from "next/future/image";
import Link from "next/link";
import { stripe } from "../lib/stripe";
import { GetServerSideProps } from "next";
import Stripe from "stripe";

import { ImagesContainer, SuccessContainer } from "../styles/pages/success";
import { Plus } from "phosphor-react";

interface SuccessProps {
    customerName: string;
    products: {
        id: string;
        price: {
            product: {
                images: string
            }
        }
    }[]
}

export default function Success({customerName, products}:SuccessProps) {
    return (
        <>
         <Head>
             <title>Compra efetuada | Ignite shop</title>

             <meta name="robots" content="noindex" />
         </Head>

         <SuccessContainer>
             <ImagesContainer>
                {
                  products.map((product, index) => {
                      if(index < 3) {
                        return (
                        <div key={product.id}>
                          <Image src={product.price.product.images[0]} width={120} height={110} alt=""/>
                        </div>
                        )
                      } else {
                          return
                      }
                  })
                }
                
                {
                    products.length > 3 && <span><Plus weight="bold" size={40}/></span>
                }
             </ImagesContainer>


             <h1>Compra efetuada!</h1>

             <p>
                 Uhuull <strong>{customerName}</strong>, sua compra de {products.length} {products.length <= 1 ? `camiseta` : `camisetas`} já está a caminho da sua casa.
             </p>

             <Link href="/">
                Voltar ao catálogo
             </Link>
             
         </SuccessContainer>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({query}) => {

    if(!query.session_id) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            }
        }
    }

    const sessionId = String(query.session_id);

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
        expand: ['line_items', 'line_items.data.price.product']
    })

    const customerName = session.customer_details.name;
    const products = session.line_items.data

    return {
        props: {
            customerName,
            products,
        }
    }
}