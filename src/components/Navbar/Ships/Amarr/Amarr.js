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
            { name: "Crucifier", url: "http://stuff.com" },
            { name: "Magnate", url: "http://stuff.com" },
            { name: "Executioner", url: "http://stuff.com" },
            { name: "Inquisitor", url: "http://stuff.com" },
            { name: "Tormentor", url: "http://stuff.com" },
            { name: "Punisher", url: "http://stuff.com" },
          ]}
          navy={[
            { name: "Crucifier Navy Issue", url: "http://stuff.com" },
            { name: "Imperial Navy Slicer", url: "http://stuff.com" },
            { name: "Magnate Navy Issue", url: "http://stuff.com" },
          ]}
          interceptor={[
            { name: "Crusader", url: "http://stuff.com" },
            { name: "Malediction", url: "http://stuff.com" },
          ]}
          assault={[
            { name: "Retribution", url: "http://stuff.com" },
            { name: "Vengeance", url: "http://stuff.com" },
          ]}
          covert={[
            { name: "Anathema", url: "http://stuff.com" },
            { name: "Purifier", url: "http://stuff.com" },
          ]}
          elecattack={[{ name: "Sentinel", url: "http://stuff.com" }]}
          logi={[{ name: "Deacon", url: "http://stuff.com" }]}
        />

        <Destroyer
          destroyer={[
            { name: "Coercer", url: "http://stuff.com" },
            { name: "Dragoon", url: "http://stuff.com" },
          ]}
          navy={[{ name: "Coercer Navy Issue", url: "http://stuff.com" }]}
          interdictor={[{ name: "Heretic", url: "http://stuff.com" }]}
          commdestroyer={[{ name: "Pontifex", url: "http://stuff.com" }]}
          tacdestroyer={[{ name: "Confessor", url: "http://stuff.com" }]}
        />

        <Cruiser
          cruiser={[
            { name: "Maller", url: "http://stuff.com" },
            { name: "Omen", url: "http://stuff.com" },
            { name: "Augoror", url: "http://stuff.com" },
            { name: "Arbitrator", url: "http://stuff.com" },
          ]}
          navy={[
            { name: "Augoror Fleet Issue", url: "http://stuff.com" },
            { name: "Omen Fleet Issue", url: "http://stuff.com" },
          ]}
          recon={[
            { name: "Curse", url: "http://stuff.com" },
            { name: "Pilgrim", url: "http://stuff.com" },
          ]}
          heavy={[
            { name: "Zealot", url: "http://stuff.com" },
            { name: "Sacrilege", url: "http://stuff.com" },
          ]}
          interdiction={[{ name: "Devoter", url: "http://stuff.com" }]}
          logi={[{ name: "Guardian", url: "http://stuff.com" }]}
          strat={[{ name: "Legion", url: "http://stuff.com" }]}
        />

        <Battlecruiser
          cruiser={[
            { name: "Prohpecy", url: "http://stuff.com" },
            { name: "Harbinger", url: "http://stuff.com" },
            { name: "Oracle", url: "http://stuff.com" },
          ]}
          navy={[
            { name: "Harbinger Navy Issue", url: "http://stuff.com" },
            { name: "Prophecy Navy Issue", url: "http://stuff.com" },
          ]}
          command={[
            { name: "Absolution", url: "http://stuff.com" },
            { name: "Damnation", url: "http://stuff.com" },
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
