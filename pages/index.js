// import React from "react";
// import product from "../product"
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import NextLink from "next/link";
// import Layout from "../components/layout"
// import Login from "@/components/Login";
// import db from "../database/db";
// import model from "../database/model";
// import axios from "axios"

// export default function Navbar(props) {
//   const {products} = props;
//   return (
//     <div>
//     <Layout>
//     <div>
//     <nav className="nav">
//       <NextLink href="/" className="site-title">
//         Welectric
//       </NextLink>
//       <ul>
//         <NextLink href="/cart" passHref><ShoppingCartIcon/></NextLink>
//         <NextLink href="/login" passHref>Login</NextLink>
//       </ul>
//     </nav>
//     <h1>Products</h1>
// <div>
//   {products.map((product) => (
    
//     <div style={{ width: '33.33%', padding: '1em' }}>
//       <div style={{ border: '1px solid gray' }}>
//       <NextLink href={`/products/${product.prod}`} passHref>
//         <img src={product.image} alt={product.name} style={{ width: '100%', height: '200px' }}/>
//         <div style={{ padding: '1em' }}>
//           <p>{product.name}</p>
//           </div>
//           </NextLink>
//           <p style={{ display: 'flex', justifyContent: 'space-between' }}>
//             <span>${product.price}</span>
//             <button style={{ backgroundColor: 'blue', color: 'white' }}>Add to cart</button>
//           </p>
        
//       </div>
//     </div>
    
//   ))}
// </div>


//   </div>
//   </Layout>
//   </div>
//   );
// }
// export async function getServerSideProps() {
//   const res = await fetch('http://localhost:3000/api/products');
//   const products = await res.products;


//   return {
//     props: {
//       products,
//     },
//   };
// }
// do it using getserversideprops
// import React, { useState, useEffect } from 'react';
// import NextLink from "next/link"
// import axios from 'axios';
// import Layout from '@/components/layout'; 
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// const ProductList = () => {
//   const [products, setProducts] = useState([]);
  
//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await axios.get('http://localhost:3000/api/products');
//       setProducts(result.data);
//     };

//     fetchData();
//   }, []);

//   return (
//       <div>
//    <Layout>
//      <div>
//      <nav className="nav">
//        <NextLink href="/" className="site-title">
//          Welectric
//        </NextLink>
//        <ul>
//          <NextLink href="/cart" passHref><ShoppingCartIcon/></NextLink>
//          <NextLink href="/login" passHref>Login</NextLink>
//       </ul>
//      </nav>
//      <h1>Products</h1>
//       {products.map((product) => (
    
//        <div style={{ width: '33.33%', padding: '1em' }}>
//            <div style={{ border: '1px solid gray' }}>
//            <NextLink href={`/products/${product.prod}`} passHref>
//              <img src={product.image} alt={product.name} style={{ width: '100%', height: '200px' }}/>
//              <div style={{ padding: '1em' }}>
//                <p>{product.name}</p>
//                </div>
//                </NextLink>
//                <p style={{ display: 'flex', justifyContent: 'space-between' }}>
//                 <span>${product.price}</span>
//                  <button style={{ backgroundColor: 'blue', color: 'white' }}>Add to cart</button>
//                </p>
            
//            </div>
//          </div>
        
//        ))}
    
//     </div>
//    </Layout>
//    </div>
//   );
// };

// export default ProductList;
// // do it using getserversideprops
import React, { useState} from 'react';
import NextLink from "next/link"
import axios from 'axios';
import Layout from '@/components/layout'; 
import { useRouter } from 'next/router';

const ProductList = ({ products }) => {
  const router = useRouter();
  const [category,setCategory] = useState('');
  const categorysubmit = (e) =>{
    const category = e.target.value;
    setCategory(category);
    alert('redirect to ' + category)
    router.push(`/categories/${category}`);


  }
  // const { state, dispatch } = useContext(Store);
  // const addToCartHandler = async (product) => {
  //   const existItem = state.cart.cartItems.find((x) => x._id === product._id);
  //   const quantity = existItem ? existItem.quantity + 1 : 1;
  //   const { data } = await axios.get(`/api/products/${product._id}`);
  //   if (data.countInStock < quantity) {
  //     window.alert('Sorry. Product is out of stock');
  //     return;
  //   }
  //   dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });
  //   router.push('/cart');
  // };
 
  return (
    <div>
      <Layout>
        <div>
          <p>Login as an Admin</p>
          <NextLink href={'/admin'} passHref>
            <button type="submit">Enter</button>
            </NextLink>
          <p>Select category Filter:</p>
        <select value = {category} onChange={categorysubmit}>
          {products.map((product) => (
             
             <option value = {product.colour}>{product.colour}</option>
            
          ))}
          </select>
          <h1>Products</h1>
          {products.map((product) => (
            <div>
             
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
            </div>
          ))}
        </div>
      </Layout>
    </div>
  );
};

export default ProductList;

export async function getServerSideProps(context) {
  const res = await axios.get('http://localhost:3000/api/products');
  const products = res.data;
  return { props: { products } };
}
