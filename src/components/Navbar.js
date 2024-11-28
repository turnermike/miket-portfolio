import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';
import NavbarMenuItem from './NavbarMenuItems';
import logo from '../assets/images/hi-hat-logo-transparent.png';
import {
  AiOutlineHome,
  AiFillHome,
} from "react-icons/ai";
// import {
//   BsLaptop,
//   BsFillLaptopFill,
// } from "react-icons/bs";
import {
  MdOutlineDescription,
  MdDescription
} from "react-icons/md"

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener('scroll', scrollHandler);
  
  return (
    <Navbar
      expanded={expand}
      fixed='top'
      expand='md'
      className={navColour ? 'sticky' : 'navbar'}
    >
      <Container fluid>
        
        <Navbar.Brand href='/' className='d-flex hi-hat-logo'>
          <img src={logo} className='img-fluid logo' alt='brand' />
        </Navbar.Brand>
        {/* <a href="/"><Navbar.Brand>Hi-hat Consulting</Navbar.Brand></a> */}
        <Navbar.Brand href='/' className="hi-hat">Hi-hat Consulting</Navbar.Brand>
        <Navbar.Toggle
          aria-controls='responsive-navbar-nav'
          onClick={() => {
            updateExpanded(expand ? false : 'expanded');
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        
        <Navbar.Collapse id='responsive-navbar-nav' className='main-menu'>
          
          <Nav className='ms-auto' defaultActiveKey='#home'>
            
            <NavbarMenuItem target="/" iconOn={<AiFillHome />} iconOff={<AiOutlineHome />} text="Home" />
            {/* <NavbarMenuItem target="/about" iconOn={<RiUser3Fill />} iconOff={<RiUser3Line />} text="About" /> */}
            {/* <NavbarMenuItem target="/project" iconOn={<BsFillLaptopFill />} iconOff={<BsLaptop />} text="Projects" /> */}
            {/* <NavbarMenuItem target="/portfolio" iconOn={<BsFillLaptopFill />} iconOff={<BsLaptop />} text="Portfolio" /> */}
            <NavbarMenuItem target="/resume" iconOn={<MdDescription />} iconOff={<MdOutlineDescription />} text="Resume" />

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
