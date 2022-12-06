import { MDBDropdownItem, MDBIcon } from "mdb-react-ui-kit";

const MiningBarge = (props) => {
  return (
    <MDBDropdownItem>
      <MDBDropdownItem link href="#">
        Mining Barge <MDBIcon fas icon="caret-right" />
      </MDBDropdownItem>
      <ul className="dropdown-menu dropdown-submenu bg-dark">
        {props.barge.map((ship) => (
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

export default MiningBarge;
