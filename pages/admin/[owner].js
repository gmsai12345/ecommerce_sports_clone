// import axios from 'axios';
import NextLink from 'next/link';
import Layout from '@/components/layout';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import axios from 'axios';
import { useState } from 'react';
const ProductList = ({ products }) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [prod, setProd] = useState('');
  const [owner, setOwner] = useState('');
  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [colour, setColour] = useState('');
  const [image, setImage] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible1, setIsVisible1] = useState(true);
    const deleteproduct = async (event) => {
    event.preventDefault();
    const data = { name,category,description,prod,owner,colour,countInStock,price};
    try {
      const response = await axios.delete(`/api/admin/deleteproduct`, data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const updateproduct = async(event) =>{
    event.preventDefault();
    setIsVisible(!isVisible);
    setIsVisible1(!isVisible1);
    const data = { name,category,description,prod,owner,colour,countInStock,price,image};
    try {
      const response = await axios.post(`/api/admin/updateproduct`, data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <Layout>
        <NextLink href={`/admin/addproduct`} passHref>
        <button type='Submit'>Add New Product</button>
        </NextLink>
        {products.map((product) => (
          <div>
          <div style={{ width: '50%', padding: '1em' }}>
            <div style={{ border: '1px solid gray' }}>
              <NextLink href={`/products/${product.prod}`} passHref>
                <img
                  src={product.image}
                  alt={product.name}
                  style={{ width: '100%', height: '400px' }}
                />
                <div style={{ padding: '1em' }}>
                  <p>{product.name}</p>
                </div>
              </NextLink>
              <p style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>${product.price}</span>
                <button onClick={deleteproduct} type='submit' >
                  delete item
                </button>
                
                { isVisible1 && <button onClick={updateproduct} type='submit'>Update Product</button>}
                {isVisible && 
                <div>
        <label>
          change name:
      <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
      </label>
      <br/>
      <label>
          change category:
      <input type="text" value={category} onChange={(e) => setCategory(e.target.value)}></input>
      </label>
      <br/>
      <label>
          change prod(colour):
      <input type="text" value={prod} onChange={(e) => setProd(e.target.value)}></input>
      </label>
      <br/>
      <label>
          change colour:
      <input type="text" value={colour} onChange={(e) => setColour(e.target.value)}></input>
      </label>
      <br/>
      <label>
          change owner(your first name):
      <input type="text" value={owner} onChange={(e) => setOwner(e.target.value)}></input>
      </label>
      <br/>
      <label>
          change countInStock:
      <input type="text" value={countInStock} onChange={(e) => setCountInStock(e.target.value)}></input>
      </label>
      <br/>
      <label>
          change description:
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}></input>
      </label>
      <br/>
      <label>
          change price:
      <input type="text" value={price} onChange={(e) => setPrice(e.target.value)}></input>
      </label>
      <br/>
      <label>
          change image(SVG LINK):
      <input type="text" value={image} onChange={(e) => setImage(e.target.value)}></input>
      </label>
      <br/>
      <button type="submit" onClick={updateproduct}>Submit</button>

    </div>
    }

                
              </p>
            </div>
          </div>
          </div>
        ))}
             
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
