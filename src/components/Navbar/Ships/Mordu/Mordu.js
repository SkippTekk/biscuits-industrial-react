import { useEffect, useState } from "react";
import Frigate from "../Frigate";
import Cruiser from "../Cruiser";
import Battleship from "../Battleship";

import FetchShipData from "../../../../utils/FetchShipData";

import { Nav } from "rsuite";

const Mordu = (props) => {
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
    <Nav.Menu title="Mordu's Legion">
      <Frigate
        frigate={ships?.filter((id) => {
          return id.typeName === "Garmur";
        })}
      />
      <Cruiser
        cruiser={ships?.filter((id) => {
          return id.typeName === "Orthrus";
        })}
      />
      <Battleship
        battle={ships?.filter((id) => {
          return id.typeName === "Barghest";
        })}
      />
    </Nav.Menu>
  );
};

export default Mordu;
