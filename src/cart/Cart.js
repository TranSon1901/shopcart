import { useState } from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import CartItem from './CartItem'
import '../style/cart.css'
import {useContext} from 'react'
import {ProductCart} from '../Providecontext'
function Cart({togleCart,setTogleCart}){
    const data= useContext(ProductCart)
    const {cart,deteleCart,increase,decrease,total}=data  
    return(
        <div className="cart_container">
          <div className={togleCart?'cart_modal':""}
          onClick={()=>setTogleCart(!togleCart)}
          ></div>
          <div className={togleCart? 'cart_menu cart_menu-show':'cart_menu'}>
           <div className="cart_close">
              <AiOutlineClose onClick={()=>setTogleCart(!togleCart)}
              className='cart_close_icon'/>
           </div>
           <div className='cart_item_list'>
             {
                cart.length===0? (
                    <h3 style={{padding:15}}>No item added to the cart</h3>
                ):(
                    cart.map((item,index) => (
                      <CartItem 
                      deteleCart={deteleCart}
                      item={item}
                      index={index} 
                      key={item.id} 
                      id={item.id}
                      decrease={decrease}
                      increase={increase}
                      total={total}
                      />
                    ))
                  )
             }
           </div>
        <div className="cart_bottom">
          <h3>
            Subtotal:<span>${total}</span>
          </h3>
          <button>
            <Link to="shopcart/checkout" onClick={()=>setTogleCart(!togleCart)}>
              Checkout
            </Link>
          </button>
        </div>
       </div>
    </div>
     )
}
export default Cart