// Install react-slick and slick-carousel if not already installed:
// npm install react-slick slick-carousel

import React from "react";
import styled from "styled-components";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import room1 from "../../../../../assets/room1.png";
import room2 from "../../../../../assets/room2.png";
import room3 from "../../../../../assets/room3.png";
import room4 from "../../../../../assets/room3.png";
import bckH from "../../../../../assets/bckH.svg";

const RoomsWrapper = styled.div`
  text-align: center;
  justify-content: center;
  padding: 2rem;
  background-image: url(${bckH});
  background-repeat: no-repeat;
  background-size: cover;
  width: auto;
`;

const Title = styled.h2`
  font-size: 50px;
  font-weight: 500;
  color: white;
  margin-bottom: 1.5rem;
  font-family: "Raleway", sans-serif;
`;

const Subtitle = styled.p`
  font-size: 15px;
  color: white;
  margin-bottom: 2rem;
  font-family: "Raleway", sans-serif;
`;

const RoomCard = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
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
  img {
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

const AvailabilityTag = styled.div`
  position: absolute;
  background-color: #7c6a46;
  color: white;
  padding: 5px 10px;
  border-radius: 2.5px;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  font-size: 11px;
`;

const RoomCardWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const Rooms = () => {
  const roomsList = [
    {
      image: room1,
      title: "Television set, Extra sheets and Breakfast",
      availableRooms: "2 Rooms available",
    },
    {
      image: room2,
      title: "Television set, Extra sheets, Breakfast, and fireplace",
      availableRooms: "4 Rooms available",
    },
    {
      image: room3,
      title: "Television set, Extra sheets, Breakfast, fireplace, Console and bed rest",
      availableRooms: "8 Rooms available",
    },
    {
      image: room4,
      title: "Television set, Extra sheets, Breakfast, fireplace, Console and bed rest",
      availableRooms: "7 Rooms available",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <RoomsWrapper>
      <Title>Luxurious Rooms</Title>
      <Subtitle>All rooms are designed for your comfort</Subtitle>
      <Slider {...settings}>
        {roomsList.map((room, index) => (
          <RoomCardWrapper key={index}>
            <AvailabilityTag>{room.availableRooms}</AvailabilityTag>
            <RoomCard>
              <RoomImage>
                <img src={room.image} alt={room.title} />
              </RoomImage>
              <RoomInfo>
                <RoomTitle>{room.title}</RoomTitle>
              </RoomInfo>
            </RoomCard>
          </RoomCardWrapper>
        ))}
      </Slider>
    </RoomsWrapper>
  );
};

export default Rooms;