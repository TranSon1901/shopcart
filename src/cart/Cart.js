import { useState } from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import CartItem from './CartItem'
import '../style/cart.css'
function Cart(){
    const [cartProduct,setCartProduct]=useState([])
    return(
        <div className="cart_container">
            <div className='cart_menu'>
           <div className="cart_close">
              <AiOutlineClose  className='cart_close_icon'/>
           </div>
           <div className='cart_item_list'>
             {
                cartProduct.length===0? (
                    <h6>No item added to the cart</h6>
                ):(
                    cartProduct.map((item, index) => (
                      <CartItem item={item} key={index} />
                    ))
                  )
             }
           </div>
        <div className="cart_bottom">
          <h6>
            Subtotal:<span>$100</span>
          </h6>
          <button>
            <Link to="/checkout">
              Checkout
            </Link>
          </button>
        </div>
       </div>
    </div>
     )
}
export default Cart