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
            { name: "Executioner", url: "/ship/Executioner" },
            { name: "Inquisitor", url: "/ship/Inquisitor" },
            { name: "Tormentor", url: "/ship/Tormentor" },
            { name: "Punisher", url: "/ship/Punisher" },
          ]}
          navy={[
            { name: "Crucifier Navy Issue", url: "/ship/Crucifier Navy Issue" },
            { name: "Imperial Navy Slicer", url: "/ship/Imperial Navy Slicer" },
            { name: "Magnate Navy Issue", url: "/ship/Magnate Navy Issue" },
          ]}
          interceptor={[
            { name: "Crusader", url: "/ship/Crusader" },
            { name: "Malediction", url: "/ship/Malediction" },
          ]}
          assault={[
            { name: "Retribution", url: "/ship/Retribution" },
            { name: "Vengeance", url: "/ship/Vengeance" },
          ]}
          covert={[
            { name: "Anathema", url: "/ship/Anathema" },
            { name: "Purifier", url: "/ship/Purifier" },
          ]}
          elecattack={[{ name: "Sentinel", url: "/ship/Sentinel" }]}
          logi={[{ name: "Deacon", url: "/ship/Deacon" }]}
        />

        <Destroyer
          destroyer={[
            { name: "Coercer", url: "/ship/Coercer" },
            { name: "Dragoon", url: "/ship/Dragoon" },
          ]}
          navy={[
            { name: "Coercer Navy Issue", url: "/ship/Coercer Navy Issue" },
          ]}
          interdictor={[{ name: "Heretic", url: "/ship/Heretic" }]}
          commdestroyer={[{ name: "Pontifex", url: "/ship/Pontifex" }]}
          tacdestroyer={[{ name: "Confessor", url: "/ship/Confessor" }]}
        />

        <Cruiser
          cruiser={[
            { name: "Maller", url: "/ship/Maller" },
            { name: "Omen", url: "/ship/Omen" },
            { name: "Augoror", url: "/ship/Augoror" },
            { name: "Arbitrator", url: "/ship/Arbitrator" },
          ]}
          navy={[
            { name: "Augoror Fleet Issue", url: "/ship/Augoror Fleet Issue" },
            { name: "Omen Fleet Issue", url: "/ship/Omen Fleet Issue" },
          ]}
          recon={[
            { name: "Curse", url: "/ship/Curse" },
            { name: "Pilgrim", url: "/ship/Pilgrim" },
          ]}
          heavy={[
            { name: "Zealot", url: "/ship/Zealot" },
            { name: "Sacrilege", url: "/ship/Sacrilege" },
          ]}
          interdiction={[{ name: "Devoter", url: "/ship/Devoter" }]}
          logi={[{ name: "Guardian", url: "/ship/Guardian" }]}
          strat={[{ name: "Legion", url: "/ship/Legion" }]}
        />

        <Battlecruiser
          cruiser={[
            { name: "Prohpecy", url: "/ship/Prohpecy" },
            { name: "Harbinger", url: "/ship/Harbinger" },
            { name: "Oracle", url: "/ship/Oracle" },
          ]}
          navy={[
            { name: "Harbinger Navy Issue", url: "/ship/Harbinger Navy Issue" },
            { name: "Prophecy Navy Issue", url: "/ship/Prophecy Navy Issue" },
          ]}
          command={[
            { name: "Absolution", url: "/ship/Absolution" },
            { name: "Damnation", url: "/ship/Damnation" },
          ]}
        />

        <Battleship
          battle={[
            { name: "Apocalypse", url: "/ship/Apocalypse" },
            { name: "Armageddon", url: "/ship/Armageddon" },
            { name: "Abaddon", url: "/ship/Abaddon" },
          ]}
          navy={[
            {
              name: "Armageddon Navy Issue",
              url: "/ship/Armageddon Navy Issue",
            },
            {
              name: "Apocalypse Navy Issue",
              url: "/ship/Apocalypse Navy Issue",
            },
          ]}
          blackops={[{ name: "Redeemer", url: "/ship/Redeemer" }]}
          marauder={[{ name: "Paladin", url: "/ship/Paladin" }]}
        />

        <Capital
          dread={[{ name: "Revelation", url: "/ship/Revelation" }]}
          navy={[
            {
              name: "Revelation Navy Issue",
              url: "/ship/Revelation Navy Issue",
            },
          ]}
          carrier={[
            { name: "Apostle", url: "/ship/Apostle" },
            { name: "Aeon", url: "/ship/Aeon" },
            { name: "Archon", url: "/ship/Archon" },
          ]}
          titan={[{ name: "Avatar", url: "/ship/Avatar" }]}
        />

        <Industrial
          industrial={[
            { name: "Sigil", url: "/ship/Sigil" },
            { name: "Bestower", url: "/ship/Bestower" },
          ]}
          transport={[
            { name: "Prorator", url: "/ship/Prorator" },
            { name: "Impel", url: "/ship/Impel" },
          ]}
          freighter={[{ name: "Providence", url: "/ship/Providence" }]}
          jump={[{ name: "Ark", url: "/ship/Ark" }]}
        />
      </MDBDropdownMenu>
    </MDBDropdown>
  );
};

export default Amarr;
