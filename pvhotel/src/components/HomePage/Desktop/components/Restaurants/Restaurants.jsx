import React from "react";
import styled from "styled-components";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import res1 from "../../../../../assets/res1.jpg";
import res2 from "../../../../../assets/res2.jpg";
import res3 from "../../../../../assets/res3.jpg";

// Styled components
const Wrapper = styled.div`
  text-align: center;
  padding: 4rem;
  background-color: white;
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

const Card = styled.div`
  background-color: white;
  overflow: hidden;
  padding: 40px;
  width: 300px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
`;

const CardImage = styled.div`
  flex: 3;
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 5px;
  }
`;

const CardInfo = styled.div`
  text-align: center;
  flex: 1;
`;

const CardTitle = styled.h4`
  font-size: 14px;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
`;

const RestaurantsCarousel = () => {
  const restaurantsList = [
    {
      image: res1,
      title: "Italian Restaurant",
    },
    {
      image: res2,
      title: "Persian Restaurant",
    },
    {
      image: res3,
      title: "French Restaurant",
    },
  ];

  // React Slick settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Wrapper>
      <Title>Luxurious Restaurants</Title>
      <Subtitle>Enjoy the best meals at our pleasant places</Subtitle>
      <Slider {...settings}>
        {restaurantsList.map((restaurant, index) => (
          <Card key={index}>
            <CardImage>
              <img src={restaurant.image} alt={restaurant.title} />
            </CardImage>
            <CardInfo>
              <CardTitle>{restaurant.title}</CardTitle>
            </CardInfo>
          </Card>
        ))}
      </Slider>
    </Wrapper>
  );
};

export default RestaurantsCarousel;
