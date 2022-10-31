import Header from "../components/header"
import Routers from "../routes/Routers"
import Cart from "../cart/Cart"
import { useState } from "react"
import Footer from "../components/Footer"
function Layout(){
    const [togleCart,setTogleCart]=useState(false)
    return(
        <div className="wrapper">
            <Header togleCart={togleCart} setTogleCart={setTogleCart} />
            {togleCart && <Cart togleCart={togleCart} setTogleCart={setTogleCart}/>}                
            <Routers />
            <Footer />
        </div>
    )
}
export default Layout