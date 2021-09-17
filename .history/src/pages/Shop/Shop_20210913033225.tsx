import React,{useState, useEffect} from 'react';
import Card from "../../components/Card/Card"
import {IProduct} from "../../interfaces"
import {Post} from "../../api/api"

const Shop: React.FunctionComponent = () => {

  const [loading,setLoading] = useState<boolean>(false)
  const [list,setList] = useState<IProduct[]>([])
  const [isError,setIsError] = useState<boolean>(false)


  useEffect(()=>{
    setLoading(true)
    Post.getProducts()
    .then((response)=>{
      setList(response)
      setLoading(false)
    })
    .catch((error)=>setIsError(true))
  },[])

  return (
    <>
      {(!loading && !isError) && (
        <div className="list">
          {list.map((element,index)=>(
            <div  className="card" key={index}>
              <Card product={element} />
            </div>    
          ))}
        </div>
      )}
    </>
    )
  };

export default Shop;
