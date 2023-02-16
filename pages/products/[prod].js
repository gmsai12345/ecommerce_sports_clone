// import React from 'react'
// import {useRouter} from "next/router"
// import product from "../.././product"
// import NextLink from "next/link";
// const Product = (props) => {
//   const {product1} = props; 
//     // const router = useRouter()
//     // const {prod} = router.query;
//     // const product1 = product.products.find((a) => a.prod === prod)
//     if(!product1){
//       return (<h1> product not found</h1>);
//     }
//     else{
//     return (
//       <div>
//       <NextLink href="/">
//         <p>back to home</p>
//       </NextLink>
//       <div style={{ width: '33.33%', padding: '1em' }}>
//       <div style={{ border: '1px solid gray' }}>
//         <img src={product1.image} alt={product1.name} style={{ width: '100%', height: '640px' }}/>
//         <div style={{ padding: '1em' }}>
//           <p>{product1.name}</p>
//           <p>Rating: {product1.rating} <br/>{product1.numReviews}: reviews</p>
//           <p style={{ display: 'flex', justifyContent: 'space-between' }}>
//           <span>{product1.description}</span>
//             <span><br/><br/>{product1.price} rupees</span>
//             {product1.countInStock !== 0 ? <button style={{ backgroundColor: 'blue', color: 'white' }}>Add to cart</button> : <p>currently not available</p>}
            
//           </p>
//         </div>
//       </div>
//     </div>  
    
//     </div>)};
// }
// do it using getserversideprops
// import React, { useState, useEffect } from 'react';
// import NextLink from "next/link"
// import axios from 'axios';
// import Layout from '@/components/layout'; 
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import { useRouter } from 'next/router';
// const ProductList = () => {
//   const [products, setProducts] = useState([]);
//   const router = useRouter()
//   const { prod } = router.query;
//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await axios.get(`http://localhost:3000/api/products/${prod}`);
//       setProducts(result.data);
//     };

//     fetchData();
//   }, [prod]);

//   return (
//     <div>
//       <Layout>
//         <div>
//           <nav className="nav">
//             <NextLink href="/" className="site-title">
//               Welectric
//             </NextLink>
//             <ul>
//               <NextLink href="/cart" passHref><ShoppingCartIcon /></NextLink>
//               <NextLink href="/login" passHref>Login</NextLink>
//             </ul>
//           </nav>
//         </div>
//         <div>
//           <div style={{ width: '33.33%', padding: '1em' }}>
//             <div style={{ border: '1px solid gray' }}>
//               <img src={products.image} alt={products.name} style={{ width: '100%', height: '640px' }} />
//               <div style={{ padding: '1em' }}>
//                 <p>{products.name}</p>
//                 <p>Rating: {products.rating} <br />{products.numReviews}: reviews</p>
//                 <p style={{ display: 'flex', justifyContent: 'space-between' }}>
//                   <span>{products.description}</span>
//                   <span><br /><br />{products.price} rupees</span>
//                   {products.countInStock !== 0 ? (
//                     <button style={{ backgroundColor: 'blue', color: 'white' }}>Add to cart</button>
//                   ) : (
//                     <p>currently not available</p>
//                   )}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Layout>
//     </div>
//   );
// };

// export default ProductList;
import Layout from '@/components/layout';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import axios from 'axios';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import React,{useContext} from 'react';
const ProductList = ({ products }) => {
  const router = useRouter();
  // const { dispatch } = useContext(Store);
  // const addToCartHandler = async (product) => {
  //   const existItem = state.cart.cartItems.find((x) => x._id === product._id);
  //   const quantity = existItem ? existItem.quantity + 1 : 1;
  //   const { data } = await axios.get(`/api/products/${product._id}`);
  //   if (data.countInStock < 0) {
  //     window.alert('Sorry. Product is out of stock');
  //     return;
  //   }
  //   dispatch({ type: 'CART_ADD_ITEM', payload: { ...products, quantity } });
    
  // };
  return (
    <div>
      <Layout>
        <div>
          <div style={{ width: '33.33%', padding: '1em' }}>
            <div style={{ border: '1px solid gray' }}>
              <img src={products.image} alt={products.name} style={{ width: '100%', height: '640px' }} />
              <div style={{ padding: '1em' }}>
                <p>{products.name}</p>
                <p>Rating: {products.rating} <br />{products.numReviews}: reviews</p>
                <p style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>{products.description}</span>
                  <span><br /><br />{products.price} rupees</span>
                  {products.countInStock !== 0 ? (
                    <button  onClick={addToCartHandler} style={{ backgroundColor: 'blue', color: 'white' }}>Add to cart</button>
                  ) : (
                    <p>currently not available</p>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { prod } = context.query;
  const result = await axios.get(`http://localhost:3000/api/products/${prod}`);
  const products = result.data;
  return {
    props: {
      products,
    },
  };
}

export default ProductList;

