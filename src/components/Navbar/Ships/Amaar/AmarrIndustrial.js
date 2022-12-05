import { MDBDropdownItem, MDBIcon } from "mdb-react-ui-kit";

const AmarrIndustrial = () => {
  return (
    <MDBDropdownItem>
      <MDBDropdownItem link href="#">
        Industrial Class <MDBIcon fas icon="caret-right" />
      </MDBDropdownItem>
      <ul className="dropdown-menu dropdown-submenu">
        <MDBDropdownItem>
          <MDBDropdownItem link href="#">
            Industrial <MDBIcon fas icon="caret-right" />
          </MDBDropdownItem>
          <ul className="dropdown-menu dropdown-submenu">
            <MDBDropdownItem>
              <MDBDropdownItem link>Sigil</MDBDropdownItem>
            </MDBDropdownItem>
            <MDBDropdownItem>
              <MDBDropdownItem link href="#">
                Bestower
              </MDBDropdownItem>
            </MDBDropdownItem>
          </ul>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <MDBDropdownItem link href="#">
            Transport Ship <MDBIcon fas icon="caret-right" />
          </MDBDropdownItem>
          <ul className="dropdown-menu dropdown-submenu">
            <MDBDropdownItem>
              <MDBDropdownItem link>Prorator</MDBDropdownItem>
            </MDBDropdownItem>
            <MDBDropdownItem>
              <MDBDropdownItem link href="#">
                Impel
              </MDBDropdownItem>
            </MDBDropdownItem>
          </ul>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <MDBDropdownItem link href="#">
            Freighter <MDBIcon fas icon="caret-right" />
          </MDBDropdownItem>
          <ul className="dropdown-menu dropdown-submenu">
            <MDBDropdownItem>
              <MDBDropdownItem link>Providence</MDBDropdownItem>
            </MDBDropdownItem>
          </ul>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <MDBDropdownItem link href="#">
            Jump Freighter <MDBIcon fas icon="caret-right" />
          </MDBDropdownItem>
          <ul className="dropdown-menu dropdown-submenu">
            <MDBDropdownItem>
              <MDBDropdownItem link>Ark</MDBDropdownItem>
            </MDBDropdownItem>
          </ul>
        </MDBDropdownItem>
      </ul>
    </MDBDropdownItem>
  );
};

export default AmarrIndustrial;
