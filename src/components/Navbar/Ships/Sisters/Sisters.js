import { useEffect, useState } from "react";
import Frigate from "../Frigate";
import Cruiser from "../Cruiser";
import Battleship from "../Battleship";

import FetchShipData from "../../../../utils/FetchShipData";

import { Nav } from "rsuite";

const Sisters = (props) => {
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
    <Nav.Menu title="Sisters of Eve">
      <Frigate
        frigate={ships?.filter((id) => {
          return id.marketGroupID === 1365 && id.typeName !== "Daredevil";
        })}
      />

      <Cruiser
        cruiser={ships?.filter((id) => {
          return id.marketGroupID === 1371 && id.typeName !== "Vigilant";
        })}
      />

      <Battleship
        battle={ships?.filter((id) => {
          return id.marketGroupID === 1380 && id.typeName !== "Vindicator";
        })}
      />
    </Nav.Menu>
  );
};

export default Sisters;
