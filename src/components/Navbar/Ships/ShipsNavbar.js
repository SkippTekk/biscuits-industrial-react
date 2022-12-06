import "./ShipsNavbar.css";
import Amarr from "./Amaar/Amaar";
import Caldari from "./Caldari/Caldari";
import Gallante from "./Gallante/Gallante";
import Minmatar from "./Minmatar/Minmatar";
import Ore from "./Ore/Ore";

import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
} from "mdb-react-ui-kit";

const ShipNavbar = () => {
  return (
    <MDBNavbar expand="lg" dark bgColor="dark">
      <MDBContainer fluid>
        <MDBNavbarNav>
          <MDBNavbarItem>
            <Amarr />
            <Caldari />
            <Gallante />
            <Minmatar />
            <Ore />
          </MDBNavbarItem>
        </MDBNavbarNav>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default ShipNavbar;
