import { Routes, Route } from "react-router-dom"
import Home from "./Components/Home/Home"
import Header from "./Components/Header/Header"
import Footer from './Components/Footer/Footer';
import DetailPage from "./Components/DetailedPage/DetailPage";
import Book from "./Components/BookingPage/Book";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/detailed/:id" element={<DetailPage />} />
        <Route path="/booking-page/:id" element={<Book />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
