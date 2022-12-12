import { Nav } from "rsuite";

const Capital = (props) => {
  return (
    <Nav.Menu title="Capital Class">
      {props.dread && (
        <Nav.Menu title="Dreadnought">
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
        <Nav.Menu title="Navy">
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
        <Nav.Menu title="Carrier">
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
        <Nav.Menu title="Titan">
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
