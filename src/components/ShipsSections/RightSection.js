import { shipManuActions } from "../store/shipmanu-slice";
import { useSelector } from "react-redux";

const RightSection = (props) => {
  const bpoME = useSelector((state) => state.shipManu.bpoME);

  return (
    <div style={{ textAlign: "center" }}>
      <h3>Bill of Materials</h3>
      <div>
        <table style={{ width: "100%", marginTop: "20px" }}>
          <thead
            style={{
              borderBottom: "2px solid lightgrey",
            }}
          >
            <tr>
              <th style={{ borderRight: "2px solid lightgrey" }}>
                <h3>Mineral</h3>
              </th>
              <th>
                <h3>Quantity</h3>
              </th>
            </tr>
          </thead>
          <tbody>
            {props.mats?.map((mat) => {
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
                      {(Math.floor(mat.quantity) * (1 - bpoME)).toLocaleString(
                        "en-US"
                      )}
                    </h4>
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

export default RightSection;
