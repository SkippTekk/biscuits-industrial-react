import { Nav } from "rsuite";

const Industrial = (props) => {
  return (
    <Nav.Menu title="Industrial Class">
      {props.industrial && (
        <Nav.Menu
          title={
            props.industrial?.includes("Orca") ? "Command Ship" : "Industrial"
          }
        >
          {props.industrial?.map((ship) => (
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
      {props.transport && (
        <Nav.Menu title="Transport">
          {props.transport?.map((ship) => (
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
      {props.freighter && (
        <Nav.Menu title="Freighter">
          {props.freighter?.map((ship) => (
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
      {props.jump && (
        <Nav.Menu title="Jump Freighter">
          {props.jump?.map((ship) => (
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

export default Industrial;
