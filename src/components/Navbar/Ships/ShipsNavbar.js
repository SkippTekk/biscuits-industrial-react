import "./ShipsNavbar.css";
import Amarr from "./Amaar/Amaar";
import AmarrBattleCruiser from "./Amaar/AmarrBattleCruiser";
import AmarrCapital from "./Amaar/AmarrCapital";
import AmarrIndustrial from "./Amaar/AmarrIndustrial";

import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
} from "mdb-react-ui-kit";

const ShipNavbar = () => {
  return (
    <MDBNavbar expand="lg" dark bgColor="dark">
      <MDBContainer fluid>
        <MDBNavbarNav>
          <MDBNavbarItem>
            <MDBDropdown group>
              <MDBDropdownToggle tag="a" className="nav-link">
                Amarr
              </MDBDropdownToggle>
              <MDBDropdownMenu>
                <Amarr />
                <AmarrBattleCruiser />
                <AmarrCapital />
                <AmarrIndustrial />
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavbarItem>
        </MDBNavbarNav>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default ShipNavbar;
