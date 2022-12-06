import Frigate from "../Frigate";
import Cruiser from "../Cruiser";
import Battleship from "../Battleship";

import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
} from "mdb-react-ui-kit";

const Edencom = () => {
  return (
    <MDBDropdown group>
      <MDBDropdownToggle tag="a" className="nav-link">
        Edencom
      </MDBDropdownToggle>
      <MDBDropdownMenu dark className="bg-dark">
        <Frigate
          frigate={[
            { name: "Skybreaker", url: "http://stuff.com" },
          ]}
        />

        <Cruiser
          cruiser={[
            { name: "Stormbringer", url: "http://stuff.com" },
          ]}
        />

        <Battleship
          battle={[
            { name: "Thunderchild", url: "http://stuff.com" },
          ]}
        />
      </MDBDropdownMenu>
    </MDBDropdown>
  );
};

export default Edencom;
