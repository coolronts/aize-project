import { createContext, useContext } from "react"
import {Cart} from '../interfaces'
export const MyGlobalContext = createContext<Cart>({
  id: null,
  products:[],
})
export const useGlobalContext = () => useContext(MyGlobalContext)
