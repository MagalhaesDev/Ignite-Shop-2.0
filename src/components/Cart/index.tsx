import { ButtonBuyProduct, CloseButton, Content, EmptyCart, Overlay, Product, ProductContainer, ProductDescription, ProductImageContainer, SummaryProduct, TitleCart } from "./styles";
import Image from 'next/future/image'
import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Handbag, X } from "phosphor-react";
import { formatPrice } from "../../utils/format";
import { keyframes } from "@stitches/react";
import axios from "axios";

interface CartProps {
  closeCartShopping: () => void;
  animation: string
}


export function Cart({closeCartShopping, animation}:CartProps) {
    const { cart, removeProductCart } = useContext(CartContext)
    const [ isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

<<<<<<< HEAD

=======
>>>>>>> 1dfd6ab1503832261b183a8b7894e1e25026ebcd
    const filteredPriceIdCart = cart.map(item => {
      return {
        price: item.defaultPriceId,
        quantity: 1
      }
    })

    const amountTotal = cart.reduce((acc, item) => {
      return acc += Number(item.price)
    }, 0)


    function handleRemoveProductCart(id: string) {
      removeProductCart(id)
    }

    async function handleBuyProduct() {
      try {
        setIsCreatingCheckoutSession(true);

        const response = await axios.post('/api/checkout', {
          pricesId: filteredPriceIdCart
        })

        const { checkoutUrl } = response.data;

        window.location.href = checkoutUrl
      }

      catch (err) {
        setIsCreatingCheckoutSession(false);

        alert('Falha ao redirecionar ao checkout!');
      }
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
            cart.length === 0 ?
            <EmptyCart>
              <Handbag size={48} weight="bold" />
              <h4>Sacola está vazia</h4>
              <p>Adicione algum produto !</p>
            </EmptyCart>
            :
            cart.map(product => ( 
              <Product key={product.keyValue}>
                <ProductImageContainer>
                  <Image src={product.imageUrl} alt="" width={94} height={94}/>
                </ProductImageContainer>
    
                <ProductDescription>
                  <h3>{product.name}</h3>
                  <p>{formatPrice(Number(product.price) / 100)}</p>
                  <button onClick={() => handleRemoveProductCart(product.keyValue)}>Remover</button>
                </ProductDescription>
              </Product>
            ))
          }

        </ProductContainer>

        <SummaryProduct>
          <div>
            <p>Quantidade</p>
            <span>{cart.length === 1 ? `${cart.length} item` : `${cart.length} itens`}</span>
          </div>

          <div>
            <h4>Valor total</h4>
            <strong>{formatPrice(amountTotal / 100)}</strong>
          </div>
       </SummaryProduct>

       <ButtonBuyProduct onClick={handleBuyProduct}>
          Finalizar compra
       </ButtonBuyProduct>
       </Content>
     </>
    )
}
