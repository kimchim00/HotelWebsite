import React from 'react';
import styled from 'styled-components';
import heroImage from '../../../../../assets/bckR.svg'; // Adjust path as necessary

const HeroSection = styled.section`
  background-image: url(${heroImage});
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  position: relative;
`;

const HeroContent = styled.div`
  max-width: 800px;
  padding: 20px;

  h1 {
    font-size: 48px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  p {
    font-size: 20px;
    line-height: 1.6;
  }
`;

const ScrollDownIcon = styled.div`
  position: absolute;
  bottom: 20%;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;

  svg {
    fill: black;
    width: 40px;
    height: 40px;
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <HeroContent>
        <h1>Rooms and Suites</h1>
        <p>
          The elegant luxury bedrooms in this gallery showcase custom interior
          designs & decorating ideas. View pictures and find your perfect luxury
          bedroom design.
        </p>
      </HeroContent>
      <ScrollDownIcon>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-down-circle">
          <circle cx="12" cy="12" r="10" />
          <polyline points="8 12 12 16 16 12" />
          <line x1="12" y1="8" x2="12" y2="16" />
        </svg>
      </ScrollDownIcon>
    </HeroSection>
  );
};

export default Hero;
