import {Routes,Route} from "react-router-dom"
import Home from "../pages/Home"
import Contact from "../pages/Contact"
import Login from "../pages/Login"
import Cart from "../pages/Cart"
import Foods from "../pages/Foods"
function Routers(){
    return(
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/foods" element={<Foods />}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/login" element={<Login />}/>
        </Routes>
    )
}
export default Routers