import { MDBDropdownItem, MDBIcon } from "mdb-react-ui-kit";

const Destroyer = (props) => {
  return (
    <MDBDropdownItem>
      <MDBDropdownItem link href="#">
        Destoryer Class <MDBIcon fas icon="caret-right" />
      </MDBDropdownItem>
      <ul className="dropdown-menu dropdown-submenu bg-dark">
        <MDBDropdownItem>
          <MDBDropdownItem link href="#">
            Destroyer <MDBIcon fas icon="caret-right" />
          </MDBDropdownItem>
          <ul className="dropdown-menu dropdown-submenu bg-dark">
            {props.destroyer.map((ship) => (
              <MDBDropdownItem key={ship.name}>
                <MDBDropdownItem link href={ship.url}>
                  {ship.name}
                </MDBDropdownItem>
              </MDBDropdownItem>
            ))}
          </ul>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <MDBDropdownItem link href="#">
            Navy Destroyer <MDBIcon fas icon="caret-right" />
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
        <MDBDropdownItem>
          <MDBDropdownItem link href="#">
            Interdictor <MDBIcon fas icon="caret-right" />
          </MDBDropdownItem>
          <ul className="dropdown-menu dropdown-submenu bg-dark">
            {props.interdictor.map((ship) => (
              <MDBDropdownItem key={ship.name}>
                <MDBDropdownItem link href={ship.url}>
                  {ship.name}
                </MDBDropdownItem>
              </MDBDropdownItem>
            ))}
          </ul>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <MDBDropdownItem link href="#">
            Command Destroyers <MDBIcon fas icon="caret-right" />
          </MDBDropdownItem>
          <ul className="dropdown-menu dropdown-submenu bg-dark">
            {props.commdestroyer.map((ship) => (
              <MDBDropdownItem key={ship.name}>
                <MDBDropdownItem link href={ship.url}>
                  {ship.name}
                </MDBDropdownItem>
              </MDBDropdownItem>
            ))}
          </ul>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <MDBDropdownItem link href="#">
            Tactical Destroyer <MDBIcon fas icon="caret-right" />
          </MDBDropdownItem>
          <ul className="dropdown-menu dropdown-submenu bg-dark">
            {props.tacdestroyer.map((ship) => (
              <MDBDropdownItem key={ship.name}>
                <MDBDropdownItem link href={ship.url}>
                  {ship.name}
                </MDBDropdownItem>
              </MDBDropdownItem>
            ))}
          </ul>
        </MDBDropdownItem>
      </ul>
    </MDBDropdownItem>
  );
};

export default Destroyer;