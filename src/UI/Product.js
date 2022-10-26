import {Link} from 'react-router-dom'
import '../style/product.css'
import {useContext} from 'react'
import {ProductCart} from '../Providecontext'
function Product(prop){
    const data=useContext(ProductCart)
    const addCart=data.addCart
    const { id, title, image01, price } = prop.item;
    return(
        <>
        <div className="product_img">
          <img src={image01} alt="product_img" className="" />
        </div>
  
        <div className="product_content">
          <h5>
            <Link to={`/foods/${id}`}>{title}</Link>
          </h5>
          <div className="">
            <span className="product_price">${price}</span>
            <button  onClick={()=>addCart(id)}
            className="addTOCart_btn">
              Add to Cart
            </button>
          </div>
        </div>    
     </>
     
    )
}
export default Product