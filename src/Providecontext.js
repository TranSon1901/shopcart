import {createContext, useState} from 'react'
import products from './assets/fakedata/products'
export const ProductCart=createContext()
function ProvideContext( {children} ){
    const [cart,setCart]=useState(products)
    const addCart=()=>{

    }
    return(
        <ProductCart.Provider value={{cart,addCart}}>
          {children}
       </ProductCart.Provider>
    )
}
export default ProvideContext