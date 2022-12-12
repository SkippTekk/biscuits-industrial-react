import { Nav } from "rsuite";

const MiningBarge = (props) => {
  return (
    <Nav.Menu title="Mining Barge">
      {props.barge?.map((ship) => (
        <Nav.Item as="a" key={ship.typeName} href={`/ship/${ship.typeName}`}>
          {ship.typeName}
        </Nav.Item>
      ))}
    </Nav.Menu>
  );
};

export default MiningBarge;
