import Header from "../components/header"
import Routers from "../routes/Routers"
function Layout(){
    return(
        <div className="wrapper">
            <Header />
            <Routers />
        </div>
    )
}
export default Layout