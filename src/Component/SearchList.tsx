import "./SearchBar.css";
interface item_type{
    id: Number,
    product_name: string,
    Added_to_wishlist: boolean,
}


const SearchList=(props: {data: item_type[] | []})=>{
    return(
        <>
        <div className="dataResult">
          {props.data.map((item: item_type) => {
            return (
              <a className="dataItem" href="www.google.com" target="_blank">
                <p>{item.product_name} </p>
              </a>
            );
          })}
        </div>
        </>
    )
}
export default SearchList;