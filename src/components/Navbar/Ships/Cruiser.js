import { Nav } from "rsuite";

const Cruiser = (props) => {
  return (
    <Nav.Menu title="Cruiser Class">
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
      {props.recon && (
        <Nav.Menu title="Recon">
          {props.recon?.map((ship) => {
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
      {props.heavy && (
        <Nav.Menu title="Heavy Assualt">
          {props.heavy?.map((ship) => {
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
      {props.interdiction && (
        <Nav.Menu title="Interdiction">
          {props.interdiction?.map((ship) => {
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
      {props.strat && (
        <Nav.Menu title="Strategic">
          {props.strat?.map((ship) => {
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

export default Cruiser;
