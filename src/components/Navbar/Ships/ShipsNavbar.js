import "./ShipsNavbar.css";
import Amarr from "./Amarr/Amarr";
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
import Edencom from "./Edencom/Edencom";

import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
} from "mdb-react-ui-kit";

const ShipNavbar = () => {
  return (
    <MDBNavbar
      expand="lg"
      dark
      bgColor="dark"
      className="pt-0 mt-0 square border-top border-secondary"
    >
      <MDBContainer>
        <MDBNavbarNav>
          <MDBNavbarItem>
            <div className="d-flex flex-column flex-fill justify-content-center align-items-center">
              <div>
                <Amarr race="4" />
                <Caldari race="1" />
                <Gallante race="8" />
                <Minmatar race="2" />
                <Ore race="128" />
                <Guristas race="1" />
                <Sansha race="4" />
                <BloodRaider race="4" />
              </div>
              <div>
                <AngelCartel race="2" />
                <Serpentis race="8" />
                <Sisters race="8" />
                <Mordu race="1" />
                <Triglavian race="135" />
                <Edencom race="1" />
              </div>
            </div>
          </MDBNavbarItem>
        </MDBNavbarNav>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default ShipNavbar;
