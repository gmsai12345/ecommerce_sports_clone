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
      <br/>
      <br/>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '400px' }}>
      <label style={{ margin: '1em 0' }}>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
      </label>
      <br/>
      <br/>
      <br/>
      <label style={{ margin: '1em 0' }}>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      </label>
      <br/>
      <br/>
      <br/>
      <label style={{ margin: '1em 0' }}>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br/>
      <br/>
      <label style={{ margin: '1em 0' }}>
        Admin :
         <input type="checkbox" value={isAdmin} onClick={(e) => setIsAdmin('true')} /> 
      </label>
      <br/>
      <br/>
      <button type="submit" onClick={handleSubmit}>Register</button>
      </div>
      </div>
    </Layout>
  );
};

export default Register;
