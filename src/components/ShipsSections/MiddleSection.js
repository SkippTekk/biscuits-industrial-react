import { MDBBreadcrumb, MDBBreadcrumbItem } from "mdb-react-ui-kit";

const MiddleSection = (props) => {
  return (
    <div className="text-center">
      <div className="ship">
        <h2>
          <MDBBreadcrumb className="d-flex justify-content-center mb-5">
            <MDBBreadcrumbItem>
              <a href="/">Home</a>
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem>{props.ship.marketGroupName}</MDBBreadcrumbItem>
            <MDBBreadcrumbItem>{props.ship.groupName}</MDBBreadcrumbItem>
            <MDBBreadcrumbItem>
              <a href={`/ship/${props.ship.typeName}`}>{props.ship.typeName}</a>
            </MDBBreadcrumbItem>
          </MDBBreadcrumb>
        </h2>
        <h1>{props.ship.typeName}</h1>
        <br />
        <h5>Ship ID: {props.ship.typeID}</h5>

        <table className="table mt-5">
          <thead>
            <tr>
              <th>
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
                <tr>
                  <td key={mat.typeName}>
                    <p>
                      <img
                        src={`https://images.evetech.net/types/${mat.materialTypeID}/icon`}
                      />
                    </p>
                    <h5>{mat.typeName}</h5>
                  </td>
                  <td key={mat.quantity} className="pt-5">
                    <h4>{mat.quantity}</h4>
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
