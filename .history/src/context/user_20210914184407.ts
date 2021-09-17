import { createContext } from "react";
import {IUserProp, ProductCartType,IProduct} from '../interfaces'

//initializing the state
const UserContext = createContext<IUserProp>({
  Cart:{id:null,products:[]},
  ProductsInfo: [],
  role:null,
  cartQty: 0,
  addCart:(products:ProductCartType[])=>{},
  addUser:(id:number)=>{}, 
  addProduct:(id:number)=>{},
  addProductInfo:(product:IProduct)=>{},
})

export const UserContextConsumer = UserContext.Consumer;
export const UserContextProvider = UserContext.Provider;
export default UserContext;