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

const Minmatar = () => {
  return (
    <MDBDropdown group>
      <MDBDropdownToggle tag="a" className="nav-link">
        Minmatar Republic
      </MDBDropdownToggle>
      <MDBDropdownMenu dark className="bg-dark">
        <Frigate
          frigate={[
            { name: "Slasher", url: "http://stuff.com" },
            { name: "Probe", url: "http://stuff.com" },
            { name: "Rifter", url: "http://stuff.com" },
            { name: "Breacher", url: "http://stuff.com" },
            { name: "Burst", url: "http://stuff.com" },
            { name: "Vigil", url: "http://stuff.com" },
          ]}
          navy={[
            { name: "Vigil Fleet Issue", url: "http://stuff.com" },
            { name: "Republic Fleet Firetail", url: "http://stuff.com" },
            { name: "Probe Fleet Issue", url: "http://stuff.com" },
          ]}
          interceptor={[
            { name: "Claw", url: "http://stuff.com" },
            { name: "Stiletto", url: "http://stuff.com" },
          ]}
          assault={[
            { name: "Jaguar", url: "http://stuff.com" },
            { name: "Wolf", url: "http://stuff.com" },
          ]}
          covert={[
            { name: "Cheetah", url: "http://stuff.com" },
            { name: "Hound", url: "http://stuff.com" },
          ]}
          elecattack={[{ name: "Hyena", url: "http://stuff.com" }]}
          logi={[{ name: "Scalpel", url: "http://stuff.com" }]}
        />

        <Destroyer
          destroyer={[
            { name: "Talwar", url: "http://stuff.com" },
            { name: "Thrasher", url: "http://stuff.com" },
          ]}
          navy={[{ name: "Thrasher Fleet Issue", url: "http://stuff.com" }]}
          interdictor={[{ name: "Sabre", url: "http://stuff.com" }]}
          commdestroyer={[{ name: "Bifrost", url: "http://stuff.com" }]}
          tacdestroyer={[{ name: "Svipul", url: "http://stuff.com" }]}
        />

        <Cruiser
          cruiser={[
            { name: "Rupture", url: "http://stuff.com" },
            { name: "Stabber", url: "http://stuff.com" },
            { name: "Bellicose", url: "http://stuff.com" },
            { name: "Scythe", url: "http://stuff.com" },
          ]}
          navy={[
            { name: "Scythe Fleet Issue", url: "http://stuff.com" },
            { name: "Stabber Fleet Issue", url: "http://stuff.com" },
          ]}
          recon={[
            { name: "Huginn", url: "http://stuff.com" },
            { name: "Rapier", url: "http://stuff.com" },
          ]}
          heavy={[
            { name: "Muninn", url: "http://stuff.com" },
            { name: "Vagabond", url: "http://stuff.com" },
          ]}
          interdiction={[{ name: "Broadsword", url: "http://stuff.com" }]}
          logi={[{ name: "Scimitar", url: "http://stuff.com" }]}
          strat={[{ name: "Loki", url: "http://stuff.com" }]}
        />

        <Battlecruiser
          cruiser={[
            { name: "Cyclone", url: "http://stuff.com" },
            { name: "Hurricane", url: "http://stuff.com" },
            { name: "Tornado", url: "http://stuff.com" },
          ]}
          navy={[
            { name: "Hurricane Fleet Issue", url: "http://stuff.com" },
            { name: "Cyclone Fleet Issue", url: "http://stuff.com" },
          ]}
          command={[
            { name: "Claymore", url: "http://stuff.com" },
            { name: "Sleipnir", url: "http://stuff.com" },
          ]}
        />

        <Battleship
          battle={[
            { name: "Maelstrom", url: "http://stuff.com" },
            { name: "Tempest", url: "http://stuff.com" },
            { name: "Typhoon", url: "http://stuff.com" },
          ]}
          navy={[
            { name: "Typhoon Fleet Issue", url: "http://stuff.com" },
            { name: "Tempest Fleet Issue", url: "http://stuff.com" },
          ]}
          blackops={[{ name: "Panther", url: "http://stuff.com" }]}
          marauder={[{ name: "Vargur", url: "http://stuff.com" }]}
        />

        <Capital
          dread={[{ name: "Naglfar", url: "http://stuff.com" }]}
          navy={[{ name: "Naglfar Fleet Issue", url: "http://stuff.com" }]}
          carrier={[
            { name: "Lif", url: "http://stuff.com" },
            { name: "Hel", url: "http://stuff.com" },
            { name: "Nidhoggur", url: "http://stuff.com" },
          ]}
          titan={[{ name: "Ragnarok", url: "http://stuff.com" }]}
        />

        <Industrial
          industrial={[
            { name: "Hoarder", url: "http://stuff.com" },
            { name: "Mammoth", url: "http://stuff.com" },
            { name: "Wreathe", url: "http://stuff.com" },
          ]}
          transport={[
            { name: "Prowler", url: "http://stuff.com" },
            { name: "Mastodon", url: "http://stuff.com" },
          ]}
          freighter={[{ name: "Fenrir", url: "http://stuff.com" }]}
          jump={[{ name: "Nomad", url: "http://stuff.com" }]}
        />
      </MDBDropdownMenu>
    </MDBDropdown>
  );
};

export default Minmatar;
