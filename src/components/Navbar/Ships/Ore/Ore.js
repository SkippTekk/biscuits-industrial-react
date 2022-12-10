import { useEffect, useState } from "react";
import Frigate from "../Frigate";
import MiningBarge from "../MiningBarge";
import Exhumer from "../Exhumer";
import OreHauler from "../OreHauler";
import Rorqual from "../Rorqual";
import Industrial from "../Industrial";

import FetchShipData from "../../../../utils/FetchShipData";

import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
} from "mdb-react-ui-kit";

const Ore = (props) => {
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
        ORE
      </MDBDropdownToggle>
      <MDBDropdownMenu dark className="bg-dark">
        <Frigate
          frigate={ships?.filter((id) => {
            return id.marketGroupID === 1616;
          })}
          expedition={ships?.filter((id) => {
            return id.marketGroupID === 1924;
          })}
        />

        <MiningBarge
          barge={ships?.filter((id) => {
            return id.marketGroupID === 494;
          })}
        />

        <Exhumer
          exhumer={ships?.filter((id) => {
            return id.marketGroupID === 874;
          })}
        />

        <OreHauler
          hauler={ships?.filter((id) => {
            return id.marketGroupID === 1390;
          })}
        />

        <Rorqual
          rorq={ships?.filter((id) => {
            return id.marketGroupID === 1048;
          })}
        />

        <Industrial
          industrial={ships?.filter((id) => {
            return id.marketGroupID === 2336;
          })}
          freighter={ships?.filter((id) => {
            return id.marketGroupID === 1950;
          })}
        />
      </MDBDropdownMenu>
    </MDBDropdown>
  );
};

export default Ore;
