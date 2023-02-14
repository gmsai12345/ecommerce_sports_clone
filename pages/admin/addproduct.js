// do it using getserversideprops
import React,{useState} from 'react'
import Layout from '../../components/layout';
import axios from 'axios';
function addproduct() {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [prod, setProd] = useState('');
  const [owner, setOwner] = useState('');
  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [colour, setColour] = useState('');
  const addproduct = async (event) => {
    event.preventDefault();
    const data = { name,category,description,prod,owner,colour,countInStock,description,price};
    try {
      const response = await axios.post('/api/admin/addproduct', data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <div>
      <Layout>
        <label>
          name:
      <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
      </label>
      <label>
          category:
      <input type="text" value={category} onChange={(e) => setCategory(e.target.value)}></input>
      </label>
      <label>
          prod(colour):
      <input type="text" value={prod} onChange={(e) => setProd(e.target.value)}></input>
      </label>
      <label>
          colour:
      <input type="text" value={colour} onChange={(e) => setColour(e.target.value)}></input>
      </label>
      <label>
          owner(your first name):
      <input type="text" value={owner} onChange={(e) => setOwner(e.target.value)}></input>
      </label>
      <label>
          countInStock:
      <input type="text" value={countInStock} onChange={(e) => setCountInStock(e.target.value)}></input>
      </label>
      <label>
          description:
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}></input>
      </label>
      <label>
          price:
      <input type="text" value={price} onChange={(e) => setPrice(e.target.value)}></input>
      </label>
      <button type="submit" onClick={addproduct}>Submit</button>
      </Layout>
    </div>
  )
}

export default addproduct