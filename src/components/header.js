import {NavLink ,Link} from 'react-router-dom'
import {BsBasket} from 'react-icons/bs'
import {BiMenu} from 'react-icons/bi'
import Logo from "../assets/images/res-logo.png"
import {AiOutlineClose} from 'react-icons/ai'
import '../style/header.css'
import {useState} from 'react'
import {useContext} from 'react'
import {ProductCart} from '../Providecontext'
function Header({togleCart,setTogleCart}){
    const{cart}=useContext(ProductCart)
   const [togle,setTogle]=useState(false)
   const hanldeTogle=()=>{
     setTogle(!togle)
   }
    return(
        <header>
            <div className='header_logo'>
                <Link to="/shopcart/">
                 <img src={Logo}/>
                </Link> 
                <h5>Tasty Treat</h5>
            </div>
           <nav>
                <div onClick={hanldeTogle}
                className={togle? "nav_modal togle":"nav_modal"}> 
                </div>
                <ul className={togle? "nav_link_togle":""}>
                    <li><NavLink  onClick={hanldeTogle}
                    to="/shopcart/home">Home</NavLink></li>
                    <li><NavLink  onClick={hanldeTogle}
                     to="/shopcart/foods">Foods</NavLink></li>
                    <li><NavLink  onClick={hanldeTogle}
                     to="/shopcart/cart">Cart</NavLink></li>
                    <li><NavLink  onClick={hanldeTogle}
                     to="/shopcart/contact">Contact</NavLink></li>
                    <li><NavLink  onClick={hanldeTogle}
                     to="/shopcart/login">Login</NavLink></li>
                    <AiOutlineClose className='nav_close' 
                     onClick={hanldeTogle}
                    />
                </ul>
                
            </nav>
            <div className='nav_right'>
                 <span className='cart'>
                    <BsBasket className='cart_icon' onClick={()=>setTogleCart(!togleCart)}/>
                    <span className='cart_badge'>{cart.length}</span>
                 </span>
                 <span>
                    <BiMenu className='menu'
                    onClick={hanldeTogle}
                    />    
                 </span>
            </div>
        </header>
    )
}
export default Header