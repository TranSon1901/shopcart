import {AiOutlineClose} from 'react-icons/ai'
import '../style/cartitem.css'
function CartItem(prop){
  const{title,price,image01,count} = prop.item
    return(
       <div className="cart_item">
           <img src={image01}/>
           <div className="cart_product">
             <h3 className="cart_product_title">{title}</h3>
              <div className="product_price"> {count}x <span>${price}</span></div>
             <div className='cart_item_icon'> 
             <span className="increase_btn">
                +
              </span>
              <span className="quantity">{count}</span>
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