import { createContext } from "react";
import {IUserProp} from '../interfaces'
const UserContext = createContext<IUserProp>({Cart:{id:null,products:[]},addUser:(id:number)=>{}})

export const UserContextConsumer = UserContext.Consumer;
export const UserContextProvider = UserContext.Provider;
export default UserContext;