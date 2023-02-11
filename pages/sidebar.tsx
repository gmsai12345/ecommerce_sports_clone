// import React, { useState } from "react";
// import LooksOneIcon from "@mui/icons-material/LooksOne";
// import LooksTwoIcon from "@mui/icons-material/LooksTwo";
// import Looks3Icon from "@mui/icons-material/Looks3";
// import Looks4Icon from "@mui/icons-material/Looks4";
// import Looks5Icon from "@mui/icons-material/Looks5";
// import Looks6Icon from "@mui/icons-material/Looks6";
// import {NavLink} from "react-router-dom";
// import MenuIcon from '@mui/icons-material/Menu';
// import "./App.css";
// const Sidebar = ({children}) => {
//   const[isOpen ,setIsOpen] = useState(false);
//   const toggle = () => setIsOpen (!isOpen);
//   const menuitems=[
//       {
//           path:"/electric_bike",
//           name:"Electric bike",
//           icon:<LooksOneIcon/>
//       },
//       {
//           path:"/electric_scooter",
//           name:"electric scooter",
//           icon:<LooksTwoIcon/>
//       },
//       {
//           path:"/electric_battery",
//           name:"electric battery",
//           icon:<Looks3Icon/>
//       },
//       {
//           path:"/electric_apparels",
//           name:"Comment",
//           icon:<Looks4Icon/>
//       },
//       {
//           path:"/",
//           name:"Product",
//           icon:<Looks5Icon/>
//       },
//       {
//           path:"/ProductList",
//           name:"Product List",
//           icon:<Looks6Icon/>
//       }
//   ]
//   return (
//       <div className="container">
//          <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
//              <div className="top_section">
//                  <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
//                  <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
//                      <MenuIcon onClick={toggle}/>
//                  </div>
//              </div>
//              {
//                  menuitems.map((item, index)=>(
//                      <NavLink to={item.path} key={index} className="link" >
//                          <div className="icon">{item.icon}</div>
//                          <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
//                      </NavLink>
//                  ))
//              }
//          </div>
//          <main>{children}</main>
//       </div>
//   );
// };
import React from 'react'

function sidebar() {
  return (
    <div>sidebar</div>
  )
}

export default sidebar
