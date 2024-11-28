import React, { useState } from "react";
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";

const NavbarMenuItem = ({ target, iconOn, iconOff, text }) => {
  
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    
      <Nav.Item>
        <Nav.Link
          as={Link}
          to={target}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
        {isHovered ? iconOn : iconOff} {text}
        </Nav.Link>
      </Nav.Item>    
    
  );
  
};

export default NavbarMenuItem;