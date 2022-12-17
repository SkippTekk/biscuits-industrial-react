import { Nav } from "rsuite";
import DreadnoughtIcon from "../../ShipIcons/DreadnoughtIcon";

const Rorqual = (props) => {
  return (
    <Nav.Menu title=" Captial Class" icon={<DreadnoughtIcon />}>
      {props.rorq?.map((ship) => (
        <Nav.Item as="a" key={ship.typeName} href={`/ship/${ship.typeName}`}>
          {ship.typeName}
        </Nav.Item>
      ))}
    </Nav.Menu>
  );
};

export default Rorqual;
