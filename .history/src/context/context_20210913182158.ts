import { createContext, useContext } from "react"
import {Cart} from '../interfaces'
export const MyGlobalContext = createContext<Cart>({
copy: 'Hello World', // set a default value
setCopy: () => {},
})
export const useGlobalContext = () => useContext(MyGlobalContext)
