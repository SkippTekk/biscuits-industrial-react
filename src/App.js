<<<<<<< HEAD
import React from "react";
import { Header } from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import { Announcement } from "./components/Announcement";
import { Footer } from "./components/Footer/Footer";
=======
import { Routes, Route } from "react-router-dom";
import { Container, Header, Footer, Content } from "rsuite";

import SiteHeader from "./components/SiteHeader/SiteHeader";
import SiteNavbar from "./components/Navbar/SiteNavbar";
import SiteFooter from "./components/SiteFooter/SiteFooter";

>>>>>>> 660702487c5f9d70f471beb17e039b37953a940d
import ShipByName from "./Pages/ShipByName";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { PageNotFound } from "./Pages/PageNotFound";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Container>
      <Header>
        <SiteHeader />
      </Header>
      <Content>
        <SiteNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ship/:ship" element={<ShipByName />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Content>
      <Footer>
        <SiteFooter />
      </Footer>
    </Container>
  );
}

export default App;
