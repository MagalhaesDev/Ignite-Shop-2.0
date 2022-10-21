import { AppProps } from 'next/app'
import Image from 'next/future/image'
import { CartIcon, Container, Header } from '../styles/pages/app'
import logoImg from '../assets/logo.svg'
import { globalStyles } from '../styles/global';
import { Handbag, X } from 'phosphor-react';
import * as Dialog from '@radix-ui/react-dialog';

import Link from 'next/link';
import { CartContext, CartContextProvider } from '../contexts/CartContext';
import { useContext } from 'react';
import { Cart } from '../components/Cart';

globalStyles();

export default function MyApp({ Component, pageProps }: AppProps) {
  const { products } = useContext(CartContext)

  return (
      <CartContextProvider>
        <Container>
        <Header>
          <Link href={`/`} prefetch={false} >
            <Image src={logoImg} alt="" />
          </Link>

          <Dialog.Root>
            <CartIcon asChild>
              <button>
                 <Handbag size={24} weight="bold" />
              </button>
            </CartIcon>

            <Cart />
          
          </Dialog.Root>
        </Header>

        <Component {...pageProps} />
      </Container>
    </CartContextProvider>
  )
}

