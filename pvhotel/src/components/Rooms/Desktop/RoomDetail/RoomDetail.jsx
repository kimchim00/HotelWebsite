import React from "react";

import styled from "styled-components";
import NavbarR from "../components/NavBar/NavBarR";
import FooterR from "../components/Footer/Footer";
import BookingCard from "./components/Hero/Hero";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 40px;
margin-right: 40px;
    width: 100%;
`
const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 0px;
margin-right: 0px;
    width: 100%;
`



const RoomDetail =()=>
{
    return(
        <AppContainer>
           <NavbarR/>
           <BookingCard/>
           <FooterR/>
        </AppContainer>
       

        
    );
}

export default RoomDetail;