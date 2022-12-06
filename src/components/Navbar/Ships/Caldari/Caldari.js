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

const Caldari = () => {
  return (
    <MDBDropdown group>
      <MDBDropdownToggle tag="a" className="nav-link">
        Caldari State
      </MDBDropdownToggle>
      <MDBDropdownMenu dark className="bg-dark">
        <Frigate
          frigate={[
            { name: "Bantam", url: "http://stuff.com" },
            { name: "Condor", url: "http://stuff.com" },
            { name: "Griffin", url: "http://stuff.com" },
            { name: "Kestrel", url: "http://stuff.com" },
            { name: "Merlin", url: "http://stuff.com" },
            { name: "Heron", url: "http://stuff.com" },
          ]}
          navy={[
            { name: "Griffin Navy Issue", url: "http://stuff.com" },
            { name: "Caldari Navy Hookbill", url: "http://stuff.com" },
            { name: "Heron Navy Issue", url: "http://stuff.com" },
          ]}
          interceptor={[
            { name: "Crow", url: "http://stuff.com" },
            { name: "Raptor", url: "http://stuff.com" },
          ]}
          assault={[
            { name: "Hawk", url: "http://stuff.com" },
            { name: "Harpy", url: "http://stuff.com" },
          ]}
          covert={[
            { name: "Buzzard", url: "http://stuff.com" },
            { name: "Manticore", url: "http://stuff.com" },
          ]}
          elecattack={[{ name: "Kitsune", url: "http://stuff.com" }]}
          logi={[{ name: "Kirin", url: "http://stuff.com" }]}
        />

        <Destroyer
          destroyer={[
            { name: "Cormorant", url: "http://stuff.com" },
            { name: "Corax", url: "http://stuff.com" },
          ]}
          navy={[{ name: "Cormorant Navy Issue", url: "http://stuff.com" }]}
          interdictor={[{ name: "Flycatcher", url: "http://stuff.com" }]}
          commdestroyer={[{ name: "Stork", url: "http://stuff.com" }]}
          tacdestroyer={[{ name: "Jackdaw", url: "http://stuff.com" }]}
        />

        <Cruiser
          cruiser={[
            { name: "Osprey", url: "http://stuff.com" },
            { name: "Caracal", url: "http://stuff.com" },
            { name: "Moa", url: "http://stuff.com" },
            { name: "Blackbird", url: "http://stuff.com" },
          ]}
          navy={[
            { name: "Osprey Navy Issue", url: "http://stuff.com" },
            { name: "Caracal Navy Issue", url: "http://stuff.com" },
          ]}
          recon={[
            { name: "Rook", url: "http://stuff.com" },
            { name: "Falcon", url: "http://stuff.com" },
          ]}
          heavy={[
            { name: "Eagle", url: "http://stuff.com" },
            { name: "Cerberus", url: "http://stuff.com" },
          ]}
          interdiction={[{ name: "Onyx", url: "http://stuff.com" }]}
          logi={[{ name: "Basilisk", url: "http://stuff.com" }]}
          strat={[{ name: "Tengu", url: "http://stuff.com" }]}
        />

        <Battlecruiser
          cruiser={[
            { name: "Ferox", url: "http://stuff.com" },
            { name: "Drake", url: "http://stuff.com" },
            { name: "Naga", url: "http://stuff.com" },
          ]}
          navy={[
            { name: "Drake Navy Issue", url: "http://stuff.com" },
            { name: "Ferox Navy Issue", url: "http://stuff.com" },
          ]}
          command={[
            { name: "Nighthawk", url: "http://stuff.com" },
            { name: "Vulture", url: "http://stuff.com" },
          ]}
        />

        <Battleship
          battle={[
            { name: "Scorpion", url: "http://stuff.com" },
            { name: "Rokh", url: "http://stuff.com" },
            { name: "Raven", url: "http://stuff.com" },
          ]}
          navy={[
            { name: "Scorpion Navy Issue", url: "http://stuff.com" },
            { name: "Raven Navy Issue", url: "http://stuff.com" },
          ]}
          blackops={[{ name: "Widow", url: "http://stuff.com" }]}
          marauder={[{ name: "Golem", url: "http://stuff.com" }]}
        />

        <Capital
          dread={[{ name: "Phoenix", url: "http://stuff.com" }]}
          navy={[{ name: "Phoneix Navy Issue", url: "http://stuff.com" }]}
          carrier={[
            { name: "Minokawa", url: "http://stuff.com" },
            { name: "Wyvern", url: "http://stuff.com" },
            { name: "Chimera", url: "http://stuff.com" },
          ]}
          titan={[{ name: "Leviathan", url: "http://stuff.com" }]}
        />

        <Industrial
          industrial={[
            { name: "Badger", url: "http://stuff.com" },
            { name: "Tayra", url: "http://stuff.com" },
          ]}
          transport={[
            { name: "Crane", url: "http://stuff.com" },
            { name: "Bustard", url: "http://stuff.com" },
          ]}
          freighter={[{ name: "Charon", url: "http://stuff.com" }]}
          jump={[{ name: "Rhea", url: "http://stuff.com" }]}
        />
      </MDBDropdownMenu>
    </MDBDropdown>
  );
};

export default Caldari;
