import { Breadcrumb } from "rsuite";

const MiddleSection = (props) => {
  return (
    <div style={{ textAlign: "center" }}>
      <div className="ship">
        <h2>
          <Breadcrumb style={{ fontSize: "20px" }}>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item as="span">
              {props.ship.marketGroupName}
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
        <h1>{props.ship.typeName}</h1>
        <br />
        <h5>Ship ID: {props.ship.typeID}</h5>

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
                      />
                    </p>
                    <h5 style={{ marginBottom: "10px" }}>{mat.typeName}</h5>
                  </td>
                  <td key={mat.quantity}>
                    <h4>{Math.floor(mat.quantity).toLocaleString("en-US")}</h4>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MiddleSection;
