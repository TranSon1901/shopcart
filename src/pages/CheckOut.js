import "../style/checkout.css"
import {useContext} from 'react'
import {ProductCart} from '../Providecontext'
import { useEffect } from "react"
import { useState } from "react"
function CheckOut(){
    const data=useContext(ProductCart)
    const [totalFull,setTotalFull]=useState(0)
    const {total} =data
    const shipping= 10
    useEffect(()=>{
        if(total===0){
            setTotalFull(0)
        } else {
            setTotalFull(total+shipping)
        }
    },[total])
    return(
        <section className="section_checkout">
            <div className="section_left">
              <h3>Shipping Address</h3>
              <form className="form form_checkout">
                <div className="form_group">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="form_group">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="form_group">
                  <input
                    type="number"
                    placeholder="Phone number"
                    required
                  />
                </div>
                <div className="form_group">
                  <input
                    type="text"
                    placeholder="Country"
                    required
                  />
                </div>
                <div className="form_group">
                  <input
                    type="text"
                    placeholder="City"
                    required
                  />
                </div>
                <div className="form_group">
                  <input
                    type="number"
                    placeholder="Postal code"
                    required
                  />
                </div>
                <button type="submit" className="addTOCart_btn">
                  Payment
                </button>
              </form>
            </div>
            <div className="section_right">
              <div className="checkout_bill">
                <h3 className="">
                  Subtotal: <span>${total}</span>
                </h3>
                <h3 className="">
                  Shipping: <span>${shipping}</span>
                </h3>
                <div className="checkout_total">
                  <h4 className="">
                    Total: <span>${totalFull}</span>
                  </h4>
                </div>
              </div>
            </div>
      </section>
    )
}
export default CheckOut