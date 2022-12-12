import { useEffect, useState } from "react";
import Frigate from "../Frigate";
import Destroyer from "../Destroyer";
import Cruiser from "../Cruiser";
import Battlecruiser from "../Battlecruiser";
import Battleship from "../Battleship";
import Capital from "../Captial";
import Industrial from "../Industrial";

import { Nav } from "rsuite";

import FetchShipData from "../../../../utils/FetchShipData";

const Caldari = (props) => {
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
    <Nav.Menu title="Caldari State">
      <Nav.Menu title="Frigate Class">
        <Frigate
          frigate={ships?.filter((id) => {
            return id.marketGroupID === 61;
          })}
          navy={ships?.filter((id) => {
            return id.marketGroupID === 1366 && id.typeName !== "Skybreaker";
          })}
          interceptor={ships?.filter((id) => {
            return id.marketGroupID === 401;
          })}
          assault={ships?.filter((id) => {
            return id.marketGroupID === 434;
          })}
          covert={ships?.filter((id) => {
            return id.marketGroupID === 422;
          })}
          elecattack={ships?.filter((id) => {
            return id.marketGroupID === 1067;
          })}
          logi={ships?.filter((id) => {
            return id.marketGroupID === 2148;
          })}
        />
      </Nav.Menu>
      <Nav.Menu title="Destoyer Class">
        <Destroyer
          destroyer={ships?.filter((id) => {
            return id.marketGroupID === 466;
          })}
          navy={ships?.filter((id) => {
            return id.marketGroupID === 3481;
          })}
          interdictor={ships?.filter((id) => {
            return id.marketGroupID === 829;
          })}
          commdestroyer={ships?.filter((id) => {
            return id.marketGroupID === 2131;
          })}
          tacdestroyer={ships?.filter((id) => {
            return id.marketGroupID === 2021;
          })}
        />
      </Nav.Menu>
      <Nav.Menu title="Cruiser Class">
        <Cruiser
          cruiser={ships?.filter((id) => {
            return id.marketGroupID === 75;
          })}
          navy={ships?.filter((id) => {
            return id.marketGroupID === 1370 && id.typeName !== "Stormbringer";
          })}
          recon={ships?.filter((id) => {
            return id.marketGroupID === 830;
          })}
          heavy={ships?.filter((id) => {
            return id.marketGroupID === 450;
          })}
          interdiction={ships?.filter((id) => {
            return id.marketGroupID === 1072;
          })}
          logi={ships?.filter((id) => {
            return id.marketGroupID === 439;
          })}
          strat={ships?.filter((id) => {
            return id.marketGroupID === 1140;
          })}
        />
      </Nav.Menu>
      {/* <Battlecruiser
        cruiser={ships?.filter((id) => {
          return id.marketGroupID === 471;
        })}
        navy={ships?.filter((id) => {
          return id.marketGroupID === 1704;
        })}
        command={ships?.filter((id) => {
          return id.marketGroupID === 828;
        })}
      />
      <Battleship
        battle={ships?.filter((id) => {
          return id.marketGroupID === 80;
        })}
        navy={ships?.filter((id) => {
          return id.marketGroupID === 1379 && id.typeName !== "Thunderchild";
        })}
        blackops={ships?.filter((id) => {
          return id.marketGroupID === 1077;
        })}
        marauder={ships?.filter((id) => {
          return id.marketGroupID === 1082;
        })}
      />
      <Capital
        dread={ships?.filter((id) => {
          return id.marketGroupID === 763;
        })}
        navy={ships?.filter((id) => {
          return id.marketGroupID === 3484;
        })}
        carrier={ships?.filter((id) => {
          return id.marketGroupID === 819 || id.marketGroupID === 2273;
        })}
        titan={ships?.filter((id) => {
          return id.marketGroupID === 814;
        })}
      />
      <Industrial
        industrial={ships?.filter((id) => {
          return id.marketGroupID === 84;
        })}
        transport={ships?.filter((id) => {
          return id.marketGroupID === 631;
        })}
        freighter={ships?.filter((id) => {
          return id.marketGroupID === 768;
        })}
        jump={ships?.filter((id) => {
          return id.marketGroupID === 1091;
        })}
      /> */}
    </Nav.Menu>
  );
};

export default Caldari;
