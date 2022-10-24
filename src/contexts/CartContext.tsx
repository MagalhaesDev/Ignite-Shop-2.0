import { createContext, ReactNode, useState } from "react";

interface ProductCart {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    defaultPriceId: string;
    keyValue: string;
}

interface CartContextType {
    addProductCart: (product: ProductCart) => void;
    removeProductCart: (id: string) => void;
    cart: ProductCart[],
}

interface CartProviderProps {
    children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({children}: CartProviderProps) {
    const [cart, setProducts] = useState<ProductCart[]>([])
    
    function addProductCart({id, name, imageUrl, price, defaultPriceId, keyValue}: ProductCart) {
        const newProduct = {
            id,
            keyValue,
            name,
            imageUrl,
            price,
            defaultPriceId
        }

        setProducts([...cart, newProduct])
    }

    function removeProductCart(id: string) {
        const updateProduct = [...cart]

        const productIndex = updateProduct.findIndex(product => product.id === id)

        updateProduct.splice(productIndex, 1)

        setProducts(updateProduct)
    }

    return (
        <CartContext.Provider value={{addProductCart, cart, removeProductCart}}>
            {children}
        </CartContext.Provider>
    )
}