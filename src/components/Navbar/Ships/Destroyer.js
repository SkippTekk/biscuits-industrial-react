import { MDBDropdownItem, MDBIcon } from "mdb-react-ui-kit";

const Destroyer = (props) => {
  return (
    <MDBDropdownItem>
      <MDBDropdownItem link href="#">
        Destroyer Class <MDBIcon fas icon="caret-right" />
      </MDBDropdownItem>
      <ul className="dropdown-menu dropdown-submenu bg-dark">
        {props.destroyer && (
          <MDBDropdownItem>
            <MDBDropdownItem link href="#">
              Destroyer <MDBIcon fas icon="caret-right" />
            </MDBDropdownItem>
            <ul className="dropdown-menu dropdown-submenu bg-dark">
              {props.destroyer.map((ship) => (
                <MDBDropdownItem key={ship.typeName}>
                  <MDBDropdownItem link href={`/ship/${ship.typeName}`}>
                    {ship.typeName}
                  </MDBDropdownItem>
                </MDBDropdownItem>
              ))}
            </ul>
          </MDBDropdownItem>
        )}
        {props.navy && (
          <MDBDropdownItem>
            <MDBDropdownItem link href="#">
              Navy Destroyer <MDBIcon fas icon="caret-right" />
            </MDBDropdownItem>
            <ul className="dropdown-menu dropdown-submenu bg-dark">
              {props.navy.map((ship) => (
                <MDBDropdownItem key={ship.typeName}>
                  <MDBDropdownItem link href={`/ship/${ship.typeName}`}>
                    {ship.typeName}
                  </MDBDropdownItem>
                </MDBDropdownItem>
              ))}
            </ul>
          </MDBDropdownItem>
        )}
        {props.interdictor && (
          <MDBDropdownItem>
            <MDBDropdownItem link href="#">
              Interdictor <MDBIcon fas icon="caret-right" />
            </MDBDropdownItem>
            <ul className="dropdown-menu dropdown-submenu bg-dark">
              {props.interdictor.map((ship) => (
                <MDBDropdownItem key={ship.typeName}>
                  <MDBDropdownItem link href={`/ship/${ship.typeName}`}>
                    {ship.typeName}
                  </MDBDropdownItem>
                </MDBDropdownItem>
              ))}
            </ul>
          </MDBDropdownItem>
        )}
        {props.commdestroyer && (
          <MDBDropdownItem>
            <MDBDropdownItem link href="#">
              Command Destroyers <MDBIcon fas icon="caret-right" />
            </MDBDropdownItem>
            <ul className="dropdown-menu dropdown-submenu bg-dark">
              {props.commdestroyer.map((ship) => (
                <MDBDropdownItem key={ship.typeName}>
                  <MDBDropdownItem link href={`/ship/${ship.typeName}`}>
                    {ship.typeName}
                  </MDBDropdownItem>
                </MDBDropdownItem>
              ))}
            </ul>
          </MDBDropdownItem>
        )}
        {props.tacdestroyer && (
          <MDBDropdownItem>
            <MDBDropdownItem link href="#">
              Tactical Destroyer <MDBIcon fas icon="caret-right" />
            </MDBDropdownItem>
            <ul className="dropdown-menu dropdown-submenu bg-dark">
              {props.tacdestroyer.map((ship) => (
                <MDBDropdownItem key={ship.typeName}>
                  <MDBDropdownItem link href={`/ship/${ship.typeName}`}>
                    {ship.typeName}
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

export default Destroyer;
