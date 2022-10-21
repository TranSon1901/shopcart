import {NavLink ,Link} from 'react-router-dom'
import {BsBasket} from 'react-icons/bs'
import {CiUser} from 'react-icons/ci'
import {BiMenu} from 'react-icons/bi'
import Logo from "../assets/images/res-logo.png"
import {AiOutlineClose} from 'react-icons/ai'
import '../style/header.css'
import {useState} from 'react'
function Header(){
   const [togle,setTogle]=useState(true)
   const hanldeTogle=()=>{
     setTogle(!togle)
   }
    return(
        <header>
            <div className='header_logo'>
                <Link to="/shopcart">
                 <img src={Logo}/>
                </Link> 
                <h5>Tasty Treat</h5>
            </div>
          {togle && <nav>
                <ul>
                    <li><Link to="/shopcart">Home</Link></li>
                    <li><Link to="/shopcart/foods">Foods</Link></li>
                    <li><Link to="/shopcart/cart">Cart</Link></li>
                    <li><Link to="/shopcart/contact">Contact</Link></li>
                    <AiOutlineClose className='nav_close' 
                     onClick={hanldeTogle}
                    />
                </ul>
                
            </nav>}
            <div className='nav_right'>
                 <span className='cart'>
                    <BsBasket className='cart_icon'/>
                    <span className='cart_badge'>0</span>
                 </span>
                 <span>
                   <Link to="/shopcart/login">
                     <CiUser className='user'/>
                    </Link>
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