import React, { useState } from 'react';
import styled from 'styled-components';
import RoomBar from './Room/RoomBar';
import FoodBar from './Food/FoodBar';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  text-align: start;
  font-family:  'Poppins', sans-serif; 
  
  
`;

const FindContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
`;

const FindText = styled.span`
  font-size: 48px;
  font-weight: bold;
  color: black;
`;

const NavLinks = styled.div`
  display: flex;
  column-gap: 30px;

  span {
    font-family: "Montserrat", sans-serif;
    color: black;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    position: relative;

    &.active::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      border-bottom: 3px solid black;
    }
  }
`;

const SearchHeader = () => {
  
  const [showBookingForm, setShowBookingForm] = useState(true);
  const [showRestaurantForm, setShowRestaurantForm] = useState(false);

  const handleRoomClick = () => {
    setShowBookingForm(true); 
    setShowRestaurantForm(false); 
  };

  const handleFoodClick = () => {
    setShowRestaurantForm(true); 
    setShowBookingForm(false); 
  };

  return (
    <Container>
      <FindContainer>
        
        <NavLinks>
          
          <FindText className={showBookingForm ? 'active' : ''} onClick={handleRoomClick}>
            Rooms
          </FindText>
          <FindText className={showRestaurantForm ? 'active' : ''} onClick={handleFoodClick}>
            Food
          </FindText>
        </NavLinks>
      </FindContainer>
      {showBookingForm && <RoomBar />} 
      {showRestaurantForm && <FoodBar />} 
    </Container>
  );
};

export default SearchHeader;
