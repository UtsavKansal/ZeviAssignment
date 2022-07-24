import SearchIcon from "@material-ui/icons/Search";
import "./SearchBar.css";
import generateData from "../Data/data";
import React, { useState,useEffect, useRef } from "react";
import SearchList from "./SearchList"
import { item_type } from "../Datatypes/ItemType";






const SearchBar=()=>{
    const [products,setproducts]=useState<item_type[]>([]);

    useEffect(()=>{
      setproducts(generateData());
    },[])

    const trending = products.slice(87,98);
    const [visible,setvisible] = useState(false);
    const [filtereddata,setfiltereddata]=useState<item_type[]>([]);
    const [empty, setempty]=useState(true);
    const [wordentered,setwordEntered]=useState("");
    const inputReference = useRef<HTMLInputElement>(null);



    const handlefilter=(wordsearched:string)=>{
      setwordEntered(wordsearched);
      setempty(wordsearched.length===0?true:false);
      const filter=products.filter((item: item_type)=>{
        return item.product_name.toLowerCase().includes(wordsearched.toLowerCase())
      });
      setfiltereddata(filter);
    }

    useEffect(()=>{
      handlefilter(wordentered);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },products);

    const handleFocus=()=>{
      console.log(inputReference.current);
      inputReference.current?.focus();
    }
    return(
        <div className="search">
            <div className="searchInputs">
                <input
                  type="text"
                  ref={inputReference}
                  placeholder="Search..."
                  onFocus={()=>setvisible(true)}
                  onChange={(e)=>handlefilter(e.target.value)}
                />
                <div className="searchIcon" onClick={handleFocus}>
                    <SearchIcon />
                </div>
              </div>
              <div onClick={()=>setvisible(true)}>
                {visible && <SearchList data={empty?trending:filtereddata.slice(0,15)} productsState={[products,setproducts]}/>}
              </div>
        </div>
    )
}

export default SearchBar;