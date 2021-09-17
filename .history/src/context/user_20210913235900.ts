import { createContext } from "react";
import {IUserProp} from '../interfaces'
const UserContext = createContext<IUserProp>({id:null,addUser:(id:number)=>{}})

export const UserContextConsumer = UserContext.Consumer;
export const UserContextProvider = UserContext.Provider;