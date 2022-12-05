import Frigate from "../Frigate";
import Destroyer from "../Destroyer";
import Cruiser from "../Cruiser";

const Amarr = () => {
  return (
    <>
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
          { name: "Scythe Fleet Issue", url: "http://stuff.com" },
          { name: "Stabber Fleet Issue", url: "http://stuff.com" },
        ]}
        recon={[
          { name: "Curse", url: "http://stuff.com" },
          { name: "Pilgrim", url: "http://stuff.com" },
        ]}
        heavy={[
          { name: "Zealot", url: "http://stuff.com" },
          { name: "Sacrilege", url: "http://stuff.com" },
        ]}
        logi={[{ name: "Guardian", url: "http://stuff.com" }]}
        strat={[{ name: "Legion", url: "http://stuff.com" }]}
      />
    </>
  );
};

export default Amarr;
