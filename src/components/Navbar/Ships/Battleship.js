import { MDBDropdownItem, MDBIcon } from "mdb-react-ui-kit";

const Battleship = (props) => {
  return (
    <MDBDropdownItem>
      <MDBDropdownItem link href="#">
        Battleship Class <MDBIcon fas icon="caret-right" />
      </MDBDropdownItem>
      <ul className="dropdown-menu dropdown-submenu bg-dark">
        <MDBDropdownItem>
          <MDBDropdownItem link href="#">
            Battleship <MDBIcon fas icon="caret-right" />
          </MDBDropdownItem>
          <ul className="dropdown-menu dropdown-submenu bg-dark">
            {props.battle.map((ship) => (
              <MDBDropdownItem key={ship.name}>
                <MDBDropdownItem link href={ship.url}>
                  {ship.name}
                </MDBDropdownItem>
              </MDBDropdownItem>
            ))}
          </ul>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <MDBDropdownItem link href="#">
            Navy Battleship <MDBIcon fas icon="caret-right" />
          </MDBDropdownItem>
          <ul className="dropdown-menu dropdown-submenu bg-dark">
            {props.navy.map((ship) => (
              <MDBDropdownItem key={ship.name}>
                <MDBDropdownItem link href={ship.url}>
                  {ship.name}
                </MDBDropdownItem>
              </MDBDropdownItem>
            ))}
          </ul>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <MDBDropdownItem link href="#">
            Black Ops <MDBIcon fas icon="caret-right" />
          </MDBDropdownItem>
          <ul className="dropdown-menu dropdown-submenu bg-dark">
            {props.blackops.map((ship) => (
              <MDBDropdownItem key={ship.name}>
                <MDBDropdownItem link href={ship.url}>
                  {ship.name}
                </MDBDropdownItem>
              </MDBDropdownItem>
            ))}
          </ul>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <MDBDropdownItem link href="#">
            Marauder <MDBIcon fas icon="caret-right" />
          </MDBDropdownItem>
          <ul className="dropdown-menu dropdown-submenu bg-dark">
            {props.marauder.map((ship) => (
              <MDBDropdownItem key={ship.name}>
                <MDBDropdownItem link href={ship.url}>
                  {ship.name}
                </MDBDropdownItem>
              </MDBDropdownItem>
            ))}
          </ul>
        </MDBDropdownItem>
      </ul>
    </MDBDropdownItem>
  );
};

export default Battleship;
