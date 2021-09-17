import { createContext } from "react";
import {ICommon} from '../interfaces'

//initializing the state
const CommonContext = createContext<ICommon>({
  isLoading:false,
  isError:false,
  updateIsLoading:(state:boolean) =>{},
  updateIsError:(state:boolean) =>{},
  allProducts:[],
  getAllProducts:()=>{},
  isEdit:'',
  updateIsEdit:(type:string)=>{},
  selectedProduct:null
})

export const CommonContextConsumer = CommonContext.Consumer;
export const CommonContextProvider = CommonContext.Provider;
export default CommonContext;