import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import BookingDetails from "./pages/BookingDetails";
import  FooterComponent  from "./components/Footer.jsx";

function App() {
  return (
   <>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/booking-details" element={<BookingDetails/>} />
      </Routes>
      <FooterComponent/>
    </>
  );
}

export default App;
