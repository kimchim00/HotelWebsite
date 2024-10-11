import React from 'react';
import styled from 'styled-components';
import SearchHeader from './SerachBar/SearchBar';
import hero from '../../../../../assets/hero.jpg'

const HeroSection = styled.section`
  display: flex;
  align-items: center;
  flex-direction: row;
  column-gap: 7%;
  padding: 60px;
  background-color: white;
  width: auto;
  font-family: 'Poppins',sans-serif;
  @media (max-width: 1400px) {
   column-gap: 5%;
  }
`;

const TextSection = styled.div`
  max-width: 60%;
  
 
`;
const Div = styled.div`
   font-family: "Dancing Script", cursive;
   font-size: 50px;
   font-weight: 500;

`

const Heading = styled.div`
  font-size: 55px;
  font-weight: bold;
  color: #1C1C1C;

`;

const Subheading = styled.div`
  font-size: 15px;
  color: #1C1C1C;
  margin-bottom: 20px;
  margin-top: 10px;
  font-family: "Raleway", sans-serif;
  font-weight: 500;
`;

const Button = styled.button`
  background-color: #7C6A46;
  color: white;
  border: none;
  padding: 18px 44px;
  font-size: 18px;
  border-radius: 50px;
  cursor: pointer;
  margin-bottom: 30px;
  &:hover {
    background-color: #725d3b;
  }
`;

const BookingForm = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 90%;
`;

const FormItem = styled.div`
  text-align: center;
  font-size: 14px;
  color: #333;
`;

const FormLabel = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

const ImageSection = styled.div`
  flex: 1;
  margin-left: 20px;
  display: block;

  img {
    
    width: 500px;
    border-radius: 0px;
    height: 500px;
    @media (max-width: 1300px) {
    width: 350px;
    border-radius: 0px;
    height: 400px;
    padding-bottom: 50px;
  }
  }
  
`;


const Hero = () => {
  return (
    <HeroSection>
      <TextSection>
        <Div style={{ color: '#8d774a', fontStyle: 'italic' }}>Paradise View</Div>
        <Heading>Hotel for every<br/> moment rich in<br/> emotion</Heading>
        <Subheading>
          Every moment feels like the first time<br/> in paradise view.
        </Subheading>
        <Button>Book now</Button>
        <SearchHeader/>
      
      </TextSection>

      <ImageSection>
        
        <img src={hero} alt="Paradise View Hotel" />
      </ImageSection>
    </HeroSection>
  );
};

export default Hero;
