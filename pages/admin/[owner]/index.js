// import axios from 'axios';
import NextLink from 'next/link';
import Layout from '@/components/layout';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import axios from 'axios';
import updatecart from "./updatecart"
const ProductList = ({ products }) => {
  const [showComponent, setShowComponent] = useState(false);
  const updateproduct = () =>{
    setShowComponent(true);
  }
  const deleteproduct = async (event) => {
    event.preventDefault();
    const data = { name,category,description,prod,owner,colour,countInStock,price};
    try {
      const response = await axios.delete(`/api/admin/${product.owner}/deleteproduct/${product.prod}`, data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
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
          <div><p>{product.owner}</p>
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
                <button  style={{ backgroundColor: 'blue', color: 'white' }} onClick={deleteproduct}>
                  delete item
                </button>
                <button  style={{ backgroundColor: 'blue', color: 'white' }} onClick={updateproduct}>
                 update item
                </button>
                {showComponent && <updatecart product = {product} />}
              </p>
            </div>
          </div>
          </div>
        ))}
        <NextLink href={`/admin/addproduct`} passHref>
        <button type='Submit'>Add product</button>
        </NextLink>     
      </Layout>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { query } = context;
  const { owner } = query;
  const response = await axios.get(`http://localhost:3000/api/admin/${owner}`);
  const products = response.data;

  return {
    props: { products, },
  };
}

export default ProductList;
