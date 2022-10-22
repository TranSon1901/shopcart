import LogoHero from '../assets/images/hero.png'
import '../style/Home.css'
import {Link} from 'react-router-dom'
function Home(){
    return(
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
              <button className='order_btn'>Order Now</button>
              <button className='allFood_btn'>
                <Link to="/shopcart/foods">See all foods</Link>
              </button>
           </div>
           </div>
           <div className="hero_img">
               <img src={LogoHero}/>
           </div>
        </section>
    )
}
export default Home