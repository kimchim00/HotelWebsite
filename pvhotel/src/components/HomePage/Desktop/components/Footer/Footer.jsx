import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #7C6A46; 
  color: #ffffff;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const FooterSection = styled.div`
  flex:0.5;
  padding: 30px;


  h4 {
    margin-top: 45px;
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 15px;

    &.Ttle{
        margin-top: 0px;
        font-family: "Dancing Script", cursive;
        font-size: 30px;
    }
  }

  p {
    font-family: "Raleway", sans-serif;
    font-size: 12px;
    line-height: 1.5;
    font-weight: bold;
  }

  a {
    color: #ffffff;
    text-decoration: none;
    display: block;
    margin-bottom: 10px;
    font-family: "Raleway", sans-serif;
    font-size: 12px;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const NewsletterSection = styled(FooterSection)`
  input {
    padding: 10px;
    width: 70%;
    margin-right: 10px;
    background-color: #ffffff;
    border: 1px solid #ffffff;
    border-radius: 5px;
    font-family: "Raleway", sans-serif;
    font-size: 12px;
    font-weight: bold;
    color: #725a34;
    margin-bottom: 8px;
  }

  button {
    padding: 10px 20px;
    background-color: #725a34; /* Adjust button color */
    color: #ffffff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-family: "Raleway", sans-serif;
    font-size: 12px;
    font-weight: bold;
    &:hover {
      background-color: #8a6b3c;
    }
  }
`;

const FooterBottom = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 30px;
  border-top: 1px solid #ffffff;
  padding-top: 20px;
  font-size: 16px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSection>
        <h4 className='Ttle'>Paradise view</h4>
        <p>
          The service at the Hotel Monteleone was exceptional. There was absolutely no issue that was not addressed timely and with satisfactory results. We were particularly impressed with how the hotel staff anticipated our needs (periodically coming by the Board Room to check with us).
        </p>
      </FooterSection>

      <FooterSection>
        <h4>Quick links</h4>
        <a href="#">Room booking</a>
        <a href="#">Rooms</a>
        <a href="#">Contact</a>
        <a href="#">Explore</a>
      </FooterSection>

      <FooterSection>
        <h4>Company</h4>
        <a href="#">Privacy policy</a>
        <a href="#">Refund policy</a>
        <a href="#">F.A.Q</a>
        <a href="#">About</a>
      </FooterSection>

      <FooterSection>
        <h4>Social media</h4>
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">Instagram</a>
        <a href="#">LinkedIn</a>
      </FooterSection>

      <NewsletterSection>
        <h4>Newsletter</h4>
        <p>Kindly subscribe to our newsletter to get the latest deals on our rooms and vacation discount.</p>
        <div>
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </NewsletterSection>

      <FooterBottom>
        Paradise view 2023
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
