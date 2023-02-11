import React from 'react'
import {useRouter} from "next/router"
import product from "../../product"
import NextLink from "next/link";
const product = () => {
    const router = useRouter()
    const {products} = router.query;
    const product1 = product.products.find((a) => a.product === products)
    if(!product1){
      return <h1> product not found</h1>
    }
    return (
      <div>
      <NextLink href="/">
        <p>back to home</p>
      </NextLink>
      <div style={{ width: '33.33%', padding: '1em' }}>
      <div style={{ border: '1px solid gray' }}>
        <img src={product.image} alt={product.name} style={{ width: '640px', height: '640px' }}/>
        <div style={{ padding: '1em' }}>
          <p>{product.name}</p>
          <p>Rating: {product.rating} {product.numReviews}: reviews</p>
          <p style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>{product.description}</span>
            <span>{product.price}</span>
            {product.countInStock > 0 ? <button style={{ backgroundColor: 'blue', color: 'white' }}>Add to cart</button> : <p>currently not available</p>}
            
          </p>
        </div>
      </div>
    </div>  </div>)
}

export default product
