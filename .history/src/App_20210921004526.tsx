import React, { useState, useEffect } from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';

//components
import Cart from "./pages/Cart/Cart"
import Shop from "./pages/Shop/Shop"
import Modal from "./components/Modal/Modal"
import Header from "./components/Header/Header"

//context
import {UserContextProvider} from './context/user'
import {CommonContextProvider} from './context/common'

//interface
import {ProductCartType, IProduct} from './utils/interfaces'

//api
import {Get, Delete} from './api/api'

//LogRocket
import LogRocket from 'logrocket';
LogRocket.init('vxyzql/e-shop');

const App: React.FunctionComponent = () => {
  //States
  
  //user States
  const [id, setId] = useState<number|null>(null)
  const [role, setRole]= useState<'ADMIN'|'CUSTOMER'|null>(null)

  //product States
  const [products, setProducts] = useState<ProductCartType[]>([])
  const [allProducts, setAllProducts] = useState<IProduct[]>([])
  const [cartQty, setCartQty] = useState<number>(0)

  //common States
  const [isLoading,setIsLoading] = useState<boolean>(false)
  const updateIsLoading = (state:boolean)=>{setIsLoading(state)}

  const [isError,setIsError] = useState<boolean>(false)
  const updateIsError = (state:boolean)=>{setIsError(state)}

  const [isEdit, setIsEdit] = useState<string>('')
  const updateIsEdit = (type:string)=>{setIsEdit(type)}

  const [isAdd, setIsAdd] = useState<boolean>(false)
  const updateIsAdd = (state:boolean)=>{setIsAdd(state)}

  const [isSearch, setIsSearch] = useState<boolean>(false)
  const updateIsSearch = (state:boolean)=>{setIsSearch(state)},

  
  const [selectedProduct, setSelectedProduct] = useState<IProduct>({} as IProduct)
  const updateSelectedProduct = (product: IProduct)=>{setSelectedProduct(product)}

  
  const getAllProducts = ()=>{
    updateIsLoading(true)
    Get.getProducts()
    .then(response => (setAllProducts(response.reverse())))
    .catch(error => (setIsError(error)))
    updateIsLoading(false)
  }

  const addUser = (_id:number) =>{
    updateIsLoading(true)
    setId(()=>_id);
    (_id%2===0) ? setRole(()=>'CUSTOMER') : setRole(()=>'ADMIN')
    updateIsLoading(false)
  }

  const addCart = async (_cart:ProductCartType[])=>{setProducts(()=>(_cart))}

  const addProduct = (_id:number, _quantity:number) =>{
    const foundProduct = products.find(x => x.id === _id)
    if(foundProduct){foundProduct.quantity += _quantity}
    else{setProducts(products.concat({id:_id,quantity:_quantity}))}
    setCartQty(()=>cartQty+1)
  }

  const DeleteProduct = (id:number)=>{
    updateIsLoading(true)
    Delete.deleteProduct(id)
    .then(() => getAllProducts())
  }

  useEffect(() =>{
    LogRocket.identify('THE_USER_ID_IN_YOUR_APP', {
      name: 'Zahid Ronty',
      email: 'zahid.ronty@gmail.com',
    
      // Add your own custom user variables here, ie:
      subscriptionType: 'pro'
    });
    if(id != null){
      updateIsLoading(true)
      Get.getUserCart(id)
      .then(response =>{
        if(response.products != null){
          addCart(response.products)
          let totalQty = 0 
          response.products.map((product) => totalQty += product.quantity)
          setCartQty(totalQty)
          updateIsLoading(false)}
        }
      )}
  },[id])

  const userContextValues ={Cart:{id,products},cartQty, role,addUser,addProduct, addCart, DeleteProduct}
  const commonContextValues = {selectedProduct, updateSelectedProduct, isLoading, isError, updateIsError, updateIsLoading, allProducts,  getAllProducts, isEdit, updateIsEdit, isAdd, updateIsAdd}

  return (
    <CommonContextProvider value={commonContextValues}>
      <UserContextProvider value={userContextValues}>
        {(id==null || isLoading ) && <Modal/>}
        <BrowserRouter>
          {!isAdd && isEdit==='' &&  <Header/>}
          <Switch>
            <Route path="/" exact component={Shop}/>
            <Route path="/cart" exact component={Cart}/>
          </Switch>
        </BrowserRouter>
      </UserContextProvider> 
    </CommonContextProvider>
  )
};

export default App;
