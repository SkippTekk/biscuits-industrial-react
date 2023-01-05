import { useEffect, useState } from "react";
import Frigate from "../Frigate";
import Cruiser from "../Cruiser";
import Battlecruiser from "../Battlecruiser";
import Capital from "../Captial";

import FetchShipData from "../../../../utils/FetchShipData";

import { Nav } from "rsuite";

const Guristas = (props) => {
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
    <Nav.Menu title="Guristas Pirates">
      <Frigate
        frigate={ships?.filter((id) => {
          return id.marketGroupID === 1365 && id.typeName !== "Garmur";
        })}
      />
      <Cruiser
        cruiser={ships?.filter((id) => {
          return id.marketGroupID === 1371 && id.typeName !== "Orthrus";
        })}
      />
      <Battlecruiser
        cruiser={ships?.filter((id) => {
          return id.marketGroupID === 1380 && id.typeName !== "Barghest";
        })}
      />
      <Capital
        dread={ships?.filter((id) => {
          return id.marketGroupID === 3483;
        })}
        carrier={ships?.filter((id) => {
          return id.marketGroupID === 2357;
        })}
        titan={ships?.filter((id) => {
          return id.marketGroupID === 2287;
        })}
      />
    </Nav.Menu>
  );
};

export default Guristas;
