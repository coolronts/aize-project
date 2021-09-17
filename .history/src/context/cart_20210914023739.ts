import { createContext } from "react";
import {ICartProp} from '../interfaces'
const CartContext = createContext<ICartProp>({Cart:{id:null,products:[]},
 addToCart:(id:number)=>{}})

export const CartContextConsumer = CartContext.Consumer;
export const CartContextProvider = CartContext.Provider;
export default CartContext;
