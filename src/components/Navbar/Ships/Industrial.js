import { Nav } from "rsuite";
import IndustrialIcon from "../../ShipIcons/IndustrialIcon";
import IndustrialCommandIcon from "../../ShipIcons/IndustrialCommandIcon";
import FreighterIcon from "../../ShipIcons/FreighterIcon";

const Industrial = (props) => {
  return (
    <Nav.Menu title=" Industrial Class" icon={<IndustrialIcon />}>
      {props.industrial && (
        <Nav.Menu
          title={
            props.industrial?.includes("Orca") ? " Command Ship" : " Industrial"
          }
          icon={<IndustrialIcon />}
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
        <Nav.Menu title=" Transport" icon={<IndustrialIcon />}>
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
      {props.command && (
        <Nav.Menu title=" Command Ship" icon={<IndustrialCommandIcon />}>
          {props.command?.map((ship) => (
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
        <Nav.Menu title=" Freighter" icon={<FreighterIcon />}>
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
      {props.orefreighter && (
        <Nav.Menu title=" Freighter" icon={<FreighterIcon />}>
          {props.orefreighter?.map((ship) => (
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
        <Nav.Menu title=" Jump Freighter" icon={<FreighterIcon />}>
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
