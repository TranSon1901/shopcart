import LogoWhy from '../assets/images/location.png'
import '../style/whyTast.css'
import {AiOutlineCheckCircle} from 'react-icons/ai'
function WhyTasTy(){
    return(
       <section className="why_choose-us">
          <img src={LogoWhy}/>
          <div className='why_tast'>
            <div>
            <h2 className="why_tast_title">
                  Why <span>Tasty Treat?</span>
            </h2>
            <p className="why_tast_decs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolorum, minus. Tempora reprehenderit a corporis velit
            </p>
            </div>
            <div className='tast_list'>
                <div className='tast_item'>
                   <p><AiOutlineCheckCircle className='tasty_check_icon'/> Fresh and tasty foods</p>
                    <p className="choose_us-desc">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quia, voluptatibus.
                   </p>
                </div>
                <div className='tast_item'>
                   <p><AiOutlineCheckCircle className='tasty_check_icon'/>Quality support</p>
                    <p className="choose_us-desc">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quia, voluptatibus.
                   </p>
                </div>
                <div className='tast_item'>
                   <p><AiOutlineCheckCircle className='tasty_check_icon'/>Order from any location</p>
                    <p className="choose_us-desc">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quia, voluptatibus.
                   </p>
                </div>
            </div>
          </div>
          
       </section>
    )
}
export default WhyTasTy