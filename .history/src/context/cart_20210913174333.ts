import { createContext } from "react";
import {ICart,IProduct} from '../interfaces'

const CartContext = createContext<ICart>({
  id:number,
  updateCart: (products:{[key: number]:IProduct[]})=>{}
})

export const CartContextConsumer = CartContext.Consumer
export const CartContextProvider = CartContext.Provider
export default CartContext
