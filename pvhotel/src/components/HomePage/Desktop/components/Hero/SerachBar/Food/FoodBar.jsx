import React, { useState } from 'react';
import styled from 'styled-components';
import res from '../../../../../../../assets/res.svg';
import dropdown from '../../../../../../../assets/dd.svg';
import available from '../../../../../../../assets/calander.svg';
import search from '../../../../../../../assets/search.svg';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; 

const SearchBarContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 10px;
  margin-left: -35px;
  background-color: white;
  border-radius: 15px;
  width: 100%;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 750px) {
    flex-direction: column;
    padding: 20px;
    margin-left: 0;
    gap: 20px;
  }
`;

const SearchOption = styled.div`
  margin-top: 10px;
  width: 20%;
  display: flex;
  align-items: start;
  flex-direction: row;
  background-color: white;
  padding: 10px;
  padding-left: 0px;
  border-radius: 10px;
  column-gap: 10px;
  
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
  padding: 20px 40px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;

  @media (max-width: 750px) {
    width: 100%;
    padding: 15px;
  }
`;

const CustomSelectContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 60px;
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
  z-index: 1100;
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

const SearchInput = styled.input`
  width: 100%;
  padding: 5px 10px;
  border-radius: 12px;
  border: none;
  flex-grow: 1;
  font-size: 14px;
  border: 1px solid #7C6A46;

  &:focus {
    outline: none;
  }

  @media (max-width: 750px) {
    width: 100%;
  }
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

const StyledDatePicker = styled(DatePicker)`
  border: none;
  background-color: white;
  font-size: 12px;
  color: rgba(28, 28, 28, 0.6);
  outline: none;
  cursor: pointer;
z-index: 9999;
  @media (max-width: 750px) {
    width: 100%;
  }
`;

const FoodBar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [restaurantType, setRestaurantType] = useState('Select');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSelect = (value) => {
    setRestaurantType(value);
    setIsDropdownOpen(false);
  };

  return (
    <SearchBarContainer>
      <SearchOption>
        <img src={res} alt="Restaurant Icon" />
        <div>
          <span>Restaurant</span>
          <CustomSelectContainer>
            <CustomSelect onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              <span>{restaurantType}</span>
              <DropdownArrow isOpen={isDropdownOpen}>
                <img src={dropdown} alt="Dropdown Arrow" />
              </DropdownArrow>
            </CustomSelect>
            {isDropdownOpen && (
              <CustomOptions>
                {['Persian', 'Italian', 'French'].map((res) => (
                  <CustomOption key={res} onClick={() => handleSelect(res)}>
                    {res}
                  </CustomOption>
                ))}
              </CustomOptions>
            )}
          </CustomSelectContainer>
        </div>
      </SearchOption>

      <SearchOption>
        <img src={available} alt="Calendar Icon" />
        <Div>
          <span>Check in</span>
          <StyledDatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="dd MMM yyyy"
          />
        </Div>
      </SearchOption>

      <SearchOption>
        <img src={search} alt="Search Icon" />
        <Div>
          <span>Food</span>
          <SearchInput type="text" placeholder="Search the food" />
        </Div>
      </SearchOption>

      <SearchButton>Search</SearchButton>
    </SearchBarContainer>
  );
};

export default FoodBar;
