import React from 'react';
import Head from 'next/head';

export default function Layout({children}) {
  return (
    <div>
      <div>{children}</div>
      <footer>
        Welectric.INC
      </footer>
    </div>
  );
}