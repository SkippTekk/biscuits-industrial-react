import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBSpinner } from "mdb-react-ui-kit";
import axios from "axios";

import LeftSection from "../components/ShipsSections/LeftSection";
import MiddleSection from "../components/ShipsSections/MiddleSection";
import RightSection from "../components/ShipsSections/RightSection";
import DynamicMeta from "../components/DynamicMeta";

const ShipByName = () => {
  const [shipData, setShipData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  let { ship } = useParams();

  const getShipData = () => {
    try {
      axios
        .get(
          `${process.env.REACT_APP_DATABASE_URL}/api/ship/getShipByName/${ship}`
        )
        .then((res) => {
          setShipData(res.data);
          setIsLoading(false);
        })
        .catch((err) => console.warn(err));
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    getShipData();
  }, [setShipData]);

  return (
    <>
      {isLoading && (
        <div className="d-flex justify-content-center p-5">
          <MDBSpinner color="info" style={{ width: "4rem", height: "4rem" }}>
            <span className="visually-hidden">Loading...</span>
          </MDBSpinner>
        </div>
      )}
      {!isLoading && (
        <>
          <DynamicMeta
            url={`https://skipptekk.com/ship/${ship}`}
            ship={ship}
            img={`https://image.testeveonline.com/Render/${shipData[0].ship.typeID}_512.png`}
          />

          <MDBContainer fluid>
            <MDBRow>
              <MDBCol>
                <LeftSection ship={shipData[0].ship} />
              </MDBCol>
              <MDBCol>
                <MiddleSection
                  ship={shipData[0].ship}
                  mats={shipData[1].materials}
                />
              </MDBCol>
              <MDBCol>
                <RightSection ship={shipData[0].ship} />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </>
      )}
    </>
  );
};

export default ShipByName;
