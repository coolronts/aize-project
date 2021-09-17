import { createContext } from "react";
import {ICommon,IProduct} from '../interfaces'

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
  selectedProduct:{} as IProduct,
  updateSelectedProduct:(product:IProduct|null)=>{},
  isAdd:false,
  updateIsAdd:(state:string)=>{}
})

export const CommonContextConsumer = CommonContext.Consumer;
export const CommonContextProvider = CommonContext.Provider;
export default CommonContext;