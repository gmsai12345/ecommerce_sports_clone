import React, { useContext } from 'react'
import Store from ".././store"
import NextLink from "next/link";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
export default function Layout({children}) {
  return (
    <div>
      <div>
          <nav className="nav">
            <NextLink href="/" className="site-title">
              Welectric
            </NextLink>
            <ul>
              <NextLink href="/cart" passHref>
                <ShoppingCartIcon />
              </NextLink>
              <NextLink href="/login" passHref>
                Login
              </NextLink>
            </ul>
          </nav>
        </div>
      <div>{children}</div>
      <footer>
        Welectric.INC
      </footer>
    </div>
  );
}