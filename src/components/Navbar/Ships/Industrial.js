import { MDBDropdownItem, MDBIcon } from "mdb-react-ui-kit";

const Industrial = (props) => {
  return (
    <MDBDropdownItem>
      <MDBDropdownItem link href="#">
        Industrial Class <MDBIcon fas icon="caret-right" />
      </MDBDropdownItem>
      <ul className="dropdown-menu dropdown-submenu bg-dark">
        <MDBDropdownItem>
          <MDBDropdownItem link href="#">
            {props.industrial.includes("Orca") ? "Industrial" : "Command Ship"}{" "}
            <MDBIcon fas icon="caret-right" />
          </MDBDropdownItem>
          <ul className="dropdown-menu dropdown-submenu bg-dark">
            {props.industrial.map((ship) => (
              <MDBDropdownItem key={ship.name}>
                <MDBDropdownItem link href={ship.url}>
                  {ship.name}
                </MDBDropdownItem>
              </MDBDropdownItem>
            ))}
          </ul>
        </MDBDropdownItem>
        {props.transport && (
          <MDBDropdownItem>
            <MDBDropdownItem link href="#">
              Transport Ship <MDBIcon fas icon="caret-right" />
            </MDBDropdownItem>
            <ul className="dropdown-menu dropdown-submenu bg-dark">
              {props.transport.map((ship) => (
                <MDBDropdownItem key={ship.name}>
                  <MDBDropdownItem link href={ship.url}>
                    {ship.name}
                  </MDBDropdownItem>
                </MDBDropdownItem>
              ))}
            </ul>
          </MDBDropdownItem>
        )}
        {props.freighter && (
          <MDBDropdownItem>
            <MDBDropdownItem link href="#">
              Freighter <MDBIcon fas icon="caret-right" />
            </MDBDropdownItem>
            <ul className="dropdown-menu dropdown-submenu bg-dark">
              {props.freighter.map((ship) => (
                <MDBDropdownItem key={ship.name}>
                  <MDBDropdownItem link href={ship.url}>
                    {ship.name}
                  </MDBDropdownItem>
                </MDBDropdownItem>
              ))}
            </ul>
          </MDBDropdownItem>
        )}
        {props.jump && (
          <MDBDropdownItem>
            <MDBDropdownItem link href="#">
              Jump Freighter <MDBIcon fas icon="caret-right" />
            </MDBDropdownItem>
            <ul className="dropdown-menu dropdown-submenu bg-dark">
              {props.jump.map((ship) => (
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

export default Industrial;
