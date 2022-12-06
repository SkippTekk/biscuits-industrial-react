import { MDBDropdownItem, MDBIcon } from "mdb-react-ui-kit";

const Battlecruiser = (props) => {
  return (
    <MDBDropdownItem>
      <MDBDropdownItem link href="#">
        Battlecruiser Class <MDBIcon fas icon="caret-right" />
      </MDBDropdownItem>
      <ul className="dropdown-menu dropdown-submenu bg-dark">
        {props.cruiser && (
          <MDBDropdownItem>
            <MDBDropdownItem link href="#">
              Battlecruiser <MDBIcon fas icon="caret-right" />
            </MDBDropdownItem>
            <ul className="dropdown-menu dropdown-submenu bg-dark">
              {props.cruiser.map((ship) => (
                <MDBDropdownItem key={ship.name}>
                  <MDBDropdownItem link href={ship.url}>
                    {ship.name}
                  </MDBDropdownItem>
                </MDBDropdownItem>
              ))}
            </ul>
          </MDBDropdownItem>
        )}
        {props.navy && (
          <MDBDropdownItem>
            <MDBDropdownItem link href="#">
              Navy Battlecruiser <MDBIcon fas icon="caret-right" />
            </MDBDropdownItem>
            <ul className="dropdown-menu dropdown-submenu bg-dark">
              {props.navy.map((ship) => (
                <MDBDropdownItem key={ship.name}>
                  <MDBDropdownItem link href={ship.url}>
                    {ship.name}
                  </MDBDropdownItem>
                </MDBDropdownItem>
              ))}
            </ul>
          </MDBDropdownItem>
        )}
        {props.command && (
          <MDBDropdownItem>
            <MDBDropdownItem link href="#">
              Command Ships <MDBIcon fas icon="caret-right" />
            </MDBDropdownItem>
            <ul className="dropdown-menu dropdown-submenu bg-dark">
              {props.command.map((ship) => (
                <MDBDropdownItem key={ship.name}>
                  <MDBDropdownItem link href={ship.url}>
                    {ship.name}
                  </MDBDropdownItem>
                </MDBDropdownItem>
              ))}
            </ul>
          </MDBDropdownItem>
        )}
      </ul>
    </MDBDropdownItem>
  );
};

export default Battlecruiser;
