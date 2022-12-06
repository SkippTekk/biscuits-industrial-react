import Frigate from "../Frigate";
import Cruiser from "../Cruiser";
import Battleship from "../Battleship";

import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
} from "mdb-react-ui-kit";

const AngelCartel = () => {
  return (
    <MDBDropdown group>
      <MDBDropdownToggle tag="a" className="nav-link">
        Angel Cartel
      </MDBDropdownToggle>
      <MDBDropdownMenu dark className="bg-dark">
        <Frigate frigate={[{ name: "Dramiel", url: "http://stuff.com" }]} />

        <Cruiser cruiser={[{ name: "Cynabal", url: "http://stuff.com" }]} />

        <Battleship battle={[{ name: "Machariel", url: "http://stuff.com" }]} />
      </MDBDropdownMenu>
    </MDBDropdown>
  );
};

export default AngelCartel;
