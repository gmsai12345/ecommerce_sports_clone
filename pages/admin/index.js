// i can use cookies to get the login data and show here
import React, { useState } from 'react';
import NextLink from 'next/link';
import Layout from '@/components/layout';
import axios from 'axios';
import { useRouter } from 'next/router';

const LoginPage = () => {
  const router = useRouter();

  const [name, setName] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/admin', {
          name,
                  
      });
      alert('login successful')
      router.push(`/admin/${name}`);
    }
    catch (err) {
      setError(err.message);
      alert('wrong name');
    }
  }

  return (
    <Layout>
    <div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <form style={{ width: '400px' }}>
            <h2>Login</h2>
            <div style={{ margin: '1em 0' }}>
              <label htmlFor="email">Name:</label>
              <input
                type="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            
            
            <div style={{ margin: '1em 0' }}>
            
              <button type="submit" onClick={handleSubmit}>Submit</button>
              
            </div>
            <NextLink href="/register">
              Not a member yet? Sign up
            </NextLink>
          </form>
        </div>
    </div>
    </Layout>
  );
};

export default LoginPage;
