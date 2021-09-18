import { createContext } from "react";
import {ICommon,IProduct} from '../utils/interfaces'

//initializing the state
const CommonContext = createContext<ICommon>({
  isLoading:false,
  updateIsLoading:(state:boolean) =>{},

  isError:false,
  updateIsError:(state:boolean) =>{},

  isEdit:'',
  updateIsEdit:(type:string)=>{},

  isAdd:false,
  updateIsAdd:(state:boolean)=>{},

  allProducts:[],
  getAllProducts:()=>{},
  
  selectedProduct:{} as IProduct,
  updateSelectedProduct:(product:IProduct|null)=>{},
  
})

export const CommonContextConsumer = CommonContext.Consumer;
export const CommonContextProvider = CommonContext.Provider;
export default CommonContext;