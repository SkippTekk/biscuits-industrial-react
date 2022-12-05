import { MDBDropdownItem, MDBIcon } from "mdb-react-ui-kit";

const AmarrBattleCruiser = () => {
  return (
    <MDBDropdownItem>
      <MDBDropdownItem link href="#">
        Battlecrusier Class <MDBIcon fas icon="caret-right" />
      </MDBDropdownItem>
      <ul className="dropdown-menu dropdown-submenu">
        <MDBDropdownItem>
          <MDBDropdownItem link href="#">
            Battlecruiser <MDBIcon fas icon="caret-right" />
          </MDBDropdownItem>
          <ul className="dropdown-menu dropdown-submenu">
            <MDBDropdownItem>
              <MDBDropdownItem link>Prophecy</MDBDropdownItem>
            </MDBDropdownItem>
            <MDBDropdownItem>
              <MDBDropdownItem link href="#">
                Harbinger
              </MDBDropdownItem>
            </MDBDropdownItem>
            <MDBDropdownItem>
              <MDBDropdownItem link href="#">
                Oracle
              </MDBDropdownItem>
            </MDBDropdownItem>
          </ul>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <MDBDropdownItem link href="#">
            Navy Battleship <MDBIcon fas icon="caret-right" />
          </MDBDropdownItem>
          <ul className="dropdown-menu dropdown-submenu">
            <MDBDropdownItem>
              <MDBDropdownItem link>Harbinger Navy Issue</MDBDropdownItem>
            </MDBDropdownItem>
          </ul>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <MDBDropdownItem link href="#">
            Command Ships <MDBIcon fas icon="caret-right" />
          </MDBDropdownItem>
          <ul className="dropdown-menu dropdown-submenu">
            <MDBDropdownItem>
              <MDBDropdownItem link>Absolution</MDBDropdownItem>
            </MDBDropdownItem>
            <MDBDropdownItem>
              <MDBDropdownItem link href="#">
                Damnation
              </MDBDropdownItem>
            </MDBDropdownItem>
          </ul>
        </MDBDropdownItem>
      </ul>
    </MDBDropdownItem>
  );
};

export default AmarrBattleCruiser;
