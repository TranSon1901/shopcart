import CartItem from "../UI/CartItem"
import "../style/cartPage.css"
import {useContext} from 'react'
import {ProductCart} from '../Providecontext'
import {Link} from 'react-router-dom'
import CommonSecttion from "../UI/CommonSecttion"
function Cart(){
    const data=useContext(ProductCart)
    const {cart,deteleCart,total,clearnCart}= data
    return(
      <>
        <CommonSecttion />
        <section className="section_cartpage">
             {cart.length === 0 ? (
                <h2 className="cart_empty">Your cart is empty</h2>
              ):(
             <table className="table">
                  <thead className="cartPage_head">
                    <tr>
                      <th>Image</th>
                      <th>Product Title</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                     {
                      cart.map(item=>(
                        <CartItem 
                        deteleCart={deteleCart}
                        item={item} 
                        key={item.id}/>
                      ))
                     }
                  </tbody>
                </table>)}
            <div className="cartPage_bottom_ful">
              <div className="btn_clearnCart">
                 <button onClick={()=>clearnCart()}>Clearn</button>
              </div>
              <div className="cartPage_bottom">
                <h3>
                  Subtotal:
                  <span className="cart_subtotal"> ${total}</span>
                </h3>
                <p>Taxes and shipping will calculate at checkout</p>
                <div className="allCart_Btn">
                  <button className="cartPage_btn">
                    <Link to="/shopcart/foods">Continue Shopping</Link>
                  </button>
                  <button className="cartPage_btn">
                    <Link to="/shopcart/checkout">Proceed to checkout</Link>
                  </button>
                </div>
              </div>
            </div>  
        </section>
      </>
    )
}
export default Cart