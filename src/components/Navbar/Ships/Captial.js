import { Nav } from "rsuite";
import DreadnoughtIcon from "../../ShipIcons/DreadnoughtIcon";
import CarrierIcon from "../../ShipIcons/CarrierIcon";
import TitanIcon from "../../ShipIcons/TitanIcon";

const Capital = (props) => {
  return (
    <Nav.Menu title=" Capital Class" icon={<DreadnoughtIcon />}>
      {props.dread && (
        <Nav.Menu title=" Dreadnought" icon={<DreadnoughtIcon />}>
          {props.dread?.map((ship) => (
            <Nav.Item
              as="a"
              key={ship.typeName}
              href={`/ship/${ship.typeName}`}
            >
              {ship.typeName}
            </Nav.Item>
          ))}
        </Nav.Menu>
      )}
      {props.navy && (
        <Nav.Menu title=" Navy" icon={<DreadnoughtIcon />}>
          {props.navy?.map((ship) => (
            <Nav.Item
              as="a"
              key={ship.typeName}
              href={`/ship/${ship.typeName}`}
            >
              {ship.typeName}
            </Nav.Item>
          ))}
        </Nav.Menu>
      )}
      {props.carrier && (
        <Nav.Menu title=" Carrier" icon={<CarrierIcon />}>
          {props.carrier?.map((ship) => (
            <Nav.Item
              as="a"
              key={ship.typeName}
              href={`/ship/${ship.typeName}`}
            >
              {ship.typeName}
            </Nav.Item>
          ))}
        </Nav.Menu>
      )}
      {props.titan && (
        <Nav.Menu title=" Titan" icon={<TitanIcon />}>
          {props.titan?.map((ship) => (
            <Nav.Item
              as="a"
              key={ship.typeName}
              href={`/ship/${ship.typeName}`}
            >
              {ship.typeName}
            </Nav.Item>
          ))}
        </Nav.Menu>
      )}
    </Nav.Menu>
  );
};

export default Capital;
