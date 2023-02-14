import React, { useState } from 'react';
import NextLink from 'next/link';
import Layout from '@/components/layout';
import axios from 'axios';
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', {
          email,
          password        
      });
      alert('login successful')
    }
    catch (err) {
      setError(err.message);
    }
  }

  return (
    <Layout>
    <div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <form style={{ width: '400px' }}>
            <h2>Login</h2>
            <div style={{ margin: '1em 0' }}>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div style={{ margin: '1em 0' }}>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div style={{ margin: '1em 0' }}>
              <button type="submit" onClick={handleSubmit}>Login</button>
            </div>
            <NextLink href="/signup">
              Not a member yet? Sign up
            </NextLink>
          </form>
        </div>
    </div>
    </Layout>
  );
};

export default LoginPage;
