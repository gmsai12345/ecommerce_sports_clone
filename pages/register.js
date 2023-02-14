import { useState } from 'react';
import axios from 'axios';
import Layout from "../././components/layout"
const Register = () => {
  const [isAdmin,setIsAdmin] = useState('false')
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = { name, email, password,isAdmin};
    try {
      const response = await axios.post('/api/register', user);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br/>
      <br/>
      <br/>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br/>
      <br/>
      <br/>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br/>
      <br/>
      <label>
        Admin :
        {/* <input type="checkbox" value={isAdmin} onChange={setIsAdmin('true')} /> */}
      </label>
      <button type="submit">Register</button>
    </form>
    </Layout>
  );
};

export default Register;
