import Frigate from "../Frigate";
import Destroyer from "../Destroyer";
import Cruiser from "../Cruiser";
import Battlecruiser from "../Battlecruiser";
import Battleship from "../Battleship";
import Capital from "../Captial";

import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
} from "mdb-react-ui-kit";

const Triglavian = () => {
  return (
    <MDBDropdown group>
      <MDBDropdownToggle tag="a" className="nav-link">
        Triglavian Collective
      </MDBDropdownToggle>
      <MDBDropdownMenu dark className="bg-dark">
        <Frigate
          frigate={[{ name: "Damavik", url: "http://stuff.com" }]}
          assualt={[{ name: "Nergal", url: "http://stuff.com" }]}
        />

        <Destroyer
          destroyer={[{ name: "Kikimora", url: "http://stuff.com" }]}
          command={[{ name: "Dragur", url: "http://stuff.com" }]}
        />

        <Cruiser
          cruiser={[
            { name: "Vedmak", url: "http://stuff.com" },
            { name: "Rodiva", url: "http://stuff.com" },
          ]}
          heavy={[{ name: "Ikitursa", url: "http://stuff.com" }]}
          logi={[{ name: "Zarmazd", url: "http://stuff.com" }]}
        />

        <Battlecruiser
          cruiser={[{ name: "Drekavac", url: "http://stuff.com" }]}
        />

        <Battleship battle={[{ name: "Leshak", url: "http://stuff.com" }]} />

        <Capital dread={[{ name: "Zirnitra", url: "http://stuff.com" }]} />
      </MDBDropdownMenu>
    </MDBDropdown>
  );
};

export default Triglavian;
