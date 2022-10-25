import {AiOutlineClose} from 'react-icons/ai'
import '../style/cartitem.css'
function CartItem(){
    return(
       <div className="cart_item">
           <img src=""/>
           <div className="cart_product">
             <h6 className="cart_product_title">hamburger</h6>
              <p className="product_price"> 1x <span>$25</span></p>
             <div>
             <span className="increase_btn">
                +
              </span>
              <span className="quantity">1</span>
              <span className="decrease_btn">
                _
              </span>
              <span className="delete_btn" >
                   <AiOutlineClose />
              </span>
            </div>        
           </div>
       </div>
       
    )
}
export default CartItem