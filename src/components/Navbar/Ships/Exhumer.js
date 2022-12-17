import { Nav } from "rsuite";
import MiningBargeIcon from "../../ShipIcons/MiningBargeIcon";

const Exhumer = (props) => {
  return (
    <Nav.Menu title=" Exhumer" icon={<MiningBargeIcon />}>
      {props.exhumer?.map((ship) => {
        return (
          <Nav.Item as="a" key={ship.typeName} href={`/ship/${ship.typeName}`}>
            {ship.typeName}
          </Nav.Item>
        );
      })}
    </Nav.Menu>
  );
};

export default Exhumer;
