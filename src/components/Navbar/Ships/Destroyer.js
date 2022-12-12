import { Nav } from "rsuite";

const Destroyer = (props) => {
  return (
    <Nav.Menu title="Destroyer Class">
      {props.destroyer && (
        <Nav.Menu title="Destroyer">
          {props.destroyer?.map((ship) => {
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
      {props.interdictor && (
        <Nav.Menu title="Interdictor">
          {props.interdictor?.map((ship) => {
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
      {props.commdestroyer && (
        <Nav.Menu title="Command Destroyer">
          {props.commdestroyer?.map((ship) => {
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
      {props.tacdestroyer && (
        <Nav.Menu title="Tactical Destroyer">
          {props.tacdestroyer?.map((ship) => {
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

export default Destroyer;
