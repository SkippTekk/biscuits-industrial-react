import { MDBDropdownItem, MDBIcon } from "mdb-react-ui-kit";

const Cruiser = (props) => {
  return (
    <MDBDropdownItem>
      <MDBDropdownItem link href="#">
        Cruiser Class <MDBIcon fas icon="caret-right" />
      </MDBDropdownItem>
      <ul className="dropdown-menu dropdown-submenu bg-dark">
        {props.cruiser && (
          <MDBDropdownItem>
            <MDBDropdownItem link href="#">
              Cruiser <MDBIcon fas icon="caret-right" />
            </MDBDropdownItem>
            <ul className="dropdown-menu dropdown-submenu bg-dark">
              {props.cruiser.map((ship) => (
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
              Navy Cruiser <MDBIcon fas icon="caret-right" />
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
        {props.recon && (
          <MDBDropdownItem>
            <MDBDropdownItem link href="#">
              Recon Ship <MDBIcon fas icon="caret-right" />
            </MDBDropdownItem>
            <ul className="dropdown-menu dropdown-submenu bg-dark">
              {props.recon.map((ship) => (
                <MDBDropdownItem key={ship.typeName}>
                  <MDBDropdownItem link href={`/ship/${ship.typeName}`}>
                    {ship.typeName}
                  </MDBDropdownItem>
                </MDBDropdownItem>
              ))}
            </ul>
          </MDBDropdownItem>
        )}
        {props.heavy && (
          <MDBDropdownItem>
            <MDBDropdownItem link href="#">
              Heavy Assult Cruiser <MDBIcon fas icon="caret-right" />
            </MDBDropdownItem>
            <ul className="dropdown-menu dropdown-submenu bg-dark">
              {props.heavy.map((ship) => (
                <MDBDropdownItem key={ship.typeName}>
                  <MDBDropdownItem link href={`/ship/${ship.typeName}`}>
                    {ship.typeName}
                  </MDBDropdownItem>
                </MDBDropdownItem>
              ))}
            </ul>
          </MDBDropdownItem>
        )}
        {props.interdiction && (
          <MDBDropdownItem>
            <MDBDropdownItem link href="#">
              Heavy Interdiction Cruiser <MDBIcon fas icon="caret-right" />
            </MDBDropdownItem>
            <ul className="dropdown-menu dropdown-submenu bg-dark">
              {props.interdiction.map((ship) => (
                <MDBDropdownItem key={ship.typeName}>
                  <MDBDropdownItem link href={`/ship/${ship.typeName}`}>
                    {ship.typeName}
                  </MDBDropdownItem>
                </MDBDropdownItem>
              ))}
            </ul>
          </MDBDropdownItem>
        )}
        {props.logi && (
          <MDBDropdownItem>
            <MDBDropdownItem link href="#">
              Logistics <MDBIcon fas icon="caret-right" />
            </MDBDropdownItem>
            <ul className="dropdown-menu dropdown-submenu bg-dark">
              {props.logi.map((ship) => (
                <MDBDropdownItem key={ship.typeName}>
                  <MDBDropdownItem link href={`/ship/${ship.typeName}`}>
                    {ship.typeName}
                  </MDBDropdownItem>
                </MDBDropdownItem>
              ))}
            </ul>
          </MDBDropdownItem>
        )}
        {props.strat && (
          <MDBDropdownItem>
            <MDBDropdownItem link href="#">
              Strategic Cruiser <MDBIcon fas icon="caret-right" />
            </MDBDropdownItem>
            <ul className="dropdown-menu dropdown-submenu bg-dark">
              {props.strat.map((ship) => (
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

export default Cruiser;
