import { MDBDropdownItem, MDBIcon } from "mdb-react-ui-kit";

const Cruiser = (props) => {
  return (
    <MDBDropdownItem>
      <MDBDropdownItem link href="#">
        Cruiser Class <MDBIcon fas icon="caret-right" />
      </MDBDropdownItem>
      <ul className="dropdown-menu dropdown-submenu">
        <MDBDropdownItem>
          <MDBDropdownItem link href="#">
            Cruiser <MDBIcon fas icon="caret-right" />
          </MDBDropdownItem>
          <ul className="dropdown-menu dropdown-submenu">
            {props.cruiser.map((cruiser) => (
              <MDBDropdownItem>
                <MDBDropdownItem link href={cruiser.url}>
                  {cruiser.name}
                </MDBDropdownItem>
              </MDBDropdownItem>
            ))}
          </ul>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <MDBDropdownItem link href="#">
            Navy Cruiser <MDBIcon fas icon="caret-right" />
          </MDBDropdownItem>
          <ul className="dropdown-menu dropdown-submenu">
            {props.navy.map((cruiser) => (
              <MDBDropdownItem>
                <MDBDropdownItem link href={cruiser.url}>
                  {cruiser.name}
                </MDBDropdownItem>
              </MDBDropdownItem>
            ))}
          </ul>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <MDBDropdownItem link href="#">
            Recon Ship <MDBIcon fas icon="caret-right" />
          </MDBDropdownItem>
          <ul className="dropdown-menu dropdown-submenu">
            {props.recon.map((cruiser) => (
              <MDBDropdownItem>
                <MDBDropdownItem link href={cruiser.url}>
                  {cruiser.name}
                </MDBDropdownItem>
              </MDBDropdownItem>
            ))}
          </ul>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <MDBDropdownItem link href="#">
            Heavy Assult Cruiser <MDBIcon fas icon="caret-right" />
          </MDBDropdownItem>
          <ul className="dropdown-menu dropdown-submenu">
            {props.heavy.map((cruiser) => (
              <MDBDropdownItem>
                <MDBDropdownItem link href={cruiser.url}>
                  {cruiser.name}
                </MDBDropdownItem>
              </MDBDropdownItem>
            ))}
          </ul>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <MDBDropdownItem link href="#">
            Logistics <MDBIcon fas icon="caret-right" />
          </MDBDropdownItem>
          <ul className="dropdown-menu dropdown-submenu">
            {props.logi.map((cruiser) => (
              <MDBDropdownItem>
                <MDBDropdownItem link href={cruiser.url}>
                  {cruiser.name}
                </MDBDropdownItem>
              </MDBDropdownItem>
            ))}
          </ul>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <MDBDropdownItem link href="#">
            Strategic Cruiser <MDBIcon fas icon="caret-right" />
          </MDBDropdownItem>
          <ul className="dropdown-menu dropdown-submenu">
            {props.strat.map((cruiser) => (
              <MDBDropdownItem>
                <MDBDropdownItem link href={cruiser.url}>
                  {cruiser.name}
                </MDBDropdownItem>
              </MDBDropdownItem>
            ))}
          </ul>
        </MDBDropdownItem>
      </ul>
    </MDBDropdownItem>
  );
};

export default Cruiser;
