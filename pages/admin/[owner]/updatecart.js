// // do it using getserversideprops
// import React,{useState} from 'react'
// import axios from 'axios';
// function updatecart(props) {
//   const [name, setName] = useState(props.product.name);
//   const [category, setCategory] = useState(props.product.category);
//   const [prod, setProd] = useState(props.product.prod);
//   const [owner, setOwner] = useState(props.product.owner);
//   const [countInStock, setCountInStock] = useState(props.product.countInStock);
//   const [description, setDescription] = useState(props.product.description);
//   const [price, setPrice] = useState(props.product.price);
//   const [colour, setColour] = useState(props.product.colour);
//   const updateproduct = async (event,props) => {
//     event.preventDefault();
//     const data = { name,category,description,prod,owner,colour,countInStock,price};
//     try {
//       const response = await axios.post(`/api/admin/${props.product.owner}/updatecart/${props.product.prod}`, data);
//       console.log(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };



//   return (
//     <div>
//         <label>
//           name:
//       <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
//       </label>
//       <label>
//           category:
//       <input type="text" value={category} onChange={(e) => setCategory(e.target.value)}></input>
//       </label>
//       <label>
//           prod(colour):
//       <input type="text" value={prod} onChange={(e) => setProd(e.target.value)}></input>
//       </label>
//       <label>
//           colour:
//       <input type="text" value={colour} onChange={(e) => setColour(e.target.value)}></input>
//       </label>
//       <label>
//           owner(your first name):
//       <input type="text" value={owner} onChange={(e) => setOwner(e.target.value)}></input>
//       </label>
//       <label>
//           countInStock:
//       <input type="text" value={countInStock} onChange={(e) => setCountInStock(e.target.value)}></input>
//       </label>
//       <label>
//           description:
//       <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}></input>
//       </label>
//       <label>
//           price:
//       <input type="text" value={price} onChange={(e) => setPrice(e.target.value)}></input>
//       </label>
//       <button type="submit" onClick={updateproduct}>Submit</button>

//     </div>
//   )
// }

// export default updatecart;