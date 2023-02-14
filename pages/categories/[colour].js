// import axios from 'axios';
import NextLink from 'next/link';
import Layout from '@/components/layout';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import axios from 'axios';
const ProductList = ({ products }) => {
  return (
    <div>
      <Layout>
        <div>
          <nav className="nav">
            <NextLink href="/" className="site-title">
              Welectric
            </NextLink>
            <ul>
              <NextLink href="/cart" passHref>
                <ShoppingCartIcon />
              </NextLink>
              <NextLink href="/login" passHref>
                Login
              </NextLink>
            </ul>
          </nav>
        </div>
        {products.map((product) => (
          <div style={{ width: '33.33%', padding: '1em' }}>
            <div style={{ border: '1px solid gray' }}>
              <NextLink href={`/products/${product.prod}`} passHref>
                <img
                  src={product.image}
                  alt={product.name}
                  style={{ width: '100%', height: '200px' }}
                />
                <div style={{ padding: '1em' }}>
                  <p>{product.name}</p>
                </div>
              </NextLink>
              <p style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>${product.price}</span>
                <button style={{ backgroundColor: 'blue', color: 'white' }}>
                  Add to cart
                </button>
              </p>
            </div>
          </div>
        ))}
      </Layout>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { query } = context;
  const { colour } = query;
  const response = await axios.get(`http://localhost:3000/api/categories/${colour}`);
  const products = response.data;

  return {
    props: { products, },
  };
}

export default ProductList;
