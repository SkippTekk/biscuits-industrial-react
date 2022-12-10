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

const Mordu = (props) => {
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
        Mordu's Legion Command
      </MDBDropdownToggle>
      <MDBDropdownMenu right dark className="bg-dark">
        <Frigate
          frigate={ships?.filter((id) => {
            return id.typeName === "Garmur";
          })}
        />

        <Cruiser
          cruiser={ships?.filter((id) => {
            return id.typeName === "Orthrus";
          })}
        />

        <Battleship
          battle={ships?.filter((id) => {
            return id.typeName === "Barghest";
          })}
        />
      </MDBDropdownMenu>
    </MDBDropdown>
  );
};

export default Mordu;
