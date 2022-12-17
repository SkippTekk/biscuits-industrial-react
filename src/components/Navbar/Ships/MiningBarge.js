import { Nav } from "rsuite";
import MiningBargeIcon from "../../ShipIcons/MiningBargeIcon";

const MiningBarge = (props) => {
  return (
    <Nav.Menu title=" Mining Barge" icon={<MiningBargeIcon />}>
      {props.barge?.map((ship) => (
        <Nav.Item as="a" key={ship.typeName} href={`/ship/${ship.typeName}`}>
          {ship.typeName}
        </Nav.Item>
      ))}
    </Nav.Menu>
  );
};

export default MiningBarge;
