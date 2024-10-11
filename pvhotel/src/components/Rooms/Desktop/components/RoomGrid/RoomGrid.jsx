import React from 'react';
import styled from 'styled-components';
import room2 from '../../../../../assets/room3.png'

// Styled-components for the card grid and individual room card
const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 80px;
`;

const RoomCard = styled.div`
  background-color: white;
  border-radius: 0px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const RoomImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const RoomDetails = styled.div`
  padding: 20px;
  flex: 1;

  h3 {
    font-size: 20px;
    font-weight: 700;
    margin: 0;
  }

  p {
    font-size: 16px;
    margin: 5px 0;
  }

  .price {
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }

  .availability {
    color: green;
    font-size: 14px;
  }
`;

const Features = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  border-top: 1px solid #eee;

  img {
    width: 24px;
    height: 24px;
  }
`;

const BookButton = styled.button`
  background-color: #8c7c62;
  color: white;
  border: none;
  padding: 15px;
  cursor: pointer;
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
            <h3>{room.title}</h3>
            <p className="price">{room.price}</p>
            <p className="availability">Available: {room.availability}</p>
          </RoomDetails>
          <Features>
            <img src="/path/to/icon1.png" alt="Feature 1" />
            <img src="/path/to/icon2.png" alt="Feature 2" />
            <img src="/path/to/icon3.png" alt="Feature 3" />
          </Features>
          <BookButton>Book Now</BookButton>
        </RoomCard>
      ))}
    </CardGrid>
  );
};

export default RoomGrid;
