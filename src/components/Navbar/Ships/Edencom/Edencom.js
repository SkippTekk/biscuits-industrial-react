import { useEffect, useState } from "react";
import Frigate from "../Frigate";
import Cruiser from "../Cruiser";
import Battleship from "../Battleship";

import FetchShipData from "../../../../utils/FetchShipData";

import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
} from "mdb-react-ui-kit";

const Edencom = (props) => {
  const [ships, setShips] = useState();

  useEffect(() => {
    const fetchData = async () => {
      FetchShipData(props.race)
        .then((res) => setShips(res))
        .catch((err) => console.warn(err));
    };

    fetchData();
  }, [props.race]);

  return (
    <MDBDropdown group>
      <MDBDropdownToggle tag="a" className="nav-link">
        Edencom
      </MDBDropdownToggle>
      <MDBDropdownMenu dark className="bg-dark">
        <Frigate
          frigate={ships?.filter((id) => {
            return id.typeName === "Skybreaker";
          })}
        />

        <Cruiser
          cruiser={ships?.filter((id) => {
            return id.typeName === "Stormbringer";
          })}
        />

        <Battleship
          battle={ships?.filter((id) => {
            return id.typeName === "Thunderchild";
          })}
        />
      </MDBDropdownMenu>
    </MDBDropdown>
  );
};

export default Edencom;
