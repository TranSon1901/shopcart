import LogoHero from '../assets/images/hero.png'
import '../style/Home.css'
import {Link} from 'react-router-dom'
import {AiOutlineCar} from 'react-icons/ai'
import {BiCheckShield} from 'react-icons/bi'
import {GoChevronRight} from 'react-icons/go'
import Category from '../UI/Category'
function Home(){
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
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
      </> 
    )
}
export default Home