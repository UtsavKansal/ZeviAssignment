import { faker } from '@faker-js/faker';

const generateData=()=>{

    let products = []
  
    for (let id=1; id <= 1000; id++) {
  
      let productName = faker.commerce.productName();

  
      products.push({
          id: id,
          product_name: productName,
          Added_to_wishlist: false,
      });
    }
  
    return products 
  }
  export default generateData;