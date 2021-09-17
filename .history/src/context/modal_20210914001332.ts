import { createContext } from "react";

const UserContext = createContext<boolean>({id:null,addUser:(id:number)=>{}})

export const UserContextConsumer = UserContext.Consumer;
export const UserContextProvider = UserContext.Provider;
export default UserContext;