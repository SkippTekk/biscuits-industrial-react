import { useEffect, useState } from "react";
import Frigate from "../Frigate";
import Destroyer from "../Destroyer";
import Cruiser from "../Cruiser";
import Battlecruiser from "../Battlecruiser";
import Battleship from "../Battleship";
import Capital from "../Captial";
import Industrial from "../Industrial";

import FetchShipData from "../../../../utils/FetchShipData";

import { Nav } from "rsuite";

const Gallante = (props) => {
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
    <Nav.Menu title="Gallente Federation">
      <Frigate
        frigate={ships?.filter((id) => {
          return id.marketGroupID === 77;
        })}
        navy={ships?.filter((id) => {
          return id.marketGroupID === 1366;
        })}
        interceptor={ships?.filter((id) => {
          return id.marketGroupID === 402;
        })}
        assault={ships?.filter((id) => {
          return id.marketGroupID === 435;
        })}
        covert={ships?.filter((id) => {
          return id.marketGroupID === 423;
        })}
        elecattack={ships?.filter((id) => {
          return id.marketGroupID === 1068;
        })}
        logi={ships?.filter((id) => {
          return id.marketGroupID === 2149;
        })}
      />

      <Destroyer
        destroyer={ships?.filter((id) => {
          return id.marketGroupID === 467;
        })}
        navy={ships?.filter((id) => {
          return id.marketGroupID === 3481;
        })}
        interdictor={ships?.filter((id) => {
          return id.marketGroupID === 832;
        })}
        commdestroyer={ships?.filter((id) => {
          return id.marketGroupID === 2132;
        })}
        tacdestroyer={ships?.filter((id) => {
          return id.marketGroupID === 2034;
        })}
      />

      <Cruiser
        cruiser={ships?.filter((id) => {
          return id.marketGroupID === 76;
        })}
        navy={ships?.filter((id) => {
          return id.marketGroupID === 1370;
        })}
        recon={ships?.filter((id) => {
          return id.marketGroupID === 833;
        })}
        heavy={ships?.filter((id) => {
          return id.marketGroupID === 451;
        })}
        interdiction={ships?.filter((id) => {
          return id.marketGroupID === 1073;
        })}
        logi={ships?.filter((id) => {
          return id.marketGroupID === 440;
        })}
        strat={ships?.filter((id) => {
          return id.marketGroupID === 1141;
        })}
      />

      <Battlecruiser
        cruiser={ships?.filter((id) => {
          return id.marketGroupID === 472;
        })}
        navy={ships?.filter((id) => {
          return id.marketGroupID === 1704;
        })}
        command={ships?.filter((id) => {
          return id.marketGroupID === 831;
        })}
      />

      <Battleship
        battle={ships?.filter((id) => {
          return id.marketGroupID === 81;
        })}
        navy={ships?.filter((id) => {
          return id.marketGroupID === 1379;
        })}
        blackops={ships?.filter((id) => {
          return id.marketGroupID === 1078;
        })}
        marauder={ships?.filter((id) => {
          return id.marketGroupID === 1083;
        })}
      />

      <Capital
        dread={ships?.filter((id) => {
          return id.marketGroupID === 764;
        })}
        navy={ships?.filter((id) => {
          return id.marketGroupID === 3484;
        })}
        carrier={ships?.filter((id) => {
          return id.marketGroupID === 820 || id.marketGroupID === 2274;
        })}
        titan={ships?.filter((id) => {
          return id.marketGroupID === 815;
        })}
      />

      <Industrial
        industrial={ships?.filter((id) => {
          return id.marketGroupID === 83;
        })}
        transport={ships?.filter((id) => {
          return id.marketGroupID === 632;
        })}
        freighter={ships?.filter((id) => {
          return id.marketGroupID === 769;
        })}
        jump={ships?.filter((id) => {
          return id.marketGroupID === 1092;
        })}
      />
    </Nav.Menu>
  );
};

export default Gallante;
