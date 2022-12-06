import { MDBDropdownItem, MDBIcon } from "mdb-react-ui-kit";

const OreHauler = (props) => {
  return (
    <MDBDropdownItem>
      <MDBDropdownItem link href="#">
        Hauler <MDBIcon fas icon="caret-right" />
      </MDBDropdownItem>
      <ul className="dropdown-menu dropdown-submenu bg-dark">
        {props.hauler.map((ship) => (
          <MDBDropdownItem key={ship.name}>
            <MDBDropdownItem link href={ship.url}>
              {ship.name}
            </MDBDropdownItem>
          </MDBDropdownItem>
        ))}
      </ul>
    </MDBDropdownItem>
  );
};

export default OreHauler;
