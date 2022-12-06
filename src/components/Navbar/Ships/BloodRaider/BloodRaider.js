import Frigate from "../Frigate";
import Cruiser from "../Cruiser";
import Battleship from "../Battleship";
import Capital from "../Captial";

import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
} from "mdb-react-ui-kit";

const BloodRaider = () => {
  return (
    <MDBDropdown group>
      <MDBDropdownToggle tag="a" className="nav-link">
        Blood Raider Covenant
      </MDBDropdownToggle>
      <MDBDropdownMenu dark className="bg-dark">
        <Frigate frigate={[{ name: "Cruor", url: "http://stuff.com" }]} />

        <Cruiser cruiser={[{ name: "Ashimmu", url: "http://stuff.com" }]} />

        <Battleship battle={[{ name: "Bhaalgorn", url: "http://stuff.com" }]} />

        <Capital
          dread={[{ name: "Chemosh", url: "http://stuff.com" }]}
          carrier={[{ name: "Dagon", url: "http://stuff.com" }]}
          titan={[{ name: "Molok", url: "http://stuff.com" }]}
        />
      </MDBDropdownMenu>
    </MDBDropdown>
  );
};

export default BloodRaider;
