import ava01 from "../assets/images/ava-1.jpg";
import ava02 from "../assets/images/ava-2.jpg";
import ava03 from "../assets/images/ava-3.jpg";
import '../style/slider.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
function TestimonialSlider(){
    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    return(
       <Slider {...settings}>
       <div>
          <p className="review_text">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          atque, quam minus totam maiores laborum! Impedit consectetur illum
          aliquid odit. Odit dolore ipsum quod debitis nostrum necessitatibus
          quis dolorem quas!"
        </p>
         <div className="slider_content">
          <img src={ava01} alt="avatar" className=" rounded" />
          <h3>Jhon Doe</h3>
        </div>
       </div>
       <div>
          <p className="review_text">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          atque, quam minus totam maiores laborum! Impedit consectetur illum
          aliquid odit. Odit dolore ipsum quod debitis nostrum necessitatibus
          quis dolorem quas!"
        </p>
         <div className="slider_content">
          <img src={ava02} alt="avatar" className=" rounded" />
          <h3>Jhon Doe</h3>
        </div>
       </div>
       <div>
          <p className="review_text">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          atque, quam minus totam maiores laborum! Impedit consectetur illum
          aliquid odit. Odit dolore ipsum quod debitis nostrum necessitatibus
          quis dolorem quas!"
        </p>
         <div className="slider_content">
          <img src={ava03} alt="avatar" className=" rounded" />
          <h3>Jhon Doe</h3>
        </div>
       </div>
       </Slider> 
    )
}
export default TestimonialSlider