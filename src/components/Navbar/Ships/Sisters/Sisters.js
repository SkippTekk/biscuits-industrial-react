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

const Sisters = (props) => {
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
        Servant Sisters of Eve
      </MDBDropdownToggle>
      <MDBDropdownMenu dark className="bg-dark">
        <Frigate
          frigate={ships?.filter((id) => {
            return id.marketGroupID === 1365 && id.typeName !== "Daredevil";
          })}
        />

        <Cruiser
          cruiser={ships?.filter((id) => {
            return id.marketGroupID === 1371 && id.typeName !== "Vigilant";
          })}
        />

        <Battleship
          battle={ships?.filter((id) => {
            return id.marketGroupID === 1380 && id.typeName !== "Vindicator";
          })}
        />
      </MDBDropdownMenu>
    </MDBDropdown>
  );
};

export default Sisters;
