import { Nav } from "rsuite";

const Frigate = (props) => {
  return (
    <Nav.Menu title="Frigate Class">
      {props.frigate && (
        <Nav.Menu title="Frigate">
          {props.frigate?.map((ship) => {
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
      {props.expedition && (
        <Nav.Menu title="Expedition">
          {props.expedition?.map((ship) => {
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
      {props.interceptor && (
        <Nav.Menu title="Interceptor">
          {props.interceptor?.map((ship) => {
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
      {props.assault && (
        <Nav.Menu title="Assault">
          {props.assault?.map((ship) => {
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
      {props.covert && (
        <Nav.Menu title="Covert">
          {props.covert?.map((ship) => {
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
      {props.elecattack && (
        <Nav.Menu title="Electric Attack">
          {props.elecattack?.map((ship) => {
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
      {props.logi && (
        <Nav.Menu title="Logistics">
          {props.logi?.map((ship) => {
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

export default Frigate;
