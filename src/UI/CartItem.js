import {RiDeleteBin6Line} from 'react-icons/ri'
function CartItem(props){
    const {title,image01,price,count}=props.item
    return(
    <tr>
        <td className="cartItem_page">
          <img src={image01} alt="" />
        </td>
        <td className="cartItem_page">{title}</td>
        <td className="cartItem_page">${price*count}</td>
        <td className="cartItem_page">{count}px</td>
        <td className="cartItem_page">
          <RiDeleteBin6Line 
          className='btn_delete'
          onClick={props.deteleCart}
          />
        </td>
    </tr>
    )
}
export default CartItem