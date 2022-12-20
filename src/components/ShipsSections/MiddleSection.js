import { Breadcrumb, Button, ButtonToolbar } from "rsuite";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { shipManuActions } from "../store/shipmanu-slice";
import ShipFactionFilter from "../../utils/ShipFactionFilter";
import BillofMaterials from "./BillofMaterials";
import BPO from "../BPO";
import BuildCount from "../BuildCount";
import CitadelRig from "../CitadelRig";
import Location from "../Location";

const MiddleSection = (props) => {
  const dispatch = useDispatch();
  const [filteredShip, setFilteredShip] = useState();
  const bpoME = useSelector((state) => state.shipManu.bpoME);
  const citRig = useSelector((state) => state.shipManu.citadelRig);
  const loc = useSelector((state) => state.shipManu.location);

  useEffect(() => {
    setFilteredShip(ShipFactionFilter(props.ship));
  }, [props.ship]);

  const handleClear = () => {
    dispatch(shipManuActions.setBpoME(null));
    dispatch(shipManuActions.setCitadelRig(null));
    dispatch(shipManuActions.setLocation(null));
    dispatch(shipManuActions.setBuildQuantity(1));
  };

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
          <h1>
            <a
              href={`https://wiki.eveuniversity.org/${props.ship.typeName.replaceAll(
                " ",
                "_"
              )}`}
              target="_blank"
              rel="noreferrer"
              title={`Eve University Wiki Page for ${props.ship.typeName}`}
              style={{ textDecoration: "underline" }}
            >
              {props.ship.typeName}
            </a>
          </h1>
          <br />
          <h5>Ship ID: {props.ship.typeID}</h5>
        </div>
        <hr />
        <div style={{ textAlign: "center" }}>
          <BPO />
          <hr />
          <BuildCount />
          <hr />
          <Location />
          <hr />
          <CitadelRig />
          <ButtonToolbar>
            {bpoME !== null || citRig !== null || loc !== null ? (
              <Button
                disabled={
                  bpoME !== null || citRig !== null || loc !== null
                    ? false
                    : true
                }
                style={{ width: "250px", marginTop: "20px" }}
                appearance="primary"
                color="red"
                onClick={handleClear}
              >
                Reset
              </Button>
            ) : (
              ""
            )}
          </ButtonToolbar>
          <hr />
          <BillofMaterials mats={props.mats} />
        </div>
      </div>
    </div>
  );
};

export default MiddleSection;
