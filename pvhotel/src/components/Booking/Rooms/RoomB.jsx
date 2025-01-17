import React from "react";

import styled from "styled-components";
import RoomBookingCard from "./components/hero/hero";
import NavbarR from "./components/navbar/NavBarR";

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



const RoomB =()=>
{
    return(
        <AppContainer>
           <NavbarR/>
           <RoomBookingCard/>
           
        </AppContainer>
       

        
    );
}

export default RoomB;