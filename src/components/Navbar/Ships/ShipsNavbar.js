import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdb-react-ui-kit";

const ShipNavbar = () => {
  return (
    <MDBNavbar expand="lg" dark bgColor="dark">
      <MDBContainer fluid>
        <MDBNavbarNav>
          <MDBNavbarItem>
            <MDBDropdown>
              <MDBDropdownToggle tag="a" className="nav-link">
                Amarr
              </MDBDropdownToggle>
              <MDBDropdownMenu>
                <MDBDropdownItem>
                  <MDBDropdownItem link href="#">
                    Submenu &raquo;
                  </MDBDropdownItem>
                  <ul className="dropdown-menu dropdown-submenu">
                    <MDBDropdownItem>
                      <MDBDropdownItem>Submenu item 1</MDBDropdownItem>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                      <MDBDropdownItem>Submenu item 2</MDBDropdownItem>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                      <MDBDropdownItem href="#">
                        Submenu item 3 &raquo;
                      </MDBDropdownItem>
                      <ul className="dropdown-menu dropdown-submenu">
                        <MDBDropdownItem>
                          <MDBDropdownItem href="#">
                            Multi level 1
                          </MDBDropdownItem>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                          <MDBDropdownItem href="#">
                            Multi level 2
                          </MDBDropdownItem>
                        </MDBDropdownItem>
                      </ul>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                      <MDBDropdownItem link href="#">
                        Submenu item 4
                      </MDBDropdownItem>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                      <MDBDropdownItem link href="#">
                        Submenu item 5
                      </MDBDropdownItem>
                    </MDBDropdownItem>
                  </ul>
                </MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavbarItem>
        </MDBNavbarNav>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default ShipNavbar;
