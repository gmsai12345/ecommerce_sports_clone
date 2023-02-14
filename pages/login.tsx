import React, { useState } from 'react';
import NextLink from 'next/link';
import Layout from '@/components/layout';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        })
      });

      const data = await response.json();
    }
    catch (err) {
      setError(err.message);
    }
  }

  return (
    <Layout>
    <div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <form onSubmit={handleSubmit} style={{ width: '400px' }}>
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
              <button type="submit">Login</button>
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
