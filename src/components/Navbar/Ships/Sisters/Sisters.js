import Frigate from "../Frigate";
import Cruiser from "../Cruiser";
import Battleship from "../Battleship";

import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
} from "mdb-react-ui-kit";

const Sisters = () => {
  return (
    <MDBDropdown group>
      <MDBDropdownToggle tag="a" className="nav-link">
        Servant Sisters of Eve
      </MDBDropdownToggle>
      <MDBDropdownMenu dark className="bg-dark">
        <Frigate frigate={[{ name: "Astero", url: "http://stuff.com" }]} />

        <Cruiser cruiser={[{ name: "Stratios", url: "http://stuff.com" }]} />

        <Battleship battle={[{ name: "Nestor", url: "http://stuff.com" }]} />
      </MDBDropdownMenu>
    </MDBDropdown>
  );
};

export default Sisters;
