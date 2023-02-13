import React, { useState, useEffect } from 'react';
import NextLink from "next/link"
import axios from 'axios';
import Layout from '@/components/layout'; 
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useRouter } from 'next/router';
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const router = useRouter()
  const { colour } = router.query;
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`http://localhost:3000/api/categories/${colour}`);
      setProducts(result.data);
    };

    fetchData();
  }, [colour]);

  return (
    <div>
      <Layout>
        <div>
          <nav className="nav">
            <NextLink href="/" className="site-title">
              Welectric
            </NextLink>
            <ul>
              <NextLink href="/cart" passHref><ShoppingCartIcon /></NextLink>
              <NextLink href="/login" passHref>Login</NextLink>
            </ul>
          </nav>
        </div>
        {products.map((product) => (
    
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
      </Layout>
    </div>
  );
};

export default ProductList;

