import Frigate from "../Frigate";
import Cruiser from "../Cruiser";
import Battlecruiser from "../Battlecruiser";
import Capital from "../Captial";

import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
} from "mdb-react-ui-kit";

const Guristas = () => {
  return (
    <MDBDropdown group>
      <MDBDropdownToggle tag="a" className="nav-link">
        Guristas Pirates
      </MDBDropdownToggle>
      <MDBDropdownMenu dark className="bg-dark">
        <Frigate frigate={[{ name: "Worm", url: "http://stuff.com" }]} />

        <Cruiser cruiser={[{ name: "Gila", url: "http://stuff.com" }]} />

        <Battlecruiser
          cruiser={[{ name: "Rattlesnake", url: "http://stuff.com" }]}
        />

        <Capital
          dread={[{ name: "Caiman", url: "http://stuff.com" }]}
          carrier={[{ name: "Loggerhead", url: "http://stuff.com" }]}
          titan={[{ name: "Komodo", url: "http://stuff.com" }]}
        />
      </MDBDropdownMenu>
    </MDBDropdown>
  );
};

export default Guristas;
