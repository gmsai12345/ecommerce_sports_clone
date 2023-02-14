import { useState } from 'react';
import axios from 'axios';
import Layout from "../././components/layout"
const Register = () => {
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
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
    </Layout>
  );
};

export default Register;
