import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import logo from "../../../../../assets/logo.svg";

const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: white;
  position: relative;
`;

const Logo = styled.div`
  img {
    height: 30px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  @media (max-width: 768px) {
    display: ${(props) => (props.showMenu ? "flex" : "none")};
    flex-direction: column;
    background-color: white;
    position: absolute;
    top: 70px;
    right: 0;
    width: 100%;
    padding: 20px;
    gap: 20px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    z-index: 1000;
  }

  a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    font-size: 15px;
    &:hover {
      color: #8d774a;
    }
  }
`;

const HamburgerIcon = styled.div`
  display: none;
  font-size: 24px;
  color: #8d774a;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const BookNowButton = styled.button`
  background-color: #8d774a;
  color: white;
  border: none;
  padding: 10px 30px;
  border-radius: 5px;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    background-color: #7c6a46;
  }
`;

const NavbarR = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <NavbarWrapper>
      <Logo>
        <img src={logo} alt="Logo" />
      </Logo>

      <HamburgerIcon onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </HamburgerIcon>

      <NavLinks showMenu={menuOpen}>
        <Link to="/">Home</Link>
        <a href="#explore">Explore</a>
        <Link to="/Rooms">Rooms</Link>
        <Link to="/Restaurants">Restaurants</Link>
        <a href="#contact">Contact</a>
        <BookNowButton>Book Now</BookNowButton>
      </NavLinks>
    </NavbarWrapper>
  );
};

export default NavbarR;
