import React from 'react'
import {useRouter} from "next/router"
import product from "../.././product"
import NextLink from "next/link";
const Product = () => {
    const router = useRouter()
    const {prod} = router.query;
    const product1 = product.products.find((a) => a.prod === prod)
    if(!product1){
      return (<h1> product not found</h1>);
    }
    else{
    return (
      <div>
      <NextLink href="/">
        <p>back to home</p>
      </NextLink>
      <div style={{ width: '33.33%', padding: '1em' }}>
      <div style={{ border: '1px solid gray' }}>
        <img src={product1.image} alt={product1.name} style={{ width: '100%', height: '640px' }}/>
        <div style={{ padding: '1em' }}>
          <p>{product1.name}</p>
          <p>Rating: {product1.rating} <br/>{product1.numReviews}: reviews</p>
          <p style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>{product1.description}</span>
            <span><br/><br/>{product1.price} rupees</span>
            {product1.countInStock !== 0 ? <button style={{ backgroundColor: 'blue', color: 'white' }}>Add to cart</button> : <p>currently not available</p>}
            
          </p>
        </div>
      </div>
    </div>  
    
    </div>)};
}

export default Product
