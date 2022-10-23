import {Link} from 'react-router-dom'
import '../style/product.css'
function Product(props){
    console.log(props)
    const { id, title, image01, price } = props.item;
    return(
        <div className="product_item">
        <div className="product_img">
          <img src={image01} alt="product_img" className="" />
        </div>
  
        <div className="product_content">
          <h5>
            <Link to={`/foods/${id}`}>{title}</Link>
          </h5>
          <div className="">
            <span className="product_price">${price}</span>
            <button className="addTOCart_btn">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    )
}
export default Product