import { AppProps } from 'next/app'
import Image from 'next/future/image'
import { Cart, CloseButton, Container, Content, Header, ProductImageContainer, Product, ProductContainer, ProductDescription, Overlay, SummaryProduct, ButtonBuyProduct, TitleCart } from '../styles/pages/app'
import logoImg from '../assets/logo.svg'
import { globalStyles } from '../styles/global';
import { Handbag, X } from 'phosphor-react';
import * as Dialog from '@radix-ui/react-dialog';

import imgProduct from '../assets/1.png'

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

              <TitleCart>Sacola de compras</TitleCart>

              <ProductContainer>
                <Product>
                  <ProductImageContainer>
                    <Image src={imgProduct} alt="" width={94} height={94}/>
                  </ProductImageContainer>

                  <ProductDescription>
                    <h3>Camiseta Beyond the Limits</h3>
                    <p>R$ 79,90</p>
                    <button>Remover</button>
                  </ProductDescription>
                </Product>

                <Product>
                  <ProductImageContainer>
                    <Image src={imgProduct} alt="" width={94} height={94}/>
                  </ProductImageContainer>

                  <ProductDescription>
                    <h3>Camiseta Beyond the Limits</h3>
                    <p>R$ 79,90</p>
                    <button>Remover</button>
                  </ProductDescription>
                </Product>

                <Product>
                  <ProductImageContainer>
                    <Image src={imgProduct} alt="" width={94} height={94}/>
                  </ProductImageContainer>

                  <ProductDescription>
                    <h3>Camiseta Beyond the Limits</h3>
                    <p>R$ 79,90</p>
                    <button>Remover</button>
                  </ProductDescription>
                </Product>

                <Product>
                  <ProductImageContainer>
                    <Image src={imgProduct} alt="" width={94} height={94}/>
                  </ProductImageContainer>

                  <ProductDescription>
                    <h3>Camiseta Beyond the Limits</h3>
                    <p>R$ 79,90</p>
                    <button>Remover</button>
                  </ProductDescription>
                </Product>

                

              </ProductContainer>

              <SummaryProduct>
                <div>
                  <p>Quantidade</p>
                  <span>3 itens</span>
                </div>

                <div>
                  <h4>Valor total</h4>
                  <strong>R$ 270,00</strong>
                </div>
              </SummaryProduct>

              <ButtonBuyProduct>
                  Finalizar compra
              </ButtonBuyProduct>
            </Content>
          </Dialog.Root>
        </Header>

        <Component {...pageProps} />
      </Container>
  )
}

