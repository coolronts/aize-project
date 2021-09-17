import { createContext } from "react";
import {IUserProp} from '../interfaces'
const UserContext = createContext<IUserProp>({Cart:{id:null,products:[]},addUser:(id:number)=>{}, addProduct:(id:number)=>{}, role:null, addRole:(role:string)})

export const UserContextConsumer = UserContext.Consumer;
export const UserContextProvider = UserContext.Provider;
export default UserContext;