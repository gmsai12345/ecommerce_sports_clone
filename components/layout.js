import Head from 'next/head';
import React, { useContext } from 'react'
import Store from ".././store"
import NextLink from "next/link";

export default function Layout({children}) {
  return (
    <div>
      <div>{children}</div>
      <NextLink href='/cart' passHref>Cart</NextLink>
      <footer>
        Welectric.INC
      </footer>
    </div>
  );
}