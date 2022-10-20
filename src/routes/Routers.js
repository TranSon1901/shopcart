import {Routes,Route} from "react-router-dom"
import Home from "../pages/Home"
import Product from "../pages/Product"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Login from "../pages/Login"
function Routers(){
    return(
        <Routes>
            <Route path="/shopcart" element={<Home />}/>
            <Route path="/shopcart/product" element={<Product />}/>
            <Route path="/shopcart/about" element={<About />}/>
            <Route path="/shopcart/contact" element={<Contact />}/>
            <Route path="/shopcart/login" element={<Login />}/>
        </Routes>
    )
}
export default Routers