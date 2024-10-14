import React from "react";

import styled from "styled-components";
import NavbarRes from "./components/NavBar/NavBarRes";

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



const RestaurantD =()=>
{
    return(
        <AppContainer>
           <NavbarRes/>
           
        </AppContainer>
       

        
    );
}

export default RestaurantD;