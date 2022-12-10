import { MDBDropdownItem, MDBIcon } from "mdb-react-ui-kit";

const Capital = (props) => {
  return (
    <MDBDropdownItem>
      <MDBDropdownItem link href="#">
        Capital Class <MDBIcon fas icon="caret-right" />
      </MDBDropdownItem>
      <ul className="dropdown-menu dropdown-submenu bg-dark">
        {props.dread && (
          <MDBDropdownItem>
            <MDBDropdownItem link href="#">
              Dreadnought <MDBIcon fas icon="caret-right" />
            </MDBDropdownItem>
            <ul className="dropdown-menu dropdown-submenu bg-dark">
              {props.dread.map((ship) => (
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
              Navy Dreadnought <MDBIcon fas icon="caret-right" />
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
        {props.carrier && (
          <MDBDropdownItem>
            <MDBDropdownItem link href="#">
              Carrier <MDBIcon fas icon="caret-right" />
            </MDBDropdownItem>
            <ul className="dropdown-menu dropdown-submenu bg-dark">
              {props.carrier.map((ship) => (
                <MDBDropdownItem key={ship.typeName}>
                  <MDBDropdownItem link href={`/ship/${ship.typeName}`}>
                    {ship.typeName}
                  </MDBDropdownItem>
                </MDBDropdownItem>
              ))}
            </ul>
          </MDBDropdownItem>
        )}
        {props.titan && (
          <MDBDropdownItem>
            <MDBDropdownItem link href="#">
              Titan <MDBIcon fas icon="caret-right" />
            </MDBDropdownItem>
            <ul className="dropdown-menu dropdown-submenu bg-dark">
              {props.titan.map((ship) => (
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

export default Capital;
