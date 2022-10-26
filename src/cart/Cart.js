import { useState } from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import CartItem from './CartItem'
import '../style/cart.css'
function Cart({togleCart,setTogleCart}){
    const [cartProduct,setCartProduct]=useState([])
    return(
        <div className="cart_container">
            <div className='cart_menu'>
           <div className="cart_close">
              <AiOutlineClose onClick={()=>setTogleCart(!togleCart)}
              className='cart_close_icon'/>
           </div>
           <div className='cart_item_list'>
             {/* {
                cartProduct.length===0? (
                    <h3>No item added to the cart</h3>
                ):(
                    cartProduct.map((item, index) => (
                      <CartItem item={item} key={index} />
                    ))
                  )
             } */}
             <CartItem />
            <CartItem />  
           </div>
        <div className="cart_bottom">
          <h3>
            Subtotal:<span>$100</span>
          </h3>
          <button>
            <Link to="/checkout" onClick={()=>setTogleCart(!togleCart)}>
              Checkout
            </Link>
          </button>
        </div>
       </div>
    </div>
     )
}
export default Cart