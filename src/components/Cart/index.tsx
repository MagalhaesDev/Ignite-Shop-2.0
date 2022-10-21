import { ButtonBuyProduct, CloseButton, Content, Overlay, Product, ProductContainer, ProductDescription, ProductImageContainer, SummaryProduct, TitleCart } from "./styles";
import Image from 'next/future/image'
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { X } from "phosphor-react";
import { formatPrice } from "../../utils/format";


export function Cart() {
    const { products } = useContext(CartContext)

    const amountTotal = products.reduce((acc, item) => {
      return acc += Number(item.price)
    }, 0)

  

    return (
     <>
        <Overlay />

        <Content>
        <CloseButton>
          <X size={32} />
        </CloseButton>

        <TitleCart>Sacola de compras</TitleCart>

        <ProductContainer>
  
         {products.map(product => (
           <Product key={product.id}>
             <ProductImageContainer>
               <Image src={product.imageUrl} alt="" width={94} height={94}/>
             </ProductImageContainer>
 
             <ProductDescription>
               <h3>{product.name}</h3>
               <p>{formatPrice(Number(product.price) / 100)}</p>
               <button>Remover</button>
             </ProductDescription>
           </Product>
         ))}

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