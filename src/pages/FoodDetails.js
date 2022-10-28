import productimg from '../assets/images/product_01.1.jpg'
import '../style/foodDetails.css'
import {useState} from 'react'
import {useParams} from 'react-router-dom'
import products from '../assets/fakedata/products'
import Product from '../UI/Product'
import {useContext} from 'react'
import {ProductCart} from '../Providecontext'
function FoodDetails(){
    const [tabs,setTabs]=useState('desc')
    const {id}=useParams()
    const product=products.find(item=>item.id===id)
    const [img,setImg]=useState(product.image01)
    const relatedproduct=products.filter(item=>item.category===product.category)
    const data=useContext(ProductCart)
    const addCart=data.addCart
    return(
        <section className='section_foodDetails'>
            <div className='wrapper_foodDetails'>
              <div className='FoodDetails'>
                <div className="FoodDetails_img">
                    <div onClick={()=>setImg(product.image01)} 
                    className='FoodDetails_item'><img src={product.image01}></img></div>
                    <div onClick={()=>setImg(product.image02)} 
                    className='FoodDetails_item'><img src={product.image02}></img></div>
                    <div onClick={()=>setImg(product.image03)} 
                    className='FoodDetails_item'><img src={product.image03}></img></div>
                </div>
                <div className='FoodDetails_imgbig'>
                  <div><img src={img}></img></div>
                </div>
             </div>
             <div className="single_product_content">
                <h2 className='FoodDetails_title'>{product.title}</h2>
                <p className='FoodDetails_price'>Price:<span>{product.price}</span></p>
                <p className="category">Category: <span>{product.category}</span>
                </p>
                <button onClick={()=>addCart(product.id)}
                className="add_btn">
                  Add to Cart
                </button>
             </div>    
            </div>
            <div>
                <div className='tabs'>
                    <h3 onClick={()=>setTabs('desc')} 
                    className={tabs==='desc'? "tabs_active":""}>Description</h3>
                    <h3 onClick={()=>setTabs('review')} 
                    className={tabs==='review'? "tabs_active":""}
                    >Review</h3>
                </div>
               {tabs==='desc'&&<div className='tabs_content'>
                    <p>{product.desc}</p>
                </div>}
               {tabs==='review'&&<div>
                <div className="review">
                    <p className="user_name">Jhon Doe</p>
                    <p className="user_email">jhon1@gmail.com</p>
                    <p className="feedback_text">great product</p>
                  </div>

                  <div className="review">
                    <p className="user_name mb-0">Jhon Doe</p>
                    <p className="user_email">jhon1@gmail.com</p>
                    <p className="feedback_text">great product</p>
                  </div>

                  <div className="review">
                    <p className="user_name">Jhon Doe</p>
                    <p className="user_email">jhon1@gmail.com</p>
                    <p className="feedback_text">great product</p>
                  </div>
                </div>}
                <form className="form">
                    <div className="form_group">
                      <input
                        type="text"
                        placeholder="Enter your name"    
                      />
                    </div>
                    <div className="form_group">
                      <input
                        type="text"
                        placeholder="Enter your email" 
                      />
                    </div>
                    <div className="form_group">
                      <textarea
                        type="text"
                        placeholder="Write your review"
                       />
                    </div>

                    <button type="submit" className="add_btn">
                      Submit
                    </button>
                  </form>
            </div>
            <div>
               <h2 className="">You might also like</h2>
               {
               <div className="product_wrapper">
               {
                 relatedproduct.map((item,index)=>(
                   <div className='product_item' key={index}>
                      <Product item={item}/>
                   </div>
                 ))
               }
             </div>
               }
            </div>
        </section>
    )
}
export default FoodDetails