import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Loader, FlexboxGrid } from "rsuite";
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
        .get(`http://localhost:3001/api/ship/getShipByName/${ship}`)
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
        <FlexboxGrid justify="center" style={{ padding: "125px" }}>
          <Loader size="lg" content="Loading..." vertical />
        </FlexboxGrid>
      )}
      {!isLoading && (
        <>
          <DynamicMeta
            url={`https://skipptekk.com/ship/${ship}`}
            ship={ship}
            img={`https://image.testeveonline.com/Render/${shipData[0].ship.typeID}_512.png`}
          />

          <FlexboxGrid justify="space-around" style={{ marginTop: "10px" }}>
            <FlexboxGrid.Item colspan={6}>
              <LeftSection ship={shipData[0].ship} />
            </FlexboxGrid.Item>
            <FlexboxGrid.Item colspan={9}>
              <MiddleSection
                ship={shipData[0].ship}
                mats={shipData[1].materials}
              />
            </FlexboxGrid.Item>
            <FlexboxGrid.Item colspan={6}>
              <RightSection ship={shipData[0].ship} />
            </FlexboxGrid.Item>
          </FlexboxGrid>
        </>
      )}
    </>
  );
};

export default ShipByName;
