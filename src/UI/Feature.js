import featureImg01 from '../assets/images/service-01.png'
import featureImg02 from '../assets/images/service-02.png'
import featureImg03 from '../assets/images/service-03.png'
import '../style/feature.css'
const featureData = [
    {
      title: "Quick Delivery",
      imgUrl: featureImg01,
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
    },
  
    {
      title: "Super Dine In",
      imgUrl: featureImg02,
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
    },
    {
      title: "Easy Pick Up",
      imgUrl: featureImg03,
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
    },
  ];
  
function Feature(){
    return(
        <section className='feature'>
            <h2 className="feature_subtitle">What we serve</h2>
            <h1 className="feature_title">Just sit back at home</h1>
            <h2 className="feature_title">
                we will      <span>take care</span>
            </h2>
            <p className="feature_text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                officiis?
              </p>
              <p className="feature_text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, eius.
              </p>
            <div className='feature_inner'>
              {
                featureData.map((item,index)=>(
                    <div className='feature_item' key={index}>
                        <img src={item.imgUrl}/>
                        <h5>{item.title}</h5>
                        <p>{item.desc}</p>
                    </div>
                ))
              }    
            </div>  
        </section>
    )
}
export default Feature