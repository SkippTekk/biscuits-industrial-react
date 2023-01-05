import { useSelector } from "react-redux";

const BillofMaterials = (props) => {
  const bpoME = useSelector((state) => state.shipManu.bpoME);
  const buildQuantity = useSelector((state) => state.shipManu.buildQuantity);
  const citRig = useSelector((state) => state.shipManu.citadelRig);
  const loc = useSelector((state) => state.shipManu.location);

  const convertLoc = () => {
    if (loc === "Highsec") return 0.01;
    if (loc === "Lowsec") return 0.019;
    if (loc === "Nullsec" || loc === "Wormhole") return 0.021;
    if (loc === null) return 0;
  };

  const convertRig = () => {
    if (citRig === "Tier 1") return 0.02;
    if (citRig === "Tier 2") return 0.024;
    if (citRig === null) return 0;
  };

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
                        style={{
                          width: "15%",
                          height: "auto",
                          marginTop: "2px",
                        }}
                      />
                    </p>
                    <h5 style={{ marginBottom: "10px" }}>{mat.typeName}</h5>
                  </td>
                  <td key={mat.quantity}>
                    <h4>
                      {bpoME !== null ||
                      buildQuantity >= 1 ||
                      citRig !== null ||
                      loc !== null
                        ? Math.max(
                            buildQuantity,
                            Math.ceil(
                              Math.round(
                                buildQuantity *
                                  mat.quantity *
                                  (1 - bpoME) *
                                  (1 - convertLoc()) *
                                  (1 - convertRig()),
                                2
                              )
                            )
                          ).toLocaleString("en-US")
                        : Math.floor(mat.quantity).toLocaleString("en-US")}
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

export default BillofMaterials;
