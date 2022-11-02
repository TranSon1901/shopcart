import Header from "../components/header"
import Routers from "../routes/Routers"
import Cart from "../cart/Cart"
import { useState } from "react"
import Footer from "../components/Footer"
import Messeger from "../UI/Messeger"
function Layout(){
    const [togleCart,setTogleCart]=useState(false)
    return(
        <div className="wrapper">
            <Header togleCart={togleCart} setTogleCart={setTogleCart}/>
            <Messeger />
            <Cart togleCart={togleCart} setTogleCart={setTogleCart}/>                
            <Routers />
            <Footer />
        </div>
    )
}
export default Layout