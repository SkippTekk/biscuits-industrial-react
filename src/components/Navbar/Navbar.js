import Clock from "../Clock";
import ShipNavbar from "./Ships/ShipsNavbar";
import { useState, useEffect } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBCollapse,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarNav,
} from "mdb-react-ui-kit";

const Navbar = () => {
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
      <MDBNavbar expand="lg" dark bgColor="dark" className="m-0 p-0">
        <MDBContainer fluid>
          <MDBNavbarToggler
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarLeftAlignExample"
            aria-controls="navbarLeftAlignExample"
            aria-expanded="false"
            aria-label="Toggle Navigation"
            onClick={() => setShowNav(!showNav)}
          >
            <i className="fas fa-bars"></i>
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showNav} className="h-50">
            <MDBNavbarNav>
              <MDBNavbarItem>
                <MDBNavbarLink
                  aria-current="page"
                  href="/"
                  onClick={() => setNavSelect("")}
                >
                  Home Page
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink
                  onClick={() => navToggle("shipManu")}
                  className={navSelect === "shipManu" ? "text-info" : ""}
                >
                  Ship Manufacturing{" "}
                  {navSelect === "shipManu" && (
                    <i className="fas fa-times" style={{ color: "red" }} />
                  )}
                  <br />
                  {navSelect === "shipManu" && (
                    <div className="text-center">
                      <i className="fas fa-arrow-down" />
                    </div>
                  )}
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink>Citadel Manufacturing</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink>Reprocessing</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink>Jump Gate Refuel</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink>API for Geeks</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="/about">About</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
          <div style={{ color: "lightgrey" }}>
            <Clock />
          </div>
        </MDBContainer>
      </MDBNavbar>
      {navSelect === "shipManu" && <ShipNavbar />}
    </>
  );
};

export default Navbar;
