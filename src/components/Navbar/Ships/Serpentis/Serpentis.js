import Frigate from "../Frigate";
import Cruiser from "../Cruiser";
import Battleship from "../Battleship";
import Capital from "../Captial";

import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
} from "mdb-react-ui-kit";

const Serpentis = () => {
  return (
    <MDBDropdown group>
      <MDBDropdownToggle tag="a" className="nav-link">
        Serpentis
      </MDBDropdownToggle>
      <MDBDropdownMenu dark className="bg-dark">
        <Frigate frigate={[{ name: "Daredevil", url: "http://stuff.com" }]} />

        <Cruiser cruiser={[{ name: "Vigilant", url: "http://stuff.com" }]} />

        <Battleship
          battle={[{ name: "Vindicator", url: "http://stuff.com" }]}
        />

        <Capital
          dread={[{ name: "Vehement", url: "http://stuff.com" }]}
          carrier={[{ name: "Vendetta", url: "http://stuff.com" }]}
          titan={[{ name: "Vanquisher", url: "http://stuff.com" }]}
        />
      </MDBDropdownMenu>
    </MDBDropdown>
  );
};

export default Serpentis;
