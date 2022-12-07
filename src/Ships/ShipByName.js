import { useParams } from "react-router-dom";
import axios from "axios";

import DynamicMeta from "../components/DynamicMeta";

const ShipByName = () => {
  let { shipName } = useParams();

  return (
    <>
      <DynamicMeta url="" title="" desc="" img="" />
      <section>
        <div className="col-md-3 leftNav">
          <div className="ship">
            <a
              href={`https://wiki.eveuniversity.org/${ship.typeName}`}
              target="__blank"
            >
              <input
                type="image"
                class="media-object"
                target="__blank"
                src={`https://image.testeveonline.com/Render/${ship.typeID}_512.png`}
                style={{ maxWidth: "100%", maxHeight: "100%" }}
                alt={shipName}
              ></input>
            </a>
            <h4 className="media-heading">Default values of the ship.</h4>
            <p>Ship Capacitor: {ship.capacity.toLocaleString("en-US")} MW </p>
            <p>Ship Mass: {ship.mass.toLocaleString("en-US")}</p>
            <p>Ship Volume: {ship.volume.toLocaleString("en-US")}</p>
            <p>Group ID: {ship.groupID}</p>
            <p>Race BROKEN on faction: </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShipByName;
