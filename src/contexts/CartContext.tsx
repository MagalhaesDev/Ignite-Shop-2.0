import { createContext, ReactNode, useState } from "react";

interface ProductCart {
    id: string;
    name: string;
    imageUrl: string;
    price: string
}

interface CartContextType {
    addProductCart: (product: ProductCart) => void;
    products: ProductCart[]
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

    return (
        <CartContext.Provider value={{addProductCart, products}}>
            {children}
        </CartContext.Provider>
    )
}