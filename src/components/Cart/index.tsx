import { ButtonBuyProduct, CloseButton, Content, EmptyCart, Overlay, Product, ProductContainer, ProductDescription, ProductImageContainer, SummaryProduct, TitleCart } from "./styles";
import Image from 'next/future/image'
import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Handbag, X } from "phosphor-react";
import { formatPrice } from "../../utils/format";
import { keyframes } from "@stitches/react";

interface CartProps {
  closeCartShopping: () => void;
  animation: string
}


export function Cart({closeCartShopping, animation}:CartProps) {
    const { products, removeProductCart } = useContext(CartContext)
    const amountTotal = products.reduce((acc, item) => {
      return acc += Number(item.price)
    }, 0)

    function handleRemoveProductCart(id: string) {
      removeProductCart(id)
    }

    return (
     <>
        <Overlay />

        <Content  style={{ animation: `${animation}` }}>
        <CloseButton onClick={closeCartShopping}>
          <X size={32} />
        </CloseButton>

        <TitleCart>Sacola de compras</TitleCart>
 
        <ProductContainer>

          {
            products.length === 0 ?
            <EmptyCart>
              <Handbag size={48} weight="bold" />
              <h4>Sacola está vazia</h4>
              <p>Adicione algum produto !</p>
            </EmptyCart>
            :
            products.map(product => ( 
              <Product key={product.id}>
                <ProductImageContainer>
                  <Image src={product.imageUrl} alt="" width={94} height={94}/>
                </ProductImageContainer>
    
                <ProductDescription>
                  <h3>{product.name}</h3>
                  <p>{formatPrice(Number(product.price) / 100)}</p>
                  <button onClick={() => handleRemoveProductCart(product.id)}>Remover</button>
                </ProductDescription>
              </Product>
            ))
          }

        </ProductContainer>

        <SummaryProduct>
          <div>
            <p>Quantidade</p>
            <span>{products.length === 1 ? `${products.length} item` : `${products.length} itens`}</span>
          </div>

          <div>
            <h4>Valor total</h4>
            <strong>{formatPrice(amountTotal / 100)}</strong>
          </div>
       </SummaryProduct>

       <ButtonBuyProduct>
          Finalizar compra
       </ButtonBuyProduct>
       </Content>
     </>
    )
}