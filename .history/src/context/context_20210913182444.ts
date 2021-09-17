import { createContext, useContext } from "react"
import {Cart} from '../interfaces'
export const CartContext = createContext<Cart>({
  id: null,
  products:[],
})
export const useGlobalContext = () => useContext(CartContext)
