import {AiOutlineClose} from 'react-icons/ai'
import '../style/cartitem.css'
function CartItem(){
    return(
       <div className="cart_item">
           <img src=""/>
           <div className="cart_product">
             <h3 className="cart_product_title">hamburger</h3>
              <div className="product_price"> 1x <span>$25</span></div>
             <div className='cart_item_icon'> 
             <span className="increase_btn">
                +
              </span>
              <span className="quantity">1</span>
              <span className="decrease_btn">
                -
              </span>
            </div>   
            <span>
                   <AiOutlineClose className="delete_btn"/>
              </span>     
           </div>
       </div>
       
    )
}
export default CartItem