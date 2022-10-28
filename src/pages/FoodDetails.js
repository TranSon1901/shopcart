import productimg from '../assets/images/product_01.1.jpg'
import '../style/foodDetails.css'
import {useState} from 'react'
import {useParams} from 'react-router-dom'
import products from '../assets/fakedata/products'
function FoodDetails(){
    const [tabs,setTabs]=useState('desc')
    const {id}=useParams()
    const product=products.find(item=>item.id===id)
    const [img,setImg]=useState(product.image01)
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
                <h2 className='FoodDetails_title'>Pizza With MusRom</h2>
                <p className='FoodDetails_price'>Price:<span>$34</span></p>
                <p className="category">Category: <span>Burger</span>
                </p>
                <button className="add_btn">
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
                <div className='tabs_content'>
                    <p>In this practical react js project tutorial, I'm going to teach you, step-by-step, how to create  a fully react food delivery app ecommerce website website  from scratch with modern UI and UX. By the end of this video, you will know how to create a react app from scratch, how to use redux toolkit, how to use the remixicon library in your react projects, how to use react useState hooks, useEff</p>
                </div>
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
        </section>
    )
}
export default FoodDetails