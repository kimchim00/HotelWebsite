import logo from './logo.svg';
import './App.css';
import HomePageD from './components/HomePage/Desktop/HomePageD';
import RoomD from './components/Rooms/Desktop/RoomsD';
import { createGlobalStyle,styled } from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RestaurantD from './components/Restaurants/Desktop/RestaurantD';

const AppContainer = styled.div`
display: flex;
margin-left: 0px;
margin-right: 0px;
`
const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Poppins', sans-serif;
}`;

function App() {
 
  return (
    <AppContainer>
     <Router>
      <Routes>
      <Route path="/" element={ <HomePageD/>} />
      <Route path="/Rooms" element={<RoomD/>} />
      <Route path="/Restaurants" element={<RestaurantD/>} />
      </Routes>
     </Router>
   
   
    </AppContainer>
    
  );
}

export default App;
