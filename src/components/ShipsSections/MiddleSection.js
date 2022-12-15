import { Breadcrumb } from "rsuite";
import { useState, useEffect } from "react";
import ShipFactionFilter from "../../utils/ShipFactionFilter";

const MiddleSection = (props) => {
  const [filteredShip, setFilteredShip] = useState();

  useEffect(() => {
    setFilteredShip(ShipFactionFilter(props.ship));
  }, [props.ship]);

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <div className="ship">
        <h2>
          <Breadcrumb style={{ fontSize: "15px" }} maxItems="10" separator=">">
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
        <div style={{ textAlign: "center" }}>
          <h1>{props.ship.typeName}</h1>
          <br />
          <h5>Ship ID: {props.ship.typeID}</h5>
        </div>

        <div style={{ textAlign: "center" }}>
          <table style={{ width: "100%", marginTop: "20px" }}>
            <thead
              style={{
                borderBottom: "3px solid lightgrey",
              }}
            >
              <tr>
                <th style={{ borderRight: "3px solid lightgrey" }}>
                  <h3>Mineral</h3>
                </th>
                <th>
                  <h3>Quantity</h3>
                </th>
              </tr>
            </thead>
            <tbody>
              {props.mats.map((mat) => {
                return (
                  <tr
                    style={{ borderBottom: "1px solid lightgrey" }}
                    key={mat.typeName}
                  >
                    <td>
                      <p>
                        <img
                          src={`https://images.evetech.net/types/${mat.materialTypeID}/icon`}
                          alt={mat.typeName}
                          style={{ width: "15%", height: "auto" }}
                        />
                      </p>
                      <h5 style={{ marginBottom: "10px" }}>{mat.typeName}</h5>
                    </td>
                    <td key={mat.quantity}>
                      <h4>
                        {Math.floor(mat.quantity).toLocaleString("en-US")}
                      </h4>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MiddleSection;
