import {NavLink ,Link} from 'react-router-dom'
import {BsBasket} from 'react-icons/bs'
import {BiMenu} from 'react-icons/bi'
import Logo from "../assets/images/res-logo.png"
import {AiOutlineClose} from 'react-icons/ai'
import '../style/header.css'
import {useState} from 'react'
function Header(){
   const [togle,setTogle]=useState(false)
   const hanldeTogle=()=>{
     setTogle(!togle)
   }
    return(
        <header>
            <div className='header_logo'>
                <NavLink to="/shopcart">
                 <img src={Logo}/>
                </NavLink> 
                <h5>Tasty Treat</h5>
            </div>
           <nav>
                <div onClick={hanldeTogle}
                className={togle? "nav_modal togle":"nav_modal"}> 
                </div>
                <ul className={togle? "nav_link_togle":""}>
                    <li><NavLink
                    to="/shopcart/home">Home</NavLink></li>
                    <li><NavLink 
                     to="/shopcart/foods">Foods</NavLink></li>
                    <li><NavLink 
                     to="/shopcart/cart">Cart</NavLink></li>
                    <li><NavLink 
                     to="/contact">Contact</NavLink></li>
                    <li><NavLink 
                     to="/shopcart/login">Login</NavLink></li>
                    <AiOutlineClose className='nav_close' 
                     onClick={hanldeTogle}
                    />
                </ul>
                
            </nav>
            <div className='nav_right'>
                 <span className='cart'>
                    <BsBasket className='cart_icon'/>
                    <span className='cart_badge'>0</span>
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