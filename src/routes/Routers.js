import {Routes,Route} from "react-router-dom"
import Home from "../pages/Home"
import Contact from "../pages/Contact"
import Login from "../pages/Login"
import Cart from "../pages/Cart"
import Foods from "../pages/Foods"
function Routers(){
    return(
        <Routes>
            <Route path="/shopcart/" element={<Home />}/>
            <Route path="/shopcart/home" element={<Home />}/>
            <Route path="/shopcart/foods" element={<Foods />}/>
            <Route path="/shopcart/cart" element={<Cart />}/>
            <Route path="/shopcart/contact" element={<Contact />}/>
            <Route path="/shopcart/login" element={<Login />}/>
        </Routes>
    )
}
export default Routers