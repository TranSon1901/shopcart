import categoryImg01 from '../assets/images/category-01.png'
import categoryImg02 from '../assets/images/category-02.png'
import categoryImg03 from '../assets/images/category-03.png'
import categoryImg04 from '../assets/images/category-04.png'
import '../style/category.css'
const categoryData = [{
      display: "Fastfood",
      imgUrl: categoryImg01,
    },
    {
      display: "Pizza",
      imgUrl: categoryImg02,
    },
    {
      display: "Asian Food",
      imgUrl: categoryImg03,
    }, 
    {
      display: "Row Meat",
      imgUrl: categoryImg04,
    },
  ];
function Category(){
    return(
        <>
            { 
                categoryData.map((item,index)=>(
                    <div key={index} className="category_item">
                        <div className="category_img">
                            <img src={item.imgUrl}/>
                        </div>
                        <h5>{item.display}</h5>
                    </div>
                ))
            }
        </>
    )
}
export default Category