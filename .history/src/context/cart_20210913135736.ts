import { createContext } from "react";
import {ICartProp,IProduct} from '../interfaces'

const CartContext = createContext<ICartProp>({
  products:{},
  updateCart: (products:{[key: number]:IProduct[]})=>{}
})

export const CartContextConsumer = CartContext.Consumer
export const CartContextProvider = CartContext.Provider
export default CartContext
