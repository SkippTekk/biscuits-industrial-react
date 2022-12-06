import Frigate from "../Frigate";
import MiningBarge from "../MiningBarge";
import Exhumer from "../Exhumer";
import OreHauler from "../OreHauler";
import Rorqual from "../Rorqual";
import Industrial from "../Industrial";
import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
} from "mdb-react-ui-kit";

const Ore = () => {
  return (
    <MDBDropdown group>
      <MDBDropdownToggle tag="a" className="nav-link">
        ORE
      </MDBDropdownToggle>
      <MDBDropdownMenu dark className="bg-dark">
        <Frigate
          frigate={[{ name: "Venture", url: "http://stuff.com" }]}
          expedition={[
            { name: "Prospect", url: "http://stuff.com" },
            { name: "Endurance", url: "http://stuff.com" },
          ]}
        />

        <MiningBarge
          barge={[
            { name: "Procurer", url: "http://stuff.com" },
            { name: "Covertor", url: "http://stuff.com" },
            { name: "Retriever", url: "http://stuff.com" },
          ]}
        />

        <Exhumer
          exhumer={[
            { name: "Hulk", url: "http://stuff.com" },
            { name: "Skiff", url: "http://stuff.com" },
            { name: "Mackinaw", url: "http://stuff.com" },
          ]}
        />

        <OreHauler hauler={[{ name: "Noctis", url: "http://stuff.com" }]} />

        <Rorqual rorq={[{ name: "Rorqual", url: "http://stuff.com" }]} />

        <Industrial
          industrial={[
            { name: "Porpoise", url: "http://stuff.com" },
            { name: "Orca", url: "http://stuff.com" },
          ]}
          freighter={[{ name: "Bowhead", url: "http://stuff.com" }]}
        />
      </MDBDropdownMenu>
    </MDBDropdown>
  );
};

export default Ore;
