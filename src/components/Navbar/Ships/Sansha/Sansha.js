import { useEffect, useState } from "react";
import Frigate from "../Frigate";
import Cruiser from "../Cruiser";
import Battleship from "../Battleship";
import Capital from "../Captial";

import FetchShipData from "../../../../utils/FetchShipData";

import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
} from "mdb-react-ui-kit";

const Sansha = (props) => {
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
        Sansha Nation
      </MDBDropdownToggle>
      <MDBDropdownMenu dark className="bg-dark">
        <Frigate
          frigate={ships?.filter((id) => {
            return id.marketGroupID === 1365 && id.typeName !== "Cruor";
          })}
        />

        <Cruiser
          cruiser={ships?.filter((id) => {
            return id.marketGroupID === 1371 && id.typeName !== "Ashimmu";
          })}
        />

        <Battleship
          battle={ships?.filter((id) => {
            return id.marketGroupID === 1380 && id.typeName !== "Bhaalgorn";
          })}
        />

        <Capital carrier={[{ typeName: "Revenant" }]} />
      </MDBDropdownMenu>
    </MDBDropdown>
  );
};

export default Sansha;
