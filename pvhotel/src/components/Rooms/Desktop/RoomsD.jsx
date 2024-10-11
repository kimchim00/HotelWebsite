import React from "react";

import styled from "styled-components";
import NavbarR from "./components/NavBar/NavBarR";
import Hero from "./components/Hero/Hero";
import RoomGrid from "./components/RoomGrid/RoomGrid";

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



const RoomD =()=>
{
    return(
        <AppContainer>
           <NavbarR/>
           <Hero/>
           <RoomGrid/>
        </AppContainer>
       

        
    );
}

export default RoomD;