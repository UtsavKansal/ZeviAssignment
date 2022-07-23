import SearchIcon from "@material-ui/icons/Search";
import "./SearchBar.css";
import generateData from "../Data/data";
import React, { useState,useEffect,useRef } from "react";
import SearchList from "./SearchList"
interface item_type{
  id: Number,
  product_name: string,
  Added_to_wishlist: boolean,
}



const SearchBar=()=>{
    const [products,setproducts]=useState<item_type[]>([])

    useEffect(()=>{
      setproducts(generateData());
    },[])

    const trending = products.slice(101,112);
    const [visible,setvisible] = useState(false);
    const [filtereddata,setfiltereddata]=useState<item_type[]>([]);
    const [empty, setempty]=useState(true);
    const inputReference = useRef(null);


    
    const handlefilter=(event:React.ChangeEvent<HTMLInputElement>)=>{
      const wordsearched=event.target.value;
      setempty(wordsearched.length===0?true:false);
      const filter=products.filter((item: item_type)=>{
        return item.product_name.toLowerCase().includes(wordsearched.toLowerCase())
      })
      setfiltereddata(filter);

    }


    return(
        <div className="search">
        <div className="searchInputs">
          <input
            type="text"
            placeholder="Search..."
            onFocus={(e:React.FocusEvent<HTMLInputElement>)=>{
                setvisible(true)
              }}
            onChange={handlefilter}
            onBlur={(e:React.FocusEvent<HTMLInputElement, Element>)=>{
              setvisible(false)
            }}

          />
          <div className="searchIcon" onClick={(e : React.MouseEvent<HTMLDivElement, MouseEvent>)=>{
            setvisible(true)
          }}>
              <SearchIcon />
          </div>
        </div>
        {visible && <SearchList data={empty?trending:filtereddata}/>}
        
      </div>
    )

}
export default SearchBar;