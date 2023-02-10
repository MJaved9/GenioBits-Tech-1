import React from 'react'
import "./navbar.css";
import { Link } from 'react-router-dom';
import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Box,
  SimpleGrid,
  Input,
  Flex
} from "@chakra-ui/react";
import { FaUserAlt, FaSearch ,FaUserTie} from "react-icons/fa";
const Navbar = () => {
let token=JSON.parse(localStorage.getItem("token"))
let profile=JSON.parse(localStorage.getItem("profile"))
  return (
    <div className="header">
      <h2 className="logo"><Link to="/">Food Juction</Link></h2>
      <input type="checkbox" id="chk" />
      <label htmlFor="chk" className="show-menu-btn">
      <HamburgerIcon/>
      </label>

      <ul className="menu">
      <Link to="/profile"><Flex gap="2">{token?"Welcome"+" "+profile.name:""}</Flex></Link>
        <Link to="/login"><Flex gap="2">{token?"":"Login"}<FaUserTie/></Flex></Link>
        <label htmlFor="chk" className="hide-menu-btn">
         <HamburgerIcon/>
        </label>
      </ul>
    </div>
  );
}

export default Navbar