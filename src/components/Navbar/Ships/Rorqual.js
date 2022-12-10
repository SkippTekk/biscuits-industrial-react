import { MDBDropdownItem, MDBIcon } from "mdb-react-ui-kit";

const Rorqual = (props) => {
  return (
    <MDBDropdownItem>
      <MDBDropdownItem link href="#">
        Capital Class <MDBIcon fas icon="caret-right" />
      </MDBDropdownItem>
      <ul className="dropdown-menu dropdown-submenu bg-dark">
        {props.rorq.map((ship) => (
          <MDBDropdownItem key={ship.typeName}>
            <MDBDropdownItem link href={`/ship/${ship.typeName}`}>
              {ship.typeName}
            </MDBDropdownItem>
          </MDBDropdownItem>
        ))}
      </ul>
    </MDBDropdownItem>
  );
};

export default Rorqual;
