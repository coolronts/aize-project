import { createContext } from "react";
import {IUserProp, ProductCartType} from '../utils/interfaces'

//initializing the state
const UserContext = createContext<IUserProp>({
  addUser:(id:number)=>{}, 
  role:null,

  Cart:{id:null,products:[]},
  addCart:(products:ProductCartType[])=>{},
  cartQty: 0,
  
  addProduct:(id:number)=>{},
  DeleteProduct:(id:number)=>{}
})

export const UserContextConsumer = UserContext.Consumer;
export const UserContextProvider = UserContext.Provider;
export default UserContext;