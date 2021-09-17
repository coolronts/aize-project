import { createContext } from "react";
import {ICommon} from '../interfaces'

//initializing the state
const UserContext = createContext<ICommon>({
  isLoading:false,
  isError:false
})

export const UserContextConsumer = UserContext.Consumer;
export const UserContextProvider = UserContext.Provider;
export default UserContext;