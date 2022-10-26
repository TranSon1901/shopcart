import {createContext, useState} from 'react'
import products from './assets/fakedata/products'
export const ProductCart=createContext()
function ProvideContext( {children} ){
    const datacart=JSON.parse(localStorage.getItem('cart'))
    const [cart,setCart]=useState(JSON.parse(localStorage.getItem('cart'))??[])
    const addCart=(id)=>{
        const check= cart.every(item=>item.id !==id)
        if(check){
            const productcart=products.filter(item=>(item.id===id))
           const localcart=JSON.stringify([...cart,...productcart])
           localStorage.setItem("cart",localcart)
            setCart([...cart,...productcart])
        } else{
           alert('ban da mua')
        }    
    }
    return(
        <ProductCart.Provider value={{cart,addCart}}>
          {children}
       </ProductCart.Provider>
    )
}
export default ProvideContext