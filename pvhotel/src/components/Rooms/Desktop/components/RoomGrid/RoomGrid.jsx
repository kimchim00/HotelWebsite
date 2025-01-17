import React from 'react';
import styled from 'styled-components';
import room2 from '../../../../../assets/room3.png'
import wifiR from '../../../../../assets/wifiR.svg'
import shower from '../../../../../assets/shower.svg'
import tv from '../../../../../assets/tv.svg'
import { Link } from "react-router-dom";

// Styled-components for the card grid and individual room card
const CardGrid = styled.div`
justify-content: center;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 30px;
  padding: 100px;
`;

const RoomCard = styled.div`
  background-color: white;
  border-radius: 0px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const Div = styled.div`

  display: flex;
  flex-direction: column;
width: 100%;
`;

const Row = styled.div`
  border-top: 1px solid #7C6A46;
  display: flex;
  flex-direction: row;
width: 100%;
padding: 5px;
column-gap: 20px;
`;


const Part = styled.div`
width: 100%;

 
  align-items: center;
  text-align: end;
  color: green;
  font-size: 14px;

`;

const RoomImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const RoomDetails = styled.div`
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: row;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  color: #7C6A46;
    
  h3 {
    font-size: 20px;
    font-weight: 600;
    margin: 0;
  }

  p {
    font-size: 16px;
    margin: 5px 0;
   
  }

  .price {
    font-size: 18px;
    font-weight: 500;
    color: #7C6A46;
  }

`;

const Features = styled.div`
   width: 50%;
  display: flex;
  flex-direction: row;
  column-gap: 20px;
  padding: 10px 0;

  img {
    width: 24px;
    height: 24px;
    background-color: #F2F2F2;
    justify-content: center;
    
  }
`;

const Rec = styled.div`
  
  padding: 10px 0;
  border-top: 1px solid #eee;
width: 100%;
border-radius: 50%;
  
    background-color: #F2F2F2;
    justify-content: center;
    align-items: center;
    text-align: center;
    
  
`;


const BookButton = styled.button`
  width: 40%;
  background-color: #7C6A46;
  border-radius: 3px;
  color: white;
  border: none;
  margin-top: 5px;
  padding: 0px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-weight: bold;

  &:hover {
    background-color: #6d624e;
  }
`;

// Main component
const RoomGrid = () => {
  // You can use real data or map through an array of room objects
  const rooms = [
    {
        id: 1,
        title: 'The Royal Room',
        price: '₦190,000',
        availability: 'Yes',
        imageUrl: room2, // Replace with real URL
      }, {
        id: 1,
        title: 'The Royal Room',
        price: '₦190,000',
        availability: 'Yes',
        imageUrl: room2,
      }, {
        id: 1,
        title: 'The Royal Room',
        price: '₦190,000',
        availability: 'Yes',
        imageUrl: room2,
      }, {
        id: 1,
        title: 'The Royal Room',
        price: '₦190,000',
        availability: 'Yes',
        imageUrl: room2,
      }, {
        id: 1,
        title: 'The Royal Room',
        price: '₦190,000',
        availability: 'Yes',
        imageUrl: room2,
      }, {
        id: 1,
        title: 'The Royal Room',
        price: '₦190,000',
        availability: 'Yes',
        imageUrl: room2,
      },
    // Add more room objects as necessary
  ];

  return (
    <CardGrid>
      {rooms.map((room) => (
        <RoomCard key={room.id}>
          <RoomImage src={room.imageUrl} alt={room.title} />
          <RoomDetails>
            <Div>
            <h3>{room.title}</h3>
            <p className="price">{room.price}</p>
            </Div>
            <Part>Available: {room.availability}</Part>
          </RoomDetails>
          <Row>
          <Features>
            <Rec>
            <img src={wifiR} alt="Feature 1" />
            </Rec>
            <Rec>
            <img src={shower} alt="Feature 2" />
            </Rec>
            <Rec>
            <img src={tv} alt="Feature 3" />
            </Rec>
          </Features>
          <BookButton><Link to={"/Rooms/detail"}>Book Now</Link></BookButton>
          </Row>
        </RoomCard>
      ))}
    </CardGrid>
  );
};

export default RoomGrid;
