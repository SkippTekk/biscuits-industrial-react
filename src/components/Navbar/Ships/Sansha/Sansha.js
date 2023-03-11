import { useEffect, useState } from "react";
import Frigate from "../Frigate";
import Cruiser from "../Cruiser";
import Battleship from "../Battleship";
import Capital from "../Captial";

import FetchShipData from "../../../../utils/FetchShipData";

import { Nav } from "rsuite";

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
    <Nav.Menu title="Sansha Nation">
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
    </Nav.Menu>
  );
};

export default Sansha;
