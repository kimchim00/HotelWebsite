import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import available from '../../../../../../../assets/calander.svg';
import persons from '../../../../../../../assets/person.svg';
import dropdown from '../../../../../../../assets/dd.svg';
import 'react-datepicker/dist/react-datepicker.css';

const BookingFormContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 10px;
  padding-left: 0px;
  background-color: white;
  border-radius: 15px;
  width: 100%;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 750px) {
    flex-direction: column;
    padding: 20px;
    gap: 20px;
  }
`;

const BookingOption = styled.div`
  margin-top: 10px;
  width: 25%;
  display: flex;
  align-items: start;
  flex-direction: row;
  background-color: white;
  padding: 10px;
  padding-left: 0px;
  border-radius: 10px;
  column-gap: 10px;
  z-index: 1000;
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  color: rgba(28, 28, 28, 0.6);

  span {
    font-size: 16px;
    font-weight: 500;
    color: black;
  }

  img {
    height: 20px;
    width: 20px;
  }

  &.First {
    padding-top: 15px;
  }

  @media (max-width: 750px) {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const SearchButton = styled.button`
  background-color: #84643b;
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-left: 20px;
  white-space: nowrap;
  flex-shrink: 0;

  @media (max-width: 750px) {
    width: 100%;
    margin-left: 0;
    padding: 15px;
  }
`;

const StyledDatePicker = styled(DatePicker)`
  border: none;
  background-color: white;
  font-size: 12px;
  color: rgba(28, 28, 28, 0.6);
  outline: none;
  cursor: pointer;
  width: 100%;

  @media (max-width: 750px) {
    font-size: 14px;
    width: 100%;
  }
`;

const CustomSelectContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 60px;
  flex-direction: row;
  font-size: 12px;
  color: rgba(28, 28, 28, 0.6);

  @media (max-width: 750px) {
    width: 100%;
  }
`;

const CustomSelect = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  column-gap: 10px;
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;

  span {
    font-size: 12px;
    color: rgba(28, 28, 28, 0.6);
  }

  @media (max-width: 750px) {
    width: 100%;
  }
`;

const CustomOptions = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
  color: black;
  border-radius: 10px;
  z-index: 100;
  font-size: 12px;
  color: rgba(28, 28, 28, 0.6);
`;

const CustomOption = styled.li`
  padding: 10px;
  cursor: pointer;
  font-size: 12px;
  color: rgba(28, 28, 28, 0.6);
  &:hover {
    background-color: #f0f0f0;
  }
`;

const DropdownArrow = styled.div`
  align-items: center;
  img {
    align-items: center;
    width: 8.49px;
    height: 5.66px;
  }

  transform: ${(props) => (props.isOpen ? 'rotate(180deg)' : 'rotate(0)')};
  transition: transform 0.3s ease;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  &.Person {
    row-gap: 0px;
  }

  @media (max-width: 750px) {
    width: 100%;
  }
`;

const RoomBar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [personCount, setPersonCount] = useState(1);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSelect = (value) => {
    setPersonCount(value);
    setIsDropdownOpen(false);
  };

  return (
    <BookingFormContainer>
      <BookingOption className="First">
        <img src={persons} alt="Person Icon" />
        <Div className="Person">
          <span>Person</span>
          <CustomSelectContainer>
            <CustomSelect onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              <span>{personCount}</span>
              <DropdownArrow isOpen={isDropdownOpen}>
                <img src={dropdown} alt="" />
              </DropdownArrow>
            </CustomSelect>
            {isDropdownOpen && (
              <CustomOptions>
                {[1, 2, 3, 4].map((person) => (
                  <CustomOption key={person} onClick={() => handleSelect(person)}>
                    {person}
                  </CustomOption>
                ))}
              </CustomOptions>
            )}
          </CustomSelectContainer>
        </Div>
      </BookingOption>

      <BookingOption>
        <img src={available} alt="Calendar Icon" />
        <Div>
          <span>Check in</span>
          <StyledDatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="dd MMM yyyy"
          />
        </Div>
      </BookingOption>

      <BookingOption>
        <img src={available} alt="Calendar Icon" />
        <Div>
          <span>Check out</span>
          <StyledDatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            dateFormat="dd MMM yyyy"
          />
        </Div>
      </BookingOption>

      <SearchButton>Book Now</SearchButton>
    </BookingFormContainer>
  );
};

export default RoomBar;
