import React, { useState, useContext } from "react";
import styled from "styled-components";
import { addDays, format, differenceInDays } from "date-fns";
import { useNavigate } from "react-router-dom"; // For navigation
import { AuthContext } from '../../../../../context/AuthContext';

import r1 from "../../../../../assets/r1.svg";

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Poppins", sans-serif;
  padding: 20px;

  @media (min-width: 768px) {
    padding: 40px;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  margin: 10px 0;
  color: #2f2f2f;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 28px;
  }
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #707070;
  margin-bottom: 30px;
  text-align: center;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  background-color: #fff;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    padding: 20px;
  }
`;

const ImageSection = styled.div`
  flex: 1;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-bottom: 1px solid #f0f0f0;

    @media (min-width: 768px) {
      height: 300px;
      border-bottom: none;
      border-right: 1px solid #f0f0f0;
    }
  }
`;

const InfoSection = styled.div`
  flex: 2;
  padding: 20px;
`;

const Heading = styled.h3`
  font-size: 20px;
  margin-bottom: 5px;
  color: #2f2f2f;
`;

const Location = styled.p`
  font-size: 16px;
  color: #707070;
  margin-bottom: 20px;
`;

const Label = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin: 10px 0;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 10px 0;

  button {
    border: none;
    background-color: #f7f7f7;
    color: #2f2f2f;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;

    &:hover {
      background-color: #ddd;
    }
  }

  input {
    width: 50px;
    text-align: center;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 5px;
  }

  span {
    font-size: 16px;
  }
`;

const PriceInfo = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 20px 0;
  color: #2f2f2f;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;

    &:nth-child(1) {
      background-color: #84643b;
      color: white;

      &:hover {
        background-color: #755233;
      }
    }

    &:nth-child(2) {
      background-color: #f7f7f7;
      color: #2f2f2f;

      &:hover {
        background-color: #ddd;
      }
    }
  }
`;

// React Component


// [Styled Components code omitted for brevity...]

const BookingCard = () => {
  const [pricePerDay] = useState(200);
  const [startDate, setStartDate] = useState("2025-01-20");
  const [endDate, setEndDate] = useState(
    format(addDays(new Date("2025-01-20"), 1), "yyyy-MM-dd")
  );
  const [days, setDays] = useState(2);

  const { isAuthenticated } = useContext(AuthContext); // Fetch auth status from context
  const navigate = useNavigate();

  // Handle increment/decrement of days
  const handleDaysChange = (increment) => {
    const newDays = Math.max(1, days + increment);
    setDays(newDays);
    setEndDate(format(addDays(new Date(startDate), newDays - 1), "yyyy-MM-dd"));
  };

  // Handle start date change
  const handleStartDateChange = (e) => {
    const newStartDate = e.target.value;
    setStartDate(newStartDate);
    setEndDate(format(addDays(new Date(newStartDate), days - 1), "yyyy-MM-dd"));
  };

  // Handle end date change
  const handleEndDateChange = (e) => {
    const newEndDate = e.target.value;
    setEndDate(newEndDate);
    setDays(differenceInDays(new Date(newEndDate), new Date(startDate)) + 1);
  };

  // Calculate total cost
  const calculateTotal = () => pricePerDay * days;

  // Handle "Book Now" button click
  const handleBookNow = () => {
    if (isAuthenticated) {
      navigate("/payment", { state: { startDate, endDate, total: calculateTotal() } });
    } else {
      navigate("/Booking/Rooms/d1/signup");
    }
  };

  return (
    <Container>
      <Title>Booking Information</Title>
      <Subtitle>Please fill up the blank fields below</Subtitle>

      <FormWrapper>
        <ImageSection>
          <img src={r1} alt="Blue Origin Fams" />
        </ImageSection>

        <InfoSection>
          <Heading>Blue Origin Fams</Heading>
          <Location>Galle, Sri Lanka</Location>

          <Label>How long will you stay?</Label>
          <Row>
            <button onClick={() => handleDaysChange(-1)}>-</button>
            <input type="number" value={days} readOnly />
            <button onClick={() => handleDaysChange(1)}>+</button>
          </Row>

          <Label>Pick a Start Date</Label>
          <input type="date" value={startDate} onChange={handleStartDateChange} />

          <Label>Pick an End Date</Label>
          <input type="date" value={endDate} onChange={handleEndDateChange} />

          <PriceInfo>
            You will pay <b>${calculateTotal()} USD</b> for <b>{days} Days</b>
          </PriceInfo>

          <ButtonWrapper>
            <button onClick={handleBookNow}>Book Now</button>
            <button>Cancel</button>
          </ButtonWrapper>
        </InfoSection>
      </FormWrapper>
    </Container>
  );
};

export default BookingCard;
