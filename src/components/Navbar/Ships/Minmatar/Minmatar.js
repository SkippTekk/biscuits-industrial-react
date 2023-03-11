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

const Minmatar = (props) => {
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
    <Nav.Menu title="Minmatar Republic">
      <Frigate
        frigate={ships?.filter((id) => {
          return id.marketGroupID === 64;
        })}
        navy={ships?.filter((id) => {
          return id.marketGroupID === 1366;
        })}
        interceptor={ships?.filter((id) => {
          return id.marketGroupID === 403;
        })}
        assault={ships?.filter((id) => {
          return id.marketGroupID === 436;
        })}
        covert={ships?.filter((id) => {
          return id.marketGroupID === 424;
        })}
        elecattack={ships?.filter((id) => {
          return id.marketGroupID === 1069;
        })}
        logi={ships?.filter((id) => {
          return id.marketGroupID === 2150;
        })}
      />
      <Destroyer
        destroyer={ships?.filter((id) => {
          return id.marketGroupID === 468;
        })}
        navy={ships?.filter((id) => {
          return id.marketGroupID === 3481;
        })}
        interdictor={ships?.filter((id) => {
          return id.marketGroupID === 835;
        })}
        commdestroyer={ships?.filter((id) => {
          return id.marketGroupID === 2133;
        })}
        tacdestroyer={ships?.filter((id) => {
          return id.marketGroupID === 1953;
        })}
      />
      <Cruiser
        cruiser={ships?.filter((id) => {
          return id.marketGroupID === 73;
        })}
        navy={ships?.filter((id) => {
          return id.marketGroupID === 1370;
        })}
        recon={ships?.filter((id) => {
          return id.marketGroupID === 836;
        })}
        heavy={ships?.filter((id) => {
          return id.marketGroupID === 452;
        })}
        interdiction={ships?.filter((id) => {
          return id.marketGroupID === 1074;
        })}
        logi={ships?.filter((id) => {
          return id.marketGroupID === 441;
        })}
        strat={ships?.filter((id) => {
          return id.marketGroupID === 1142;
        })}
      />
      <Battlecruiser
        cruiser={ships?.filter((id) => {
          return id.marketGroupID === 473;
        })}
        navy={ships?.filter((id) => {
          return id.marketGroupID === 1704;
        })}
        command={ships?.filter((id) => {
          return id.marketGroupID === 834;
        })}
      />
      <Battleship
        battle={ships?.filter((id) => {
          return id.marketGroupID === 78;
        })}
        navy={ships?.filter((id) => {
          return id.marketGroupID === 1379;
        })}
        blackops={ships?.filter((id) => {
          return id.marketGroupID === 1079;
        })}
        marauder={ships?.filter((id) => {
          return id.marketGroupID === 1084;
        })}
      />
      <Capital
        dread={ships?.filter((id) => {
          return id.marketGroupID === 765;
        })}
        navy={ships?.filter((id) => {
          return id.marketGroupID === 3484;
        })}
        carrier={ships?.filter((id) => {
          return id.marketGroupID === 821 || id.marketGroupID === 2275;
        })}
        titan={ships?.filter((id) => {
          return id.marketGroupID === 816;
        })}
      />
      <Industrial
        industrial={ships?.filter((id) => {
          return id.marketGroupID === 82;
        })}
        transport={ships?.filter((id) => {
          return id.marketGroupID === 633;
        })}
        freighter={ships?.filter((id) => {
          return id.marketGroupID === 770;
        })}
        jump={ships?.filter((id) => {
          return id.marketGroupID === 1093;
        })}
      />
    </Nav.Menu>
  );
};

export default Minmatar;
