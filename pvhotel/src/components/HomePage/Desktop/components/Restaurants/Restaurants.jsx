import React from 'react';
import styled from 'styled-components';


import room1 from '../../../../../assets/res1.jpg';
import room2 from '../../../../../assets/res2.jpg';
import room3 from '../../../../../assets/res3.jpg';


const RoomsWrapper = styled.div`
  text-align: center;
  padding: 2rem;
 background-color: white;
  width: auto;
`;

const Title = styled.h2`
  font-size: 50px;
  font-weight: 500;
  color: black;
  margin-bottom: 1.5rem;
  font-family: "Raleway", sans-serif;
`;

const Subtitle = styled.p`
  font-size: 15px;
  color: black;
  margin-bottom: 2rem;
  font-family: "Raleway", sans-serif;
`;

const RoomsGrid = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
  text-align: center;
  justify-content: center;
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const RoomCard = styled.div`
  background-color: white;
  border-radius: 10px;

  overflow: hidden;
  text-align: left;
  padding: 20px;
  width: 300px;
  height: 250px;
  display: flex;
  flex-direction: column;
`;

const RoomImage = styled.div`
flex: 3;

img{
    width: 100%;
  height: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
}
 
  
`;

const RoomInfo = styled.div`
margin-top: -10px;
flex: 1;
 
`;

const RoomTitle = styled.h4`
  font-size: 14px;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
`;

const RoomDetails = styled.p`
  font-size: 1rem;
  color: gray;
`;

const AvailabilityTag = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: #7C6A46;
  color: white;
  padding: 5px 10px;
  border-radius: 2.5px;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  font-size: 11px;
  
`;

const RoomCardWrapper = styled.div`
  position: relative;
`;

const Restaurants = () => {
  const roomsList = [
    {
      image: room1,
      title: 'Italian Restaurant',
      
    },
    {
      image: room2,
      title: 'Persian Restaurant',
      
    },
    {
      image: room3,
      title: 'French Restaurant',
      
    }
  ];

  return (
    <RoomsWrapper>
      <Title>Luxurious Retaurants</Title>
      <Subtitle>Enjoy the best meals at our pleasent places</Subtitle>
      <RoomsGrid>
        {roomsList.map((room, index) => (
          <RoomCardWrapper key={index}>
            
            <RoomCard>
              <RoomImage >
                <img src={room.image} alt={room.title}/>
              </RoomImage>
              <RoomInfo>
                <RoomTitle>{room.title}</RoomTitle>
                
              </RoomInfo>
            </RoomCard>
          </RoomCardWrapper>
        ))}
      </RoomsGrid>
    </RoomsWrapper>
  );
};

export default Restaurants;
