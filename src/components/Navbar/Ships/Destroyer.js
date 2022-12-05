import { MDBDropdownItem, MDBIcon } from "mdb-react-ui-kit";

const Destroyer = (props) => {
  return (
    <MDBDropdownItem>
      <MDBDropdownItem link href="#">
        Destoryer Class <MDBIcon fas icon="caret-right" />
      </MDBDropdownItem>
      <ul className="dropdown-menu dropdown-submenu">
        <MDBDropdownItem>
          <MDBDropdownItem link href="#">
            Destroyer <MDBIcon fas icon="caret-right" />
          </MDBDropdownItem>
          <ul className="dropdown-menu dropdown-submenu">
            {props.destroyer.map((destroyer) => (
              <MDBDropdownItem>
                <MDBDropdownItem link href={destroyer.url}>
                  {destroyer.name}
                </MDBDropdownItem>
              </MDBDropdownItem>
            ))}
          </ul>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <MDBDropdownItem link href="#">
            Interdictor <MDBIcon fas icon="caret-right" />
          </MDBDropdownItem>
          <ul className="dropdown-menu dropdown-submenu">
            {props.interdictor.map((destroyer) => (
              <MDBDropdownItem>
                <MDBDropdownItem link href={destroyer.url}>
                  {destroyer.name}
                </MDBDropdownItem>
              </MDBDropdownItem>
            ))}
          </ul>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <MDBDropdownItem link href="#">
            Command Destroyers <MDBIcon fas icon="caret-right" />
          </MDBDropdownItem>
          <ul className="dropdown-menu dropdown-submenu">
            {props.commdestroyer.map((destroyer) => (
              <MDBDropdownItem>
                <MDBDropdownItem link href={destroyer.url}>
                  {destroyer.name}
                </MDBDropdownItem>
              </MDBDropdownItem>
            ))}
          </ul>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <MDBDropdownItem link href="#">
            Tactical Destroyer <MDBIcon fas icon="caret-right" />
          </MDBDropdownItem>
          <ul className="dropdown-menu dropdown-submenu">
            {props.tacdestroyer.map((destroyer) => (
              <MDBDropdownItem>
                <MDBDropdownItem link href={destroyer.url}>
                  {destroyer.name}
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
