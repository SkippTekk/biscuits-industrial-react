import Amarr from "./Amarr/Amarr";
import Caldari from "./Caldari/Caldari";
import Gallante from "./Gallante/Gallante";
import Minmatar from "./Minmatar/Minmatar";
import Ore from "./Ore/Ore";
import Guristas from "./Guristas/Guristas";
import Sansha from "./Sansha/Sansha";
import BloodRaider from "./BloodRaider/BloodRaider";
import AngelCartel from "./AngelCartel/AngelCartel";
import Serpentis from "./Serpentis/Serpentis";
import Sisters from "./Sisters/Sisters";
import Mordu from "./Mordu/Mordu";
import Triglavian from "./Triglavian/Triglavian";
import Edencom from "./Edencom/Edencom";

import { Nav } from "rsuite";

const ShipNavbar = () => {
  return (
    <Nav>
      <Amarr race="4" />
      <Caldari race="1" />
      <Gallante race="8" />
      <Minmatar race="2" />
      <Ore race="128" />
      <Guristas race="1" />
      <Sansha race="4" />
      <BloodRaider race="4" />
      <AngelCartel race="2" />
      <Serpentis race="8" />
      <Sisters race="8" />
      <Mordu race="1" />
      <Triglavian race="135" />
      <Edencom race="1" />
    </Nav>
  );
};

export default ShipNavbar;
