import {AiOutlineClose} from 'react-icons/ai'
import '../style/cartitem.css'
function CartItem({item,deteleCart,index,decrease,increase,id}){
  const{title,price,image01,count}=item
    return(
       <div className="cart_item">
           <img src={image01}/>
           <div className="cart_product">
             <h3 className="cart_product_title">{title}</h3>
              <div className="product_price"> {count}x <span>${price*count}</span></div>
             <div className='cart_item_icon'> 
             <span  onClick={()=>increase(id)}
             className="increase_btn">
                +
              </span>
              <span className="quantity">{count}</span>
              <span onClick={()=>decrease(id)}
              className="decrease_btn">
                -
              </span>
            </div>   
            <span>
                   <AiOutlineClose 
                   onClick={()=>deteleCart(index,id)}
                   className="delete_btn"/>
             </span>     
           </div>
       </div>
       
    )
}
export default CartItem