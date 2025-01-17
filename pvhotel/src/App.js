import logo from './logo.svg';
import './App.css';
import HomePageD from './components/HomePage/Desktop/HomePageD';
import RoomD from './components/Rooms/Desktop/RoomsD';
import { createGlobalStyle, styled } from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RestaurantD from './components/Restaurants/Desktop/RestaurantD';
import RoomDetail from './components/Rooms/Desktop/RoomDetail/RoomDetail';
import RoomB from './components/Booking/Rooms/RoomB';
import { AuthProvider } from './context/AuthContext';  // Use AuthProvider here
import Main from './components/Booking/payment/main/main';
import Login from './components/account/login/login';
import Signup from './components/account/signup/signup'

const AppContainer = styled.div`
  display: flex;
  margin-left: 0px;
  margin-right: 0px;
`;

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
  }
`;

function App() {
  return (
    <AuthProvider> {/* Wrap the entire app with the AuthProvider */}
      <AppContainer>
        <Router>
          <Routes>
            <Route path="/" element={ <HomePageD/>} />
            <Route path="/Rooms" element={<RoomD/>} />
            <Route path="/Restaurants" element={<RestaurantD/>} />
          </Routes>

          <Routes>
            <Route path="/Rooms/detail" element={<RoomDetail />} />
          </Routes>

          <Routes>
            <Route path='/Booking/Rooms/d1' element={<RoomB/>} />
            <Route path='/Booking/Rooms/d1/payment' element={<Main/>} />
            <Route path='/Booking/Rooms/d1/signup' element={<Login/>} />
            <Route path='/Booking/Rooms/d1/login' element={<Signup/>} />
          </Routes>
        </Router>
      </AppContainer>
    </AuthProvider>
  );
}

export default App;
