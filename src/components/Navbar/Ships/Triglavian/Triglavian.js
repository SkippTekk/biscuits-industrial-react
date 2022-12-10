import { useEffect, useState } from "react";
import Frigate from "../Frigate";
import Destroyer from "../Destroyer";
import Cruiser from "../Cruiser";
import Battlecruiser from "../Battlecruiser";
import Battleship from "../Battleship";
import Capital from "../Captial";

import FetchShipData from "../../../../utils/FetchShipData";

import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
} from "mdb-react-ui-kit";

const Triglavian = (props) => {
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
        Triglavian Collective
      </MDBDropdownToggle>
      <MDBDropdownMenu dark className="bg-dark">
        <Frigate
          frigate={ships?.filter((id) => {
            return id.marketGroupID === 2426;
          })}
          assualt={ships?.filter((id) => {
            return id.marketGroupID === 2536;
          })}
        />

        <Destroyer
          destroyer={ships?.filter((id) => {
            return id.marketGroupID === 2523;
          })}
          command={ships?.filter((id) => {
            return id.marketGroupID === 2537;
          })}
        />

        <Cruiser
          cruiser={ships?.filter((id) => {
            return id.marketGroupID === 2428;
          })}
          heavy={ships?.filter((id) => {
            return id.marketGroupID === 2535;
          })}
          logi={ships?.filter((id) => {
            return id.marketGroupID === 2526;
          })}
        />

        <Battlecruiser
          cruiser={ships?.filter((id) => {
            return id.marketGroupID === 2525;
          })}
        />

        <Battleship
          battle={ships?.filter((id) => {
            return id.marketGroupID === 2430;
          })}
        />

        <Capital
          dread={ships?.filter((id) => {
            return id.marketGroupID === 2690;
          })}
        />
      </MDBDropdownMenu>
    </MDBDropdown>
  );
};

export default Triglavian;
