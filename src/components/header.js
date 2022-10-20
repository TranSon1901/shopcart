import {Link} from 'react-router-dom'
import {BsFillCartFill} from "react-icons/bs"
function Header(){
    return(
        <header>
            <h1 className="header_logo">NIKE</h1>
            <nav>
                <ul>
                    <li><Link to="/shopcart">Home</Link></li>
                    <li><Link to="/shopcart/product">Product</Link></li>
                    <li><Link to="/shopcart/about">About</Link></li>
                    <li><Link to="/shopcart/contact">Contact</Link></li>
                    <li><Link to="/shopcart/login">Login</Link></li>
                    <li className='nav_cart'>
                        <Link><BsFillCartFill /></Link>
                        <span>0</span>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header