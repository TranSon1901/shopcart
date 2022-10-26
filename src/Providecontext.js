import {createContext, useEffect, useState} from 'react'
import products from './assets/fakedata/products'
export const ProductCart=createContext()
function ProvideContext( {children} ){
    const [cart,setCart]=useState(()=>(JSON.parse(localStorage.getItem('cart'))??[]))
    const [total,setTotal]=useState(0)  
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
    const deteleCart=(index,id)=>{
         const newCart= [...cart]
         cart.forEach(item=>{
            if(item.id===id){
                item.count=1
            }
         })
         newCart.splice(index,1)
         const localcart=JSON.stringify([...newCart])
         localStorage.setItem("cart",localcart)
         setCart(newCart)
    }
    const increase=(id)=>{
      cart.forEach(item=>{
        if(item.id===id){
            item.count+=1
        }
        setCart([...cart])
      })
    }
    const decrease=(id)=>{
        cart.forEach(item=>{
            if(item.id===id){
             item.count=== 1? item.count=1:item.count-=1
            }
        })
        setCart([...cart])
    } 
    useEffect(()=>{
      const cartTotal=cart.reduce((cur,item)=>(cur+item.price*item.count),0)
      setTotal(cartTotal)
    },[cart])
    return(
        <ProductCart.Provider 
        value={{cart,addCart,deteleCart,increase,decrease,total}}>
          {children}
       </ProductCart.Provider>
    )
}
export default ProvideContext