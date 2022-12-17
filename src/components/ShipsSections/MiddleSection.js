import { Breadcrumb } from "rsuite";
import { useState, useEffect } from "react";
import ShipFactionFilter from "../../utils/ShipFactionFilter";
import BPO from "../BPO";
import BuildCount from "../BuildCount";
import Citadel from "../Citadel";
import CitadelRig from "../CitadelRig";
import Location from "../Location";

const MiddleSection = (props) => {
  const [filteredShip, setFilteredShip] = useState();

  useEffect(() => {
    setFilteredShip(ShipFactionFilter(props.ship));
  }, [props.ship]);

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <div className="ship">
        <h2>
          <Breadcrumb style={{ fontSize: "15px" }} maxItems={10} separator=">">
            <Breadcrumb.Item as="span">Neocom</Breadcrumb.Item>
            <Breadcrumb.Item as="span">Ship</Breadcrumb.Item>
            <Breadcrumb.Item as="span">Ship Tree</Breadcrumb.Item>
            <Breadcrumb.Item as="span">
              {filteredShip !== undefined
                ? filteredShip.faction
                : props.ship.marketGroupName}
            </Breadcrumb.Item>
            <Breadcrumb.Item as="span">{props.ship.groupName}</Breadcrumb.Item>
            <Breadcrumb.Item
              active
              as="a"
              href={`/ship/${props.ship.typeName}`}
            >
              {props.ship.typeName}
            </Breadcrumb.Item>
          </Breadcrumb>
        </h2>
        <hr />
        <div style={{ textAlign: "center" }}>
          <h1>{props.ship.typeName}</h1>
          <br />
          <h5>Ship ID: {props.ship.typeID}</h5>
        </div>
        <hr />
        <div style={{ textAlign: "center" }}>
          <BPO />
          <BuildCount />
          <Citadel />
          <CitadelRig />
          <Location />
        </div>
      </div>
    </div>
  );
};

export default MiddleSection;
