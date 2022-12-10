import { useEffect, useState } from "react";
import Frigate from "../Frigate";
import Destroyer from "../Destroyer";
import Cruiser from "../Cruiser";
import Battlecruiser from "../Battlecruiser";
import Battleship from "../Battleship";
import Capital from "../Captial";
import Industrial from "../Industrial";

import FetchShipData from "../../../../utils/FetchShipData";

import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
} from "mdb-react-ui-kit";

const Amarr = (props) => {
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
        Amarr Empire
      </MDBDropdownToggle>
      <MDBDropdownMenu responsive="lg-start" dark className="bg-dark">
        <Frigate
          frigate={ships?.filter((id) => {
            return id.marketGroupID === 72;
          })}
          navy={ships?.filter((id) => {
            return id.marketGroupID === 1366;
          })}
          interceptor={ships?.filter((id) => {
            return id.marketGroupID === 400;
          })}
          assault={ships?.filter((id) => {
            return id.marketGroupID === 433;
          })}
          covert={ships?.filter((id) => {
            return id.marketGroupID === 421;
          })}
          elecattack={ships?.filter((id) => {
            return id.marketGroupID === 1066;
          })}
          logi={ships?.filter((id) => {
            return id.marketGroupID === 2147;
          })}
        />

        <Destroyer
          destroyer={ships?.filter((id) => {
            return id.marketGroupID === 465;
          })}
          navy={ships?.filter((id) => {
            return id.marketGroupID === 3481;
          })}
          interdictor={ships?.filter((id) => {
            return id.marketGroupID === 826;
          })}
          commdestroyer={ships?.filter((id) => {
            return id.marketGroupID === 2126;
          })}
          tacdestroyer={ships?.filter((id) => {
            return id.marketGroupID === 1952;
          })}
        />

        <Cruiser
          cruiser={ships?.filter((id) => {
            return id.marketGroupID === 74;
          })}
          navy={ships?.filter((id) => {
            return id.marketGroupID === 1370;
          })}
          recon={ships?.filter((id) => {
            return id.marketGroupID === 827;
          })}
          heavy={ships?.filter((id) => {
            return id.marketGroupID === 449;
          })}
          interdiction={ships?.filter((id) => {
            return id.marketGroupID === 1071;
          })}
          logi={ships?.filter((id) => {
            return id.marketGroupID === 438;
          })}
          strat={ships?.filter((id) => {
            return id.marketGroupID === 1139;
          })}
        />

        <Battlecruiser
          cruiser={ships?.filter((id) => {
            return id.marketGroupID === 470;
          })}
          navy={ships?.filter((id) => {
            return id.marketGroupID === 1704;
          })}
          command={ships?.filter((id) => {
            return id.marketGroupID === 825;
          })}
        />

        <Battleship
          battle={ships?.filter((id) => {
            return id.marketGroupID === 79;
          })}
          navy={ships?.filter((id) => {
            return id.marketGroupID === 1379;
          })}
          blackops={ships?.filter((id) => {
            return id.marketGroupID === 1076;
          })}
          marauder={ships?.filter((id) => {
            return id.marketGroupID === 1081;
          })}
        />

        <Capital
          dread={ships?.filter((id) => {
            return id.marketGroupID === 762;
          })}
          navy={ships?.filter((id) => {
            return id.marketGroupID === 3484;
          })}
          carrier={ships?.filter((id) => {
            return id.marketGroupID === 818 || id.marketGroupID === 2272;
          })}
          titan={ships?.filter((id) => {
            return id.marketGroupID === 813;
          })}
        />

        <Industrial
          industrial={ships?.filter((id) => {
            return id.marketGroupID === 85;
          })}
          transport={ships?.filter((id) => {
            return id.marketGroupID === 630;
          })}
          freighter={ships?.filter((id) => {
            return id.marketGroupID === 767;
          })}
          jump={ships?.filter((id) => {
            return id.marketGroupID === 1090;
          })}
        />
      </MDBDropdownMenu>
    </MDBDropdown>
  );
};

export default Amarr;
