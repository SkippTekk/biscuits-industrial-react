import Frigate from "../Frigate";
import Cruiser from "../Cruiser";
import Battleship from "../Battleship";

import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
} from "mdb-react-ui-kit";

const Mordu = () => {
  return (
    <MDBDropdown group>
      <MDBDropdownToggle tag="a" className="nav-link">
        Mordu's Legion Command
      </MDBDropdownToggle>
      <MDBDropdownMenu dark className="bg-dark">
        <Frigate frigate={[{ name: "Garmur", url: "http://stuff.com" }]} />

        <Cruiser cruiser={[{ name: "Orthrus", url: "http://stuff.com" }]} />

        <Battleship battle={[{ name: "Barghest", url: "http://stuff.com" }]} />
      </MDBDropdownMenu>
    </MDBDropdown>
  );
};

export default Mordu;
