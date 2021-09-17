import { createContext,useState } from "react";
import {Cart,IProduct} from '../interfaces'

export const CartContext = createContext(null)
const CartContextProvider: React.FC = ({ children }) => {
  const [cart, setCart] = useState<Cart[]>([])}
