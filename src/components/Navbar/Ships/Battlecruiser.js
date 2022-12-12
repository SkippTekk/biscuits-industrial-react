import { Nav } from "rsuite";

const Battlecruiser = (props) => {
  return (
    <Nav.Menu title="Battlecruiser Class">
      {props.cruiser && (
        <Nav.Menu title="Cruiser">
          {props.cruiser?.map((ship) => {
            return (
              <Nav.Item
                as="a"
                key={ship.typeName}
                href={`/ship/${ship.typeName}`}
              >
                {ship.typeName}
              </Nav.Item>
            );
          })}
        </Nav.Menu>
      )}
      {props.navy && (
        <Nav.Menu title="Navy">
          {props.navy?.map((ship) => {
            return (
              <Nav.Item
                as="a"
                key={ship.typeName}
                href={`/ship/${ship.typeName}`}
              >
                {ship.typeName}
              </Nav.Item>
            );
          })}
        </Nav.Menu>
      )}
      {props.command && (
        <Nav.Menu title="Command">
          {props.command?.map((ship) => {
            return (
              <Nav.Item
                as="a"
                key={ship.typeName}
                href={`/ship/${ship.typeName}`}
              >
                {ship.typeName}
              </Nav.Item>
            );
          })}
        </Nav.Menu>
      )}
    </Nav.Menu>
  );
};

export default Battlecruiser;
