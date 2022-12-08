import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import axios from "axios";

import LeftSection from "./LeftSection";
import DynamicMeta from "../components/DynamicMeta";

const ShipByName = () => {
  const [shipMats, setShipMats] = useState();
  const [shipData, setShipData] = useState();
  const [loading, setLoading] = useState(true);
  let { ship } = useParams();

  useEffect(() => {
    console.log("triggered");
    try {
      axios
        .get(`http://localhost:3001/api/get/ship/getShipByName/${ship}`)
        .then((res) => setShipData(res.data[0]))
        .catch((err) => console.warn(err));
    } catch (err) {
      console.warn(err);
    }

    try {
      axios
        .get(`http://localhost:3001/api/get/ship/getShipMaterials/${ship}`)
        .then((res) => setShipMats(res.data))
        .catch((err) => console.warn(err));
    } catch (err) {
      console.warn(err);
    }
    console.log(shipData);
    console.log(shipMats);
  }, []);

  return (
    <>
      {shipData && (
        <DynamicMeta
          url={`https://skipptekk.com/ship/${ship}`}
          ship={ship}
          img={`https://image.testeveonline.com/Render/${shipData.typeID}_512.png`}
        />
      )}

      <MDBContainer fluid>
        <MDBRow>
          {/* <MDBCol>
            <div className="text-center">
              <a
                href={`https://wiki.eveuniversity.org/${shipData.typeName}`}
                target="__blank"
                alt={`${shipData.typeName} | ${shipData.marketGroupName} ${shipData.groupName}`}
              >
                <img
                  type="image"
                  target="__blank"
                  src={`https://image.testeveonline.com/Render/${shipData.typeID}_512.png`}
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                  alt={`${shipData.typeName} | ${shipData.marketGroupName} ${shipData.groupName}`}
                />
              </a>
              <h2>Default values of the ship:</h2>
              <h5>
                <strong>Ship Capacitor:</strong>{" "}
                {shipData.capacity.toLocaleString("en-US")} MW{" "}
              </h5>
              <h5>
                <strong>Ship Mass:</strong>{" "}
                {shipData.mass.toLocaleString("en-US")}
              </h5>
              <h5>
                <strong>Ship Volume:</strong>{" "}
                {shipData.volume.toLocaleString("en-US")}
              </h5>
              <h5>
                <strong>Ship Base Price:</strong>{" "}
                {Math.floor(shipData.basePrice).toLocaleString("en-US")}
              </h5>
              <h5>
                <strong>Group ID:</strong> {shipData.groupID}
              </h5>
            </div>
          </MDBCol> */}
          {/* <MDBCol>
            <div className="text-center">
              <div className="ship">
                <h1>
                  {shipData.typeName} - ID: {shipData.typeID}
                </h1>
                <span> Ship Tree location: will be at a later date.</span>

                <table className="table">
                  <thead>
                    <tr>
                      <th>
                        <b>Mineral</b>
                      </th>
                      <th>
                        <b>Quantity</b>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      {shipMats.map((mat) => {
                        <td>{mat.materialTypeId}</td>;
                        <td>Test</td>;
                      })}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </MDBCol> */}
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default ShipByName;

{
  /* <tr>
<td>
  Text
  <img
    src={`https://images.evetech.net/types/${mat.materialTypeID}/icon`}
    alt={`${mat.typeName}`}
  ></img>
</td>
<td>{mat.quantity}</td>
</tr>; */
}
