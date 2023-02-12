import React from "react";
import product from "../product"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NextLink from "next/link";
import Layout from ".././components/layout"
import Login from "@/components/Login";
export default function Navbar() {
  return (
    <div>
    <Layout>
    <div>
    <nav className="nav">
      <NextLink href="/" className="site-title">
        Welectric
      </NextLink>
      <ul>
        <NextLink href="/cart" passHref><ShoppingCartIcon/></NextLink>
        <NextLink href="/login" passHref>Login</NextLink>
      </ul>
    </nav>
    <h1>Products</h1>
<div>
  {product.products.map((product) => (
    
    <div style={{ width: '33.33%', padding: '1em' }}>
      <div style={{ border: '1px solid gray' }}>
      <NextLink href={`/products/${product.prod}`} passHref>
        <img src={product.image} alt={product.name} style={{ width: '100%', height: '200px' }}/>
        <div style={{ padding: '1em' }}>
          <p>{product.name}</p>
          </div>
          </NextLink>
          <p style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>${product.price}</span>
            <button style={{ backgroundColor: 'blue', color: 'white' }}>Add to cart</button>
          </p>
        
      </div>
    </div>
    
  ))}
</div>


  </div>
  </Layout>
  </div>
  );
}

