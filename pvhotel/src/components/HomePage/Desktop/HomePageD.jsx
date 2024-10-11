import React from "react";
import Navbar from "./components/Navbar/NavBar";
import Hero from "./components/Hero/Hero";
import Facilities from "./components/Facilities/Facilities";
import Rooms from "./components/Rooms/Rooms";
import Restaurants from "./components/Restaurants/Restaurants";
import Testimonies from "./components/Testimonies/Testimonies";
import styled from "styled-components";
import Footer from "./components/Footer/Footer";

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



const HomePageD =()=>
{
    return(
        <AppContainer>
            <Navbar/>
        <Hero/>
        <Facilities/>
        <Rooms/>
        <Restaurants/>
        <Testimonies/>
        <Footer/>
        </AppContainer>
       

        
    );
}

export default HomePageD;