import React from 'react';
import styled from 'styled-components';
import { FaUser, FaBars } from 'react-icons/fa';
import logo from '../../../../../assets/logo.svg'
import menu from '../../../../../assets/gg_menu.svg'
import user from '../../../../../assets/user.svg'
import cart from '../../../../../assets/cart.svg'


import { Link } from 'react-router-dom';


const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: auto;
  padding: 20px;

  background-color: white;
 
`;

const Logo = styled.div`
  font-size: 24px;
  color: #8d774a;  
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
 
  @media (max-width: 1100px) {
    gap: 20px;
  }

  a {
    margin: 0 15px;
    text-decoration: none;
    color: #333;
    font-weight: 500;
    font-size: 15px;
    &:hover {
      color: #8d774a;
     
    }
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
    background-color: #7C6A46;
  }
`;

const UserMenu = styled.div`
  display: flex;
  padding-right: 30px;
  align-items: center;
  margin-left: -150px;
  @media (max-width: 1100px) {
    margin-left: 0px;
  }

`;

const IconWrapper = styled.div`
  margin-left: 15px;
  font-size: 20px;
  color: #8d774a;
  cursor: pointer;
`;

const NavbarRes = () => {
  return (
    <NavbarWrapper>
      <Logo>
        
        <img src={logo} alt="Logo" style={{ height: '30px' }} />
      </Logo>

      <NavLinks>
        <Link to="/">Home</Link>
        <a href="#explore">Explore</a>
        <Link to="/Rooms">Rooms</Link>
        <Link to="/Restaurants">Restaurants</Link>
        <a href="#contact">Contact</a>
      </NavLinks>

      <UserMenu>
        
        <IconWrapper>
          <img src={menu} alt="" />
        </IconWrapper>
        <IconWrapper>
          <img src={user} alt="" />
        </IconWrapper>
        <IconWrapper>
          <img src={cart} alt="" />
        </IconWrapper>
      </UserMenu>
    </NavbarWrapper>
  );
};

export default NavbarRes;
