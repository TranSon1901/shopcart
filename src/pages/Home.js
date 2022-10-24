import LogoHero from '../assets/images/hero.png'
import '../style/Home.css'
import {Link} from 'react-router-dom'
import {AiOutlineCar} from 'react-icons/ai'
import {BiCheckShield} from 'react-icons/bi'
import {GoChevronRight} from 'react-icons/go'
import Category from '../UI/Category'
import foodCategoryImg01 from "../assets/images/hamburger.png";
import foodCategoryImg02 from "../assets/images/pizza.png";
import foodCategoryImg03 from "../assets/images/bread.png";
import { useState } from 'react'
import Feature from '../UI/Feature'
import products from '../assets/fakedata/products'
import Product from '../UI/Product'
import {useEffect} from 'react'
import WhyTasTy from '../UI/WhyTasTy'
function Home(){
  const [active,setActive]=useState('ALL')
  const [product,setProduct]=useState(products)
  const [filterproduct,setFilterproduct]=useState(product)
  console.log(product)
  useEffect(()=>{
    if(active==='ALL'){
      setFilterproduct(product)
    }
    if(active==='Burger'){
      const products=[...product]
      const burger=products.filter(product=>product.category==='Burger')
     setFilterproduct(burger)
    }
    if(active==='Pizza'){
      const products=[...product]
      const pizza=products.filter(product=>product.category==='Pizza')
     setFilterproduct(pizza)
    }
    if(active==='Bread'){
      const products=[...product]
      const Bread=products.filter(product=>product.category==='Bread')
     setFilterproduct(Bread)
    }
  },[active])
    return(
      <>
        <section className='section_hero'>
         <div className='hero_content'>
           <h5>Easy way to make an order</h5>
           <h1 className='hero_title'>
              <span>HUNGRY?</span> Just wait <br /> food at
              <span> your door</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui elit
              magni delectus tenetur autem, sint veritatis!
            </p>
            <div className='hero_btn'>
              <button className='order_btn'>Order Now <GoChevronRight className='hero_btn_icon'/></button>
              <button className='allFood_btn'>
                <Link to="/shopcart/foods">See all foods</Link>
              </button>
           </div>
            <div className='hero_service'>
              <p><span><AiOutlineCar className='hero_icon'/></span> No shipping charge</p> 
              <p><span><BiCheckShield className='hero_icon'/></span> 100% secure checkout</p> 
            </div>
        </div>
           <div className="hero_img">
               <img src={LogoHero}/>
           </div>
        </section>
        <section className='category_wrapper'>
        <Category />
        </section>
        <Feature />
        <section className='food_category'>
          <h2>Popular Foods</h2>
           <div>
             <button onClick={()=>setActive('ALL')}
             className={active==='ALL'? "foodBtnActive":"" }>ALL</button>
             <button onClick={()=>setActive('Burger')}
             className={active==='Burger'? "foodBtnActive":""}
             ><img src={foodCategoryImg01}/><span>Burger</span></button>
             <button onClick={()=>setActive('Pizza')}
             className={active==='Pizza'? "foodBtnActive":""}
             ><img src={foodCategoryImg02}/><span>Pizza</span></button>
             <button onClick={()=>setActive('Bread')}
             className={active==='Bread'? "foodBtnActive":""}
             ><img src={foodCategoryImg03}/><span>Bread</span></button>
           </div>
        </section>
        <section className="product_wrapper">
           {
             filterproduct.map((item,index)=>(
              <div className='product_item' key={index}>
                <Product item={item}/>
              </div>             
             ))
           }
        </section>
        <WhyTasTy /> 
      </> 
    )
}
export default Home