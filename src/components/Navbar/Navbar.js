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
  const [shipManu, setShipManu] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem("shipManu");
    setShipManu(JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem("shipManu", JSON.stringify(shipManu));
  }, [shipManu]);

  return (
    <>
      <MDBNavbar expand="lg" dark bgColor="dark">
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
                <MDBNavbarLink aria-current="page" href="/">
                  Home Page
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink
                  onClick={() => setShipManu(!shipManu)}
                  className={shipManu ? "text-info" : ""}
                >
                  Ship Manufacturing{" "}
                  {shipManu ? (
                    <i className="fas fa-times" />
                  ) : (
                    <i className="fas fa-sync" />
                  )}
                </MDBNavbarLink>
              </MDBNavbarItem>
              {!shipManu && (
                <>
                  <MDBNavbarItem>
                    <MDBNavbarLink>
                      Citadel Manufacturing <i className="fas fa-sync" />
                    </MDBNavbarLink>
                  </MDBNavbarItem>
                  <MDBNavbarItem>
                    <MDBNavbarLink>
                      Reprocessing <i className="fas fa-sync" />
                    </MDBNavbarLink>
                  </MDBNavbarItem>
                  <MDBNavbarItem>
                    <MDBNavbarLink>
                      Jump Gate Refuel <i className="fas fa-sync" />
                    </MDBNavbarLink>
                  </MDBNavbarItem>
                  <MDBNavbarItem>
                    <MDBNavbarLink>
                      API for Geeks <i className="fas fa-sync" />
                    </MDBNavbarLink>
                  </MDBNavbarItem>
                  <MDBNavbarItem>
                    <MDBNavbarLink>
                      About <i className="fas fa-sync" />
                    </MDBNavbarLink>
                  </MDBNavbarItem>
                </>
              )}
            </MDBNavbarNav>
          </MDBCollapse>
          <div style={{ color: "lightgrey" }}>
            <Clock />
          </div>
        </MDBContainer>
      </MDBNavbar>
      {shipManu && <ShipNavbar />}
    </>
  );
};

export default Navbar;
