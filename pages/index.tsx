import React from "react";
import product from "../product"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NextLink from "next/link";
import Layout from ".././components/layout"
export default function Navbar() {
  return (
    <Layout>
    <div>
    <nav className="nav">
      <NextLink href="/" className="site-title">
        Welectric
      </NextLink>
      <ul>
        <NextLink href="/Cart" passHref><ShoppingCartIcon/></NextLink>
        <NextLink href="/Login" passHref>Login</NextLink>
      </ul>
    </nav>
    <h1>Products</h1>
<div>
  {product.products.map((product) => (
    <NextLink href={`/product/${product.product}`} passHref>
    <div style={{ width: '33.33%', padding: '1em' }}>
      <div style={{ border: '1px solid gray' }}>
        <img src={product.image} alt={product.name} style={{ width: '100%', height: '200px' }}/>
        <div style={{ padding: '1em' }}>
          <p>{product.name}</p>
          <p style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>${product.price}</span>
            <button style={{ backgroundColor: 'blue', color: 'white' }}>Add to cart</button>
          </p>
        </div>
      </div>
    </div>
    </NextLink>
  ))}
</div>


  </div>
  </Layout>
  );
}

