import logo from "../assets/images/res-logo.png"
import "../style/footer.css"
import {FiSend} from 'react-icons/fi'
function Footer(){
    return(
       <footer className="footer">
           <div className="footer_left">
              <div className="footer_logo text-start">
              <img src={logo} alt="logo" />
              <h3>Tasty Treat</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt pariatur accusamus
              </p>
              </div>
              <div>
            <div className="deliver_time-list">
              <h5 className="footer_title">Delivery Time</h5>
              <div className=" delivery_time-item">
                <span>Sunday - Thursday</span>
                <p>10:00am - 11:00pm</p>
              </div>
              <div className=" delivery_time-item">
                <span>Friday - Saturday</span>
                <p>Off day</p>
              </div>
            </div>
              </div>
           </div>
           <div className="footer_right">
              <div className="deliver_time-list">
               <h5 className="footer_title">Contact</h5>
              <div className=" delivery_time-item">
                <p>Location: ZindaBazar, Sylhet-3100, Bangladesh</p>
              </div>
              <div className=" delivery_time-item">
                <span>Phone: 01712345678</span>
              </div>
              <div className=" delivery_time-item">
                <span>Email: example@gmail.com</span>
              </div>
            </div>
            <div className="newsletter_wrapper">
            <h5 className="footer_title">Newsletter</h5>
            <p>Subscribe our newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder="Enter your email" />
              <span>
               <FiSend className="newsletter_icon"/>
              </span>
            </div>
            </div>
           </div>
       </footer>
    )
}
export default Footer