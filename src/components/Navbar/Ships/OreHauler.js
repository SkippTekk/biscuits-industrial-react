import { Nav } from "rsuite";
import IndustrialIcon from "../../ShipIcons/IndustrialIcon";

const OreHauler = (props) => {
  return (
    <Nav.Menu title=" Ore Hauler" icon={<IndustrialIcon />}>
      {props.hauler?.map((ship) => (
        <Nav.Item as="a" key={ship.typeName} href={`/ship/${ship.typeName}`}>
          {ship.typeName}
        </Nav.Item>
      ))}
    </Nav.Menu>
  );
};

export default OreHauler;
