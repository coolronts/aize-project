import { createContext } from "react";
import {IUserProp, ProductCartType, IProduct} from '../interfaces'

//initializing the state
const UserContext = createContext<IUserProp>({
  Cart:{id:null,products:[]},
  ProductsInfo:IProduct[],
  role:null,
  cartQty: 0,
  addCart:(products:ProductCartType[])=>{},
  addUser:(id:number)=>{}, 
  addProduct:(id:number)=>{}
})

export const UserContextConsumer = UserContext.Consumer;
export const UserContextProvider = UserContext.Provider;
export default UserContext;