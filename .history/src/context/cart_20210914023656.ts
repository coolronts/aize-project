import { createContext } from "react";
import {CartType,ICartProp} from '../interfaces'
const UserContext = createContext<ICartProp>({Cart:{id:null,products:[]},
 addToCart:(id:number)=>{}})

export const UserContextConsumer = UserContext.Consumer;
export const UserContextProvider = UserContext.Provider;
export default UserContext;

Cart: CartType,