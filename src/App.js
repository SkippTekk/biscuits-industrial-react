import { Routes, Route } from "react-router-dom";
import { Container, Header, Footer, Content } from "rsuite";

import SiteHeader from "./components/SiteHeader/SiteHeader";
import SiteNavbar from "./components/Navbar/SiteNavbar";
import Announcement from "./components/Announcement";
import SiteFooter from "./components/SiteFooter/SiteFooter";

import ShipByName from "./Pages/ShipByName";
import Home from "./Pages/Home";
import About from "./Pages/About";
import PageNotFound from "./Pages/PageNotFound";

function App() {
  return (
    <Container>
      <Header>
        <SiteHeader />
      </Header>
      <Content>
        <SiteNavbar />
        <Announcement />
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
