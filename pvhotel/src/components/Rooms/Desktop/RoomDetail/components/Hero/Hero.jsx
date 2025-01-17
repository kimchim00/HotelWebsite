import React from "react";
import styled from "styled-components";

// Importing assets
import r1 from "../../../../../../assets/r1.svg";
import r3 from "../../../../../../assets/r3.svg";
import bed from "../../../../../../assets/icons/Bed.svg";
import apart from "../../../../../../assets/icons/Hotel.svg";
import bath from "../../../../../../assets/icons/Bath Tub.svg";
import food from "../../../../../../assets/icons/Food.svg";
import wifi from "../../../../../../assets/icons/Wi-Fi.svg";
import laundry from "../../../../../../assets/icons/Laundry.svg";
import tv from "../../../../../../assets/icons/TV.svg";

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  font-family: "Poppins", sans-serif;

  @media (min-width: 768px) {
    
    padding: 40px 80px;
  }
`;

const ImagesSection = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
height: 50%;
  img {
    width: 100%;
    border-radius: 10px;
    object-fit: cover;

  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    height: 100%;
    
  }
`;

const Picsec = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 50%;

  img {
    height: 50%;
    width: 100%;
    object-fit: cover;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    gap: 5px;
    height: 100%;
    margin-bottom: 30%;

    img {
    
      height: 100px;
      width: auto;
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;

    img {
      height: 80px;
      width: 100%;
    }
  }
`;

const DetailsSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    margin-top: 20px;
  }
`;

const TextSection = styled.div`
  width: 100%;
  max-width: 600px;
  text-align: center;
  color: #4b4b4b;

  @media (min-width: 768px) {
    text-align: left;
    margin-top: 40px;
  }
`;

const Title = styled.div`
  text-align: center;
  font-size: 20px;
  color: #84643b;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    font-size: 28px;

  }
`;

const Location = styled.p`
  font-size: 16px;
  color: rgba(28, 28, 28, 0.6);

  @media (max-width: 750px) {
    margin-top: 20px;
  }
`;

const Description = styled.p`
  font-size: 14px;
  line-height: 1.6;
  margin-top: 20px;

 
`;

const Features = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const Feature = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  color: rgba(28, 28, 28, 0.6);

  img {
    width: 30px;
    height: 30px;
    margin-bottom: 5px;
  }
`;

const BookingSection = styled.div`
  width: 100%;
  max-width: 300px;
  background-color: #f7f7f7;
  padding: 20px;
  border-radius: 15px;
  border: 1px solid rgba(28, 28, 28, 0.2);
  text-align: center;
  margin-top: 20px;

  @media (min-width: 768px) {
    text-align: left;
    margin-top: 0;
  }
`;

const Price = styled.p`
  font-size: 20px;
  color: #84643b;
  font-weight: bold;
  margin: 10px 0;

  span {
    font-size: 24px;
    color: rgba(28, 28, 28, 0.6);
    font-weight: 200;
  }
`;

const BookButton = styled.button`
  background-color: #84643b;
  color: white;
  border: none;
  padding: 10px 50px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #755233;
  }

  @media (max-width: 480px) {
    padding: 10px 30px;
    font-size: 14px;
  }
`;

// BookingCard Component
const BookingCard = () => {
  return (
    <Container>
      {/* Title */}
      <Title>Blue Origin Fams</Title>
      
      {/* Images Section */}
      <ImagesSection>
        <img src={r1} alt="Room 1" />
        <Picsec>
          <img src={r1} alt="Room 2" />
          <img src={r3} alt="Room 3" />
        </Picsec>
      </ImagesSection>

      {/* Details Section */}
      <DetailsSection>
        <TextSection>
          <Location>Galle, Sri Lanka</Location>
          <Description>
            Minimal techno is a minimalist subgenre of techno music. It is
            characterized by a stripped-down aesthetic that exploits repetition
            and understated development.
          </Description>
          <Features>
            <Feature>
              <img src={bed} alt="Bedroom" />
              <span>1 Bedroom</span>
            </Feature>
            <Feature>
              <img src={bath} alt="Bathroom" />
              <span>1 Bathroom</span>
            </Feature>
            <Feature>
              <img src={wifi} alt="WiFi" />
              <span>10 mbps/s</span>
            </Feature>
            <Feature>
              <img src={laundry} alt="Laundry" />
              <span>Laundry</span>
            </Feature>
            <Feature>
              <img src={tv} alt="TV" />
              <span>TV</span>
            </Feature>
          </Features>
        </TextSection>

        {/* Booking Section */}
        <BookingSection>
          <Price>
            $200 <span>per Day</span>
          </Price>
          <BookButton>Book Now!</BookButton>
        </BookingSection>
      </DetailsSection>
    </Container>
  );
};

export default BookingCard;
