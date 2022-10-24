import { AppProps } from 'next/app'
import Image from 'next/future/image'
import { CartIcon, Container, Header } from '../styles/pages/app'
import logoImg from '../assets/logo.svg'
import { globalStyles } from '../styles/global';
import { Handbag, X } from 'phosphor-react';
import * as Dialog from '@radix-ui/react-dialog';

import Link from 'next/link';
import { CartContext, CartContextProvider } from '../contexts/CartContext';
import { useContext, useState } from 'react';
import { Cart } from '../components/Cart';
import { keyframes } from '@stitches/react';

globalStyles();

export default function MyApp({ Component, pageProps }: AppProps) {
  const [animation, setAnimation] = useState('');

  const openAnimation = keyframes({
    '0%': { transform: 'translateX(100%)' },
    '100%': { transform: 'translateX(0%)' },
  });

  const closeAnimation = keyframes({
    '0%': { transform: 'translateX(0%)' },
    '100%': { transform: 'translateX(100%)' },
  });


  function openCartShopping() {
    setAnimation(`${openAnimation} 200ms`)

  }


  function closeCartShopping() {
    setAnimation(`${closeAnimation} 200ms`)

  }

  return (
      <CartContextProvider>
        <Container>
        <Header>
          <Link href={`/`} prefetch={false} >
            <Image src={logoImg} alt="" />
          </Link>

          <Dialog.Root>
            <CartIcon asChild>
              <button onClick={openCartShopping}>
                 <Handbag size={24} weight="bold" />
              </button>
            </CartIcon>

            <Cart  animation={animation} closeCartShopping={closeCartShopping}/>
          
          </Dialog.Root>
        </Header>

        <Component {...pageProps} />
      </Container>
    </CartContextProvider>
  )
}

