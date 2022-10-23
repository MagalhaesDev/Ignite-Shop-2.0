import { createContext, ReactNode, useState } from "react";

interface ProductCart {
    id: string;
    name: string;
    imageUrl: string;
    price: string
}

interface CartContextType {
    addProductCart: (product: ProductCart) => void;
    removeProductCart: (id: string) => void;
    products: ProductCart[],
}

interface CartProviderProps {
    children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({children}: CartProviderProps) {
    const [products, setProducts] = useState<ProductCart[]>([])
    
    function addProductCart({id, name, imageUrl, price}: ProductCart) {
        const newProduct = {
            id,
            name,
            imageUrl,
            price
        }

        setProducts([...products, newProduct])
    }

    function removeProductCart(id: string) {
        const updateProduct = [...products]

        const productIndex = updateProduct.findIndex(product => product.id === id)

        updateProduct.splice(productIndex, 1)

        setProducts(updateProduct)
    }

    return (
        <CartContext.Provider value={{addProductCart, products, removeProductCart}}>
            {children}
        </CartContext.Provider>
    )
}