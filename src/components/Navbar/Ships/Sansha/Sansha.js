import Frigate from "../Frigate";
import Cruiser from "../Cruiser";
import Battleship from "../Battleship";
import Capital from "../Captial";

import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
} from "mdb-react-ui-kit";

const Sansha = () => {
  return (
    <MDBDropdown group>
      <MDBDropdownToggle tag="a" className="nav-link">
        Sansha Nation
      </MDBDropdownToggle>
      <MDBDropdownMenu dark className="bg-dark">
        <Frigate frigate={[{ name: "Succubus", url: "http://stuff.com" }]} />

        <Cruiser cruiser={[{ name: "Phantasm", url: "http://stuff.com" }]} />

        <Battleship battle={[{ name: "Nightmare", url: "http://stuff.com" }]} />

        <Capital carrier={[{ name: "Revenant", url: "http://stuff.com" }]} />
      </MDBDropdownMenu>
    </MDBDropdown>
  );
};

export default Sansha;
