import Frigate from "../Frigate";
import Destroyer from "../Destroyer";
import Cruiser from "../Cruiser";
import Battlecruiser from "../Battlecruiser";
import Battleship from "../Battleship";
import Capital from "../Captial";
import Industrial from "../Industrial";

import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
} from "mdb-react-ui-kit";

const Amarr = () => {
  return (
    <MDBDropdown group>
      <MDBDropdownToggle tag="a" className="nav-link">
        Amarr Empire
      </MDBDropdownToggle>
      <MDBDropdownMenu dark className="bg-dark">
        <Frigate
          frigate={[
            { name: "Crucifier", url: "/ship/Crucifier" },
            { name: "Magnate", url: "/ship/Magnate" },
            { name: "Executioner", url: "/ship/" },
            { name: "Inquisitor", url: "/ship/" },
            { name: "Tormentor", url: "/ship/" },
            { name: "Punisher", url: "/ship/" },
          ]}
          navy={[
            { name: "Crucifier Navy Issue", url: "/ship/" },
            { name: "Imperial Navy Slicer", url: "/ship/" },
            { name: "Magnate Navy Issue", url: "/ship/" },
          ]}
          interceptor={[
            { name: "Crusader", url: "/ship/" },
            { name: "Malediction", url: "/ship/" },
          ]}
          assault={[
            { name: "Retribution", url: "/ship/" },
            { name: "Vengeance", url: "/ship/" },
          ]}
          covert={[
            { name: "Anathema", url: "/ship/" },
            { name: "Purifier", url: "/ship/" },
          ]}
          elecattack={[{ name: "Sentinel", url: "/ship/" }]}
          logi={[{ name: "Deacon", url: "/ship/" }]}
        />

        <Destroyer
          destroyer={[
            { name: "Coercer", url: "/ship/" },
            { name: "Dragoon", url: "/ship/" },
          ]}
          navy={[{ name: "Coercer Navy Issue", url: "/ship/" }]}
          interdictor={[{ name: "Heretic", url: "/ship/" }]}
          commdestroyer={[{ name: "Pontifex", url: "/ship/" }]}
          tacdestroyer={[{ name: "Confessor", url: "/ship/" }]}
        />

        <Cruiser
          cruiser={[
            { name: "Maller", url: "/ship/" },
            { name: "Omen", url: "/ship/" },
            { name: "Augoror", url: "/ship/" },
            { name: "Arbitrator", url: "/ship/" },
          ]}
          navy={[
            { name: "Augoror Fleet Issue", url: "/ship/" },
            { name: "Omen Fleet Issue", url: "/ship/" },
          ]}
          recon={[
            { name: "Curse", url: "/ship/" },
            { name: "Pilgrim", url: "/ship/" },
          ]}
          heavy={[
            { name: "Zealot", url: "/ship/" },
            { name: "Sacrilege", url: "/ship/" },
          ]}
          interdiction={[{ name: "Devoter", url: "/ship/" }]}
          logi={[{ name: "Guardian", url: "/ship/" }]}
          strat={[{ name: "Legion", url: "/ship/" }]}
        />

        <Battlecruiser
          cruiser={[
            { name: "Prohpecy", url: "/ship/" },
            { name: "Harbinger", url: "/ship/" },
            { name: "Oracle", url: "/ship/" },
          ]}
          navy={[
            { name: "Harbinger Navy Issue", url: "/ship/" },
            { name: "Prophecy Navy Issue", url: "/ship/" },
          ]}
          command={[
            { name: "Absolution", url: "/ship/" },
            { name: "Damnation", url: "/ship/" },
          ]}
        />

        <Battleship
          battle={[
            { name: "Apocalypse", url: "http://stuff.com" },
            { name: "Armageddon", url: "http://stuff.com" },
            { name: "Abaddon", url: "http://stuff.com" },
          ]}
          navy={[
            { name: "Armageddon Navy Issue", url: "http://stuff.com" },
            { name: "Apocalypse Navy Issue", url: "http://stuff.com" },
          ]}
          blackops={[{ name: "Redeemer", url: "http://stuff.com" }]}
          marauder={[{ name: "Paladin", url: "http://stuff.com" }]}
        />

        <Capital
          dread={[{ name: "Revelation", url: "http://stuff.com" }]}
          navy={[{ name: "Revelation Navy Issue", url: "http://stuff.com" }]}
          carrier={[
            { name: "Apostle", url: "http://stuff.com" },
            { name: "Aeon", url: "http://stuff.com" },
            { name: "Archon", url: "http://stuff.com" },
          ]}
          titan={[{ name: "Avatar", url: "http://stuff.com" }]}
        />

        <Industrial
          industrial={[
            { name: "Sigil", url: "http://stuff.com" },
            { name: "Bestower", url: "http://stuff.com" },
          ]}
          transport={[
            { name: "Prorator", url: "http://stuff.com" },
            { name: "Impel", url: "http://stuff.com" },
          ]}
          freighter={[{ name: "Providence", url: "http://stuff.com" }]}
          jump={[{ name: "Ark", url: "http://stuff.com" }]}
        />
      </MDBDropdownMenu>
    </MDBDropdown>
  );
};

export default Amarr;
