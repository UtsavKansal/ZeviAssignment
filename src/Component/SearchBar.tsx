import SearchIcon from "@material-ui/icons/Search";
import "./SearchBar.css";
import generateData from "../Data/data";
import React, { useState,useEffect, useRef } from "react";
import SearchList from "./SearchList"



interface item_type{
  id: number,
  product_name: string,
  Added_to_wishlist: boolean,
}



const SearchBar=()=>{
    const [products,setproducts]=useState<item_type[]>([])

    useEffect(()=>{
      setproducts(generateData());
    },[])

    const trending = products.slice(87,98);
    const [visible,setvisible] = useState(false);
    const [filtereddata,setfiltereddata]=useState<item_type[]>([]);
    const [empty, setempty]=useState(true);
    const inputReference = useRef<HTMLInputElement>(null);


    
    const handlefilter=(event:React.ChangeEvent<HTMLInputElement>)=>{
      const wordsearched=event.target.value;
      setempty(wordsearched.length===0?true:false);
      const filter=products.filter((item: item_type)=>{
        return item.product_name.toLowerCase().includes(wordsearched.toLowerCase())
      })
      setfiltereddata(filter);
    }

    const handleFocus=()=>{
      console.log(inputReference.current);
      inputReference.current?.focus();
    }


    const togglevisibility=()=>{
      setvisible(visible => !visible);
    }


    return(
        <div className="search">
        <div className="searchInputs">
          <input
            type="text"
            ref={inputReference}
            placeholder="Search..."
            onFocus={()=>setvisible(true)}
            onChange={handlefilter}
            // onBlur={togglevisibility}

          />
          <div className="searchIcon" onClick={handleFocus}>
              <SearchIcon />
          </div>
        </div>
        {/* {visible && <SearchList data={empty?trending:filtereddata.slice(0,16)}/>} */}
        {visible && <SearchList data={empty?trending:filtereddata.slice(0,15)} productsState={[products,setproducts]}/>}
        
      </div>
    )

}
export default SearchBar;