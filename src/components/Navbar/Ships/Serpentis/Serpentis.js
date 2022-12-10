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

const Serpentis = (props) => {
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
        Serpentis
      </MDBDropdownToggle>
      <MDBDropdownMenu dark className="bg-dark">
        <Frigate
          frigate={ships?.filter((id) => {
            return id.marketGroupID === 1365 && id.typeName !== "Astero";
          })}
        />

        <Cruiser
          cruiser={ships?.filter((id) => {
            return id.marketGroupID === 1371 && id.typeName !== "Stratios";
          })}
        />

        <Battleship
          battle={ships?.filter((id) => {
            return id.marketGroupID === 1380 && id.typeName !== "Nestor";
          })}
        />

        <Capital
          dread={ships?.filter((id) => {
            return id.marketGroupID === 3483;
          })}
          carrier={ships?.filter((id) => {
            return id.marketGroupID === 1392;
          })}
          titan={ships?.filter((id) => {
            return id.marketGroupID === 2287;
          })}
        />
      </MDBDropdownMenu>
    </MDBDropdown>
  );
};

export default Serpentis;
