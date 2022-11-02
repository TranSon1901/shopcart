import "../style/Messeger.css"
import {useContext} from 'react'
import { ProductCart } from "../Providecontext"
function Messeger(){
    const data=useContext(ProductCart)
    const {openMesseger}= data
    return(
        <div className={openMesseger?"messeger open_messeger":"messeger"}>
             <h2>Successfully</h2>
        </div>
    )
}
export default Messeger