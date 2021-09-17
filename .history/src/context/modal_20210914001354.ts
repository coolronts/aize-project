import { createContext } from "react";

const ModalContext = createContext<boolean>({id:null,addUser:(id:number)=>{}})

export const UserContextConsumer = ModalContext.Consumer;
export const UserContextProvider = ModalContext.Provider;
export default ModalContext;