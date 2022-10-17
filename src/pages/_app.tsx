import { AppProps } from 'next/app'
import Image from 'next/future/image'
import { Container, Header } from '../styles/pages/app'
import logoImg from '../assets/logo.svg'
import { globalStyles } from '../styles/global';
import { Handbag } from 'phosphor-react';

globalStyles();

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Container>
        <Header>
          <Image src={logoImg} alt="" />

          <button>
             <Handbag size={24} weight="bold" />
          </button>
        </Header>

        <Component {...pageProps} />
      </Container>
  )
}

