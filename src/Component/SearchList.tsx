import "./SearchBar.css";
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { BsFillArrowUpRightCircleFill, BsFillBagCheckFill} from "react-icons/bs";
import { item_type } from "../Datatypes/ItemType";


// const SearchList=(props: {data: item_type[] | []})=>{
const SearchList=(props: {data: item_type[] | [], productsState: [item_type[],React.Dispatch<React.SetStateAction<item_type[]>>]})=>{

    const [products,setproducts] =props.productsState;

    const wishlistHandler=(currentItem:item_type)=>{
        const newProducts=products.map((item:item_type)=>{
            if(item.id===currentItem.id){
                console.log("Hello")
            }
            return item.id===(currentItem.id)?{...item, Added_to_wishlist: !(currentItem.Added_to_wishlist)}:item;
        })
        console.log(newProducts[currentItem.id-1])
        setproducts(newProducts);
    }

    return(
            <div className="dataResult">
                {props.data.map((item: item_type) => {
                    return (
                        <div className="dataItem" style={{background:item.Added_to_wishlist?"red":"white"}}>
                            <p>{item.product_name} </p>
                            <div className="itemButtonsContainer">
                                <div className="viewProductButton">
                                    <div className="viewProductButton">
                                        <Tooltip title="Expand" arrow>
                                            <IconButton>
                                                <BsFillArrowUpRightCircleFill/>
                                            </IconButton>
                                        </Tooltip>
                                    </div>
                                    
                                </div>
                                <data className="wishlistButton">
                                    <Tooltip title={item.Added_to_wishlist?"Remove From Wishlist":"Add To Wishlist"} arrow>
                                        <IconButton onClick={()=> wishlistHandler(item)}>
                                            < BsFillBagCheckFill/>
                                        </IconButton>
                                    </Tooltip>  
                                </data>
                                   
                            </div>
                        </div>
                    );
                })}
            </div>
    )
}
export default SearchList;