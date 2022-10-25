import '../style/testimonial.css'
import network from '../assets/images/network.png'
import TestimonialSlider from './TestimonialSlider'
function Testimonial(){
    return(
        <section className='testimonial'>
        <div className='testimonial_content'>
           <h2 className="testimonial_subtitle">Testimonial</h2>
            <h2 className="testimonial_title ">
                  What our <span>customers</span> are saying
            </h2>
            <p className="testimonial_desc">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Distinctio quasi qui minus quos sit perspiciatis inventore
                quis provident placeat fugiat!
            </p>
        <TestimonialSlider />
        </div>
        <div className='testimonial_img'>
          <img src={network}/>
        </div>
      </section> 
    )
}
export default Testimonial