import Clock from "../Clock";
import ShipNavbar from "./Ships/ShipsNavbar";
import { useState, useEffect } from "react";
import { Navbar, Nav } from "rsuite";

const SiteNavbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [navSelect, setNavSelect] = useState();

  const navToggle = (opt) => {
    if (!navSelect) {
      setNavSelect(opt);
    }

    if (navSelect === opt) {
      setNavSelect("");
    }

    if (navSelect !== opt) {
      setNavSelect(opt);
    }
  };

  useEffect(() => {
    const data = localStorage.getItem("navSelect");
    setNavSelect(JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem("navSelect", JSON.stringify(navSelect));
  }, [navSelect]);

  return (
    <>
      <Navbar
        style={{
          backgroundColor: "#282828",
          color: "#B3B3B3",
          fontWeight: "bold",
        }}
      >
        <Nav>
          <Nav.Item as="a" href="/">
            Home Page
          </Nav.Item>
          <Nav.Item>Ship Manufacturing</Nav.Item>
          <Nav.Item>Citadel Manufacturing</Nav.Item>
          <Nav.Item>Reprocessing</Nav.Item>
          <Nav.Item>Jump Gate Refuel</Nav.Item>
          <Nav.Item>API for Geeks</Nav.Item>
          <Nav.Item>About</Nav.Item>
        </Nav>
        <Nav pullRight>
          <Nav.Item as="span">
            <Clock />
          </Nav.Item>
        </Nav>
      </Navbar>
      <Navbar
        style={{
          backgroundColor: "#282828",
          color: "#B3B3B3",
          fontWeight: "bold",
        }}
      >
        <ShipNavbar />
      </Navbar>
    </>
  );
};

export default SiteNavbar;
