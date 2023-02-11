import React from "react";
import Link from "next/link";
import product from "../product"

export default function Navbar() {
  return (
    <div>
    <nav className="nav">
      <Link href="/" className="site-title">
        Welectric
      </Link>
      <ul>
        <Link href="/Cart" passHref>Cart</Link>
        <Link href="/Login" passHref>Login</Link>
      </ul>
    </nav>
    <h1>Products</h1>
<div>
  {product.products.map((product) => (
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
  ))}
</div>


  </div>
  );
}

