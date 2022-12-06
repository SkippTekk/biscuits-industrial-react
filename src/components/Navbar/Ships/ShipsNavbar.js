import "./ShipsNavbar.css";
import Amarr from "./Amaar/Amaar";
import Caldari from "./Caldari/Caldari";
import Gallante from "./Gallante/Gallante";
import Minmatar from "./Minmatar/Minmatar";
import Ore from "./Ore/Ore";
import Guristas from "./Guristas/Guristas";
import Sansha from "./Sansha/Sansha";
import BloodRaider from "./BloodRaider/BloodRaider";
import AngelCartel from "./AngelCartel/AngelCartel";
import Serpentis from "./Serpentis/Serpentis";
import Sisters from "./Sisters/Sisters";
import Mordu from "./Mordu/Mordu";
import Triglavian from "./Triglavian/Triglavian";

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
            <Guristas />
            <Sansha />
            <BloodRaider />
            <AngelCartel />
            <Serpentis />
            <Sisters />
            <Mordu />
            <Triglavian />
          </MDBNavbarItem>
        </MDBNavbarNav>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default ShipNavbar;
