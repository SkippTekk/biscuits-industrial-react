import { Nav } from "rsuite";

const Battleship = (props) => {
  return (
    <Nav.Menu title="Battleship Class">
      {props.battle && (
        <Nav.Menu title="Battleship">
          {props.battle?.map((ship) => (
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
      {props.blackops && (
        <Nav.Menu title="Black Ops">
          {props.blackops?.map((ship) => (
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
      {props.marauder && (
        <Nav.Menu title="Marauder">
          {props.marauder?.map((ship) => (
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

export default Battleship;
