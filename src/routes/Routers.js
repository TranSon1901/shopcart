import {Routes,Route} from "react-router-dom"
import Home from "../pages/Home"
import Product from "../pages/Product"
function Routers(){
    return(
        <Routes>
            <Route path="/shopcart" element={<Home />}/>
            <Route path="/shopcart/product" element={<Product />}/>
        </Routes>
    )
}
export default Routers