import React from 'react';
import styled from 'styled-components';

import swimming from '../../../../../assets/swimming.svg';
import wifi from '../../../../../assets/wifi.svg';
import breakfast from '../../../../../assets/breakfast.svg';
import gym from '../../../../../assets/gym.svg';
import gamecenter from '../../../../../assets/gamecenter.svg';
import light from '../../../../../assets/light.svg';
import laundry from '../../../../../assets/laundry.svg';
import parking from '../../../../../assets/parking.svg';



const FacilitiesWrapper = styled.div`
  text-align: center;
  padding: 2rem;
  width: auto;
  background-color: white;
  
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 15px;
  color: black;
  margin-bottom: 2rem;
`;

const FacilitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  justify-items: center;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const FacilityCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  padding: 1.5rem;
 
  width: 150px;
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 1rem;
`;

const FacilityName = styled.p`
  font-size: 15px;
  font-weight: 500;
  color: #7C6A46;

  
`;

const Facilities = () => {
  const facilityList = [
    { name: 'Swimming Pool', icon: swimming },
    { name: 'Wifi', icon: wifi },
    { name: 'Breakfast', icon: breakfast },
    { name: 'Gym', icon: gym },
    { name: 'Game Center', icon: gamecenter },
    { name: '24/7 Light', icon: light },
    { name: 'Laundry', icon: laundry },
    { name: 'Parking Space', icon: parking }
  ];

  return (
    <FacilitiesWrapper>
      <Title>Our Facilities</Title>
      <Subtitle>We offer modern (5 star) hotel facilities for your comfort.</Subtitle>
      <FacilitiesGrid>
        {facilityList.map((facility, index) => (
          <FacilityCard key={index}>
            <Icon src={facility.icon} alt={facility.name} />
            <FacilityName>{facility.name}</FacilityName>
          </FacilityCard>
        ))}
      </FacilitiesGrid>
    </FacilitiesWrapper>
  );
};

export default Facilities;
