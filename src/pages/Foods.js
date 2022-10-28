import '../style/foods.css'
import {CiSearch} from 'react-icons/ci'
import {useState} from 'react'
import products from '../assets/fakedata/products'
import Product from '../UI/Product'
import ReactPaginate from "react-paginate";
import '../style/panigation.css'
function Foods(){
    const [search,setSeacrh]=useState("")
    const [filterProduct,setFilterproduct]=useState(products)
    const [pageNumber, setPageNumber] = useState(0);
    const hanldeChange=(e)=>{
        setSeacrh(e.target.value)
        const value=e.target.value
      if(value===''){
        setFilterproduct([...products])
      } else{
         const product=products.filter(item=>(
            (item.title).toLocaleLowerCase().includes(value.toLocaleLowerCase())
         ))
         setFilterproduct(product)
      }
    }
    const productPerPage = 8;
    const visitedPage = pageNumber * productPerPage;
    const displayPage = filterProduct.slice(
      visitedPage,
      visitedPage + productPerPage
    );
    const pageCount = Math.ceil(filterProduct.length/productPerPage);
  
    const changePage = ({ selected }) => {
      setPageNumber(selected);
    };
  
    return(
        <div>
            <section>
                <div className='wrapper_top'>
                    <div className="search_widget">
                        <input type="text"
                        value={search}
                        onChange={hanldeChange}
                         placeholder="I'm looking for...."
                        ></input>
                        <span><CiSearch/></span>
                    </div>
                    <div className="sorting_widget text-end">
                    <select>
                            <option>Default</option>
                            <option value="ascending">Alphabetically, A-Z</option>
                            <option value="descending">Alphabetically, Z-A</option>
                            <option value="high-price">High Price</option>
                            <option value="low-price">Low Price</option>
                     </select>
                   </div>
                </div>
                <div className="product_wrapper">
                    {
                    displayPage.map((item,index)=>(
                        <div className='product_item' key={index}>
                          <Product item={item}/>
                        </div>      
                    ))
                    } 
           
                </div>  
             <div>
               <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                previousLabel={"Prev"}
                nextLabel={"Next"}
                containerClassName="paginationBttns"
                activeClassName="active_page"
              />
            </div>
            </section>
        </div>
    )
}
export default Foods