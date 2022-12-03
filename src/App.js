<<<<<<< Updated upstream
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Ship from './Pages/Ship';
import Ships from './Pages/Ships'
import About from './Pages/About';
import PageNotFound from './Pages/PageNotFound';

function App() {
  return (
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/ships' element={<Ship />} />
      <Route path='/ships/:id' element={<Ships />} />
      <Route path="/about" element={<About />} />
      <Route path='*' element={<PageNotFound />} />
   </Routes>
=======
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Announcement from "./components/Announcement";
import Footer from "./components/Footer/Footer";

import Home from "./Pages/Home";
import About from "./Pages/About";
import PageNotFound from "./Pages/PageNotFound";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Announcement />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
>>>>>>> Stashed changes
  );
}

export default App;
