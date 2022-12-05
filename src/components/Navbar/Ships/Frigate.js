import { MDBDropdownItem, MDBIcon } from "mdb-react-ui-kit";

const Frigate = (props) => {
  return (
    <MDBDropdownItem>
      <MDBDropdownItem link href="#">
        Frigate Class <MDBIcon fas icon="caret-right" />
      </MDBDropdownItem>
      <ul className="dropdown-menu dropdown-submenu">
        <MDBDropdownItem>
          <MDBDropdownItem link href="#">
            Frigate <MDBIcon fas icon="caret-right" />
          </MDBDropdownItem>
          <ul className="dropdown-menu dropdown-submenu">
            {props.frigate.map((frig) => (
              <MDBDropdownItem>
                <MDBDropdownItem link href={frig.url}>
                  {frig.name}
                </MDBDropdownItem>
              </MDBDropdownItem>
            ))}
          </ul>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <MDBDropdownItem link href="#">
            Navy Frigate <MDBIcon fas icon="caret-right" />
          </MDBDropdownItem>
          <ul className="dropdown-menu dropdown-submenu">
            {props.navy.map((frig) => (
              <MDBDropdownItem>
                <MDBDropdownItem link href={frig.url}>
                  {frig.name}
                </MDBDropdownItem>
              </MDBDropdownItem>
            ))}
          </ul>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <MDBDropdownItem link href="#">
            Interceptor <MDBIcon fas icon="caret-right" />
          </MDBDropdownItem>
          <ul className="dropdown-menu dropdown-submenu">
            {props.interceptor.map((frig) => (
              <MDBDropdownItem>
                <MDBDropdownItem link href={frig.url}>
                  {frig.name}
                </MDBDropdownItem>
              </MDBDropdownItem>
            ))}
          </ul>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <MDBDropdownItem link href="#">
            Assualt Frigate <MDBIcon fas icon="caret-right" />
          </MDBDropdownItem>
          <ul className="dropdown-menu dropdown-submenu">
            {props.assault.map((frig) => (
              <MDBDropdownItem>
                <MDBDropdownItem link href={frig.url}>
                  {frig.name}
                </MDBDropdownItem>
              </MDBDropdownItem>
            ))}
          </ul>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <MDBDropdownItem link href="#">
            Covert Ops <MDBIcon fas icon="caret-right" />
          </MDBDropdownItem>
          <ul className="dropdown-menu dropdown-submenu">
            {props.covert.map((frig) => (
              <MDBDropdownItem>
                <MDBDropdownItem link href={frig.url}>
                  {frig.name}
                </MDBDropdownItem>
              </MDBDropdownItem>
            ))}
          </ul>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <MDBDropdownItem link href="#">
            Eletronic Attack Ship <MDBIcon fas icon="caret-right" />
          </MDBDropdownItem>
          <ul className="dropdown-menu dropdown-submenu">
            {props.elecattack.map((frig) => (
              <MDBDropdownItem>
                <MDBDropdownItem link href={frig.url}>
                  {frig.name}
                </MDBDropdownItem>
              </MDBDropdownItem>
            ))}
          </ul>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <MDBDropdownItem link href="#">
            Logistic Frigate <MDBIcon fas icon="caret-right" />
          </MDBDropdownItem>
          <ul className="dropdown-menu dropdown-submenu">
            {props.logi.map((frig) => (
              <MDBDropdownItem>
                <MDBDropdownItem link href={frig.url}>
                  {frig.name}
                </MDBDropdownItem>
              </MDBDropdownItem>
            ))}
          </ul>
        </MDBDropdownItem>
      </ul>
    </MDBDropdownItem>
  );
};

export default Frigate;
