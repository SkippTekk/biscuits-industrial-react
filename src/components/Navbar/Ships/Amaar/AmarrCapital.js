import { MDBDropdownItem, MDBIcon } from "mdb-react-ui-kit";

const AmarrCapital = () => {
  return (
    <MDBDropdownItem>
      <MDBDropdownItem link href="#">
        Capital Class <MDBIcon fas icon="caret-right" />
      </MDBDropdownItem>
      <ul className="dropdown-menu dropdown-submenu">
        <MDBDropdownItem>
          <MDBDropdownItem link href="#">
            Dreadnought <MDBIcon fas icon="caret-right" />
          </MDBDropdownItem>
          <ul className="dropdown-menu dropdown-submenu">
            <MDBDropdownItem>
              <MDBDropdownItem link>Revelation</MDBDropdownItem>
            </MDBDropdownItem>
          </ul>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <MDBDropdownItem link href="#">
            Carrier <MDBIcon fas icon="caret-right" />
          </MDBDropdownItem>
          <ul className="dropdown-menu dropdown-submenu">
            <MDBDropdownItem>
              <MDBDropdownItem link>Apostle</MDBDropdownItem>
            </MDBDropdownItem>
            <MDBDropdownItem>
              <MDBDropdownItem link href="#">
                Aeon
              </MDBDropdownItem>
            </MDBDropdownItem>
            <MDBDropdownItem>
              <MDBDropdownItem link href="#">
                Archon
              </MDBDropdownItem>
            </MDBDropdownItem>
          </ul>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <MDBDropdownItem link href="#">
            Interceptor <MDBIcon fas icon="caret-right" />
          </MDBDropdownItem>
          <ul className="dropdown-menu dropdown-submenu">
            <MDBDropdownItem>
              <MDBDropdownItem link>Crusader</MDBDropdownItem>
            </MDBDropdownItem>
            <MDBDropdownItem>
              <MDBDropdownItem link href="#">
                Malediction
              </MDBDropdownItem>
            </MDBDropdownItem>
          </ul>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <MDBDropdownItem link href="#">
            Titan <MDBIcon fas icon="caret-right" />
          </MDBDropdownItem>
          <ul className="dropdown-menu dropdown-submenu">
            <MDBDropdownItem>
              <MDBDropdownItem link>Avatar</MDBDropdownItem>
            </MDBDropdownItem>
          </ul>
        </MDBDropdownItem>
      </ul>
    </MDBDropdownItem>
  );
};

export default AmarrCapital;
