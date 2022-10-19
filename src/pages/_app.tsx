import { AppProps } from 'next/app'
import Image from 'next/future/image'
import { Cart, CloseButton, Container, Content, Header, ItensContainer, Overlay } from '../styles/pages/app'
import logoImg from '../assets/logo.svg'
import { globalStyles } from '../styles/global';
import { Handbag, X } from 'phosphor-react';
import * as Dialog from '@radix-ui/react-dialog';

globalStyles();

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Container>
        <Header>
          <Image src={logoImg} alt="" />

          <Dialog.Root>
            <Cart asChild>
              <button>
                 <Handbag size={24} weight="bold" />
              </button>
            </Cart>

            <Overlay />

            <Content>
              <CloseButton>
                <X size={32} />
              </CloseButton>

              <Dialog.Title>Sacola de compras</Dialog.Title>

              <ItensContainer>
                
              </ItensContainer>
            </Content>
          </Dialog.Root>
        </Header>

        <Component {...pageProps} />
      </Container>
  )
}

