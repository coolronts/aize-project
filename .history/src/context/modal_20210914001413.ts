import { createContext } from "react";

const ModalContext = createContext<boolean>(true)

export const UserContextConsumer = ModalContext.Consumer;
export const UserContextProvider = ModalContext.Provider;
export default ModalContext;