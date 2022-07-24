import "./SearchBar.css";
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { BsFillArrowUpRightCircleFill, BsFillBagCheckFill} from "react-icons/bs";

interface item_type{
    id: number,
    product_name: string,
    Added_to_wishlist: boolean,
}


// const SearchList=(props: {data: item_type[] | []})=>{
const SearchList=(props: {data: item_type[] | [], productsState: [item_type[],React.Dispatch<React.SetStateAction<item_type[]>>]})=>{

    const [products,setproducts] =props.productsState;

    const wishlistHandler=(currentItem:item_type)=>{
        const newProducts=products.map((item:item_type)=>{
            return item.id===(currentItem.id)?{...item, Added_to_wishlist: !(currentItem.Added_to_wishlist)}:item;
        })
        // console.log(newProducts[currentItem.id])
        setproducts(newProducts);
    }

    return(
        <>
            <div className="dataResult">
                {props.data.map((item: item_type) => {
                    return (
                        <div className="dataItem" style={{background:item.Added_to_wishlist?"red":"white"}}>
                            <p>{item.product_name} </p>
                            <div className="itemButtonsContainer">
                                <Tooltip title="Expand" arrow>
                                    <IconButton>
                                        <BsFillArrowUpRightCircleFill/>
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title={item.Added_to_wishlist?"Remove From Wishlist":"Add To Wishlist"} arrow>
                                    <IconButton onClick={()=> wishlistHandler(item)}>
                                        < BsFillBagCheckFill/>
                                    </IconButton>
                                </Tooltip>     
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    )
}
export default SearchList;