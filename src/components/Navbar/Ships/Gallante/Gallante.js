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

const Gallante = () => {
  return (
    <MDBDropdown group>
      <MDBDropdownToggle tag="a" className="nav-link">
        Gallante Federation
      </MDBDropdownToggle>
      <MDBDropdownMenu dark className="bg-dark">
        <Frigate
          frigate={[
            { name: "Navitas", url: "http://stuff.com" },
            { name: "Tristan", url: "http://stuff.com" },
            { name: "Incursus", url: "http://stuff.com" },
            { name: "Imicus", url: "http://stuff.com" },
            { name: "Atron", url: "http://stuff.com" },
            { name: "Maulus", url: "http://stuff.com" },
          ]}
          navy={[
            { name: "Federation Navy Comet", url: "http://stuff.com" },
            { name: "Maulus Navy Issue", url: "http://stuff.com" },
            { name: "Imicus Navy Issue", url: "http://stuff.com" },
          ]}
          interceptor={[
            { name: "Taranis", url: "http://stuff.com" },
            { name: "Ares", url: "http://stuff.com" },
          ]}
          assault={[
            { name: "Iskur", url: "http://stuff.com" },
            { name: "Enyo", url: "http://stuff.com" },
          ]}
          covert={[
            { name: "Helios", url: "http://stuff.com" },
            { name: "Nemesis", url: "http://stuff.com" },
          ]}
          elecattack={[{ name: "Keres", url: "http://stuff.com" }]}
          logi={[{ name: "Thalia", url: "http://stuff.com" }]}
        />

        <Destroyer
          destroyer={[
            { name: "Catalyst", url: "http://stuff.com" },
            { name: "Algos", url: "http://stuff.com" },
          ]}
          navy={[{ name: "Catalyst Navy Issue", url: "http://stuff.com" }]}
          interdictor={[{ name: "Eris", url: "http://stuff.com" }]}
          commdestroyer={[{ name: "Magus", url: "http://stuff.com" }]}
          tacdestroyer={[{ name: "Hecate", url: "http://stuff.com" }]}
        />

        <Cruiser
          cruiser={[
            { name: "Vexor", url: "http://stuff.com" },
            { name: "Thorax", url: "http://stuff.com" },
            { name: "Celestis", url: "http://stuff.com" },
            { name: "Exequror", url: "http://stuff.com" },
          ]}
          navy={[
            { name: "Exequror Navy Issue", url: "http://stuff.com" },
            { name: "Vexor Navy Issue", url: "http://stuff.com" },
          ]}
          recon={[
            { name: "Lachesis", url: "http://stuff.com" },
            { name: "Arazu", url: "http://stuff.com" },
          ]}
          heavy={[
            { name: "Ishtar", url: "http://stuff.com" },
            { name: "Deimos", url: "http://stuff.com" },
          ]}
          interdiction={[{ name: "Phobos", url: "http://stuff.com" }]}
          logi={[{ name: "Oneiros", url: "http://stuff.com" }]}
          strat={[{ name: "Proteus", url: "http://stuff.com" }]}
        />

        <Battlecruiser
          cruiser={[
            { name: "Brutix", url: "http://stuff.com" },
            { name: "Myrmidon", url: "http://stuff.com" },
            { name: "Talos", url: "http://stuff.com" },
          ]}
          navy={[
            { name: "Myrmidon Navy Issue", url: "http://stuff.com" },
            { name: "Brutix Navy Issue", url: "http://stuff.com" },
          ]}
          command={[
            { name: "Astarte", url: "http://stuff.com" },
            { name: "Eos", url: "http://stuff.com" },
          ]}
        />

        <Battleship
          battle={[
            { name: "Hyperion", url: "http://stuff.com" },
            { name: "Megathron", url: "http://stuff.com" },
            { name: "Dominix", url: "http://stuff.com" },
          ]}
          navy={[
            { name: "Dominix Navy Issue", url: "http://stuff.com" },
            { name: "Megathron Navy Issue", url: "http://stuff.com" },
          ]}
          blackops={[{ name: "Sin", url: "http://stuff.com" }]}
          marauder={[{ name: "Kronos", url: "http://stuff.com" }]}
        />

        <Capital
          dread={[{ name: "Moros", url: "http://stuff.com" }]}
          navy={[{ name: "Moros Navy Issue", url: "http://stuff.com" }]}
          carrier={[
            { name: "Ninazu", url: "http://stuff.com" },
            { name: "Nyx", url: "http://stuff.com" },
            { name: "Thanatos", url: "http://stuff.com" },
          ]}
          titan={[{ name: "Erebus", url: "http://stuff.com" }]}
        />

        <Industrial
          industrial={[
            { name: "Nereus", url: "http://stuff.com" },
            { name: "Kryos", url: "http://stuff.com" },
            { name: "Epithal", url: "http://stuff.com" },
            { name: "Miasmos", url: "http://stuff.com" },
            { name: "Iteron Mark V", url: "http://stuff.com" },
          ]}
          transport={[
            { name: "Viator", url: "http://stuff.com" },
            { name: "Occator", url: "http://stuff.com" },
          ]}
          freighter={[{ name: "Obelisk", url: "http://stuff.com" }]}
          jump={[{ name: "Anshar", url: "http://stuff.com" }]}
        />
      </MDBDropdownMenu>
    </MDBDropdown>
  );
};

export default Gallante;
