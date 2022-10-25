import Header from "../components/header"
import Routers from "../routes/Routers"
import Cart from "../cart/Cart"
function Layout(){
    return(
        <div className="wrapper">
            <Header />
             <Cart />
            <Routers />
        </div>
    )
}
export default Layout