import { Nav } from "rsuite";

const Exhumer = (props) => {
  return (
    <Nav.Menu title="Exhumer">
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
