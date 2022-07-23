import SearchIcon from "@material-ui/icons/Search";
import "./SearchBar.css";
import generateData from "../Data/data";
import React, { useState } from "react";

interface data_type{
    id: Number,
    product_name: string,
    Added_to_wishlist: boolean,
}

const SearchBar=()=>{

    const [data, setdata] = useState(generateData());
    const [visible,setvisible] = useState(false);
    const trending=data



    return(
        <div className="search">
        <div className="searchInputs">
          <input
            type="text"
            placeholder="Search..."
            onFocus={(e:React.FocusEvent<HTMLInputElement>)=>{
                setvisible(true)
              }}
          />
          <div className="searchIcon" >
              <SearchIcon />
          </div>
        </div>
        {visible && <div className="dataResult">
          {data.map((item: data_type) => {
            return (
              <a className="dataItem" href="www.google.com" target="_blank">
                <p>{item.product_name} </p>
              </a>
            );
          })}
        </div>}
        
      </div>
    )

}
export default SearchBar;