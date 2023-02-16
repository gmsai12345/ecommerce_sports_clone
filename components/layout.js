import React, { useContext } from 'react'


import NextLink from "next/link";
import { Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import Welectric from ".././public/images/Welectric.png"
export default function Layout({children}) {
  // const { state, dispatch } = useContext(Store);
  // const {cart} = state;
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
                <Badge
                      
                    ></Badge>
              </NextLink>
              <NextLink href="/login" passHref>
                Login
              </NextLink>
            </ul>
          </nav>
        </div>
      <div>{children}</div>
      <footer style={{textAlign:'center' }}>
        Welectric.INC
      </footer>
    </div>
  );
}