import { MDBDropdownItem, MDBIcon } from "mdb-react-ui-kit";

const Frigate = (props) => {
  return (
    <MDBDropdownItem>
      <MDBDropdownItem link href="#">
        Frigate Class <MDBIcon fas icon="caret-right" />
      </MDBDropdownItem>
      <ul className="dropdown-menu dropdown-submenu bg-dark">
        <MDBDropdownItem>
          <MDBDropdownItem link href="#">
            Frigate <MDBIcon fas icon="caret-right" />
          </MDBDropdownItem>
          <ul className="dropdown-menu dropdown-submenu bg-dark">
            {props.frigate.map((ship) => (
              <MDBDropdownItem key={ship.name}>
                <MDBDropdownItem link href={ship.url}>
                  {ship.name}
                </MDBDropdownItem>
              </MDBDropdownItem>
            ))}
          </ul>
        </MDBDropdownItem>
        {props.expedition && (
          <MDBDropdownItem>
            <MDBDropdownItem link href="#">
              Expedition Frigate <MDBIcon fas icon="caret-right" />
            </MDBDropdownItem>
            <ul className="dropdown-menu dropdown-submenu bg-dark">
              {props.expedition.map((ship) => (
                <MDBDropdownItem key={ship.name}>
                  <MDBDropdownItem link href={ship.url}>
                    {ship.name}
                  </MDBDropdownItem>
                </MDBDropdownItem>
              ))}
            </ul>
          </MDBDropdownItem>
        )}
        {props.navy && (
          <MDBDropdownItem>
            <MDBDropdownItem link href="#">
              Navy Frigate <MDBIcon fas icon="caret-right" />
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
        )}
        {props.interceptor && (
          <MDBDropdownItem>
            <MDBDropdownItem link href="#">
              Interceptor <MDBIcon fas icon="caret-right" />
            </MDBDropdownItem>
            <ul className="dropdown-menu dropdown-submenu bg-dark">
              {props.interceptor.map((ship) => (
                <MDBDropdownItem key={ship.name}>
                  <MDBDropdownItem link href={ship.url}>
                    {ship.name}
                  </MDBDropdownItem>
                </MDBDropdownItem>
              ))}
            </ul>
          </MDBDropdownItem>
        )}
        {props.assault && (
          <MDBDropdownItem>
            <MDBDropdownItem link href="#">
              Assualt Frigate <MDBIcon fas icon="caret-right" />
            </MDBDropdownItem>
            <ul className="dropdown-menu dropdown-submenu bg-dark">
              {props.assault.map((ship) => (
                <MDBDropdownItem key={ship.name}>
                  <MDBDropdownItem link href={ship.url}>
                    {ship.name}
                  </MDBDropdownItem>
                </MDBDropdownItem>
              ))}
            </ul>
          </MDBDropdownItem>
        )}
        {props.covert && (
          <MDBDropdownItem>
            <MDBDropdownItem link href="#">
              Covert Ops <MDBIcon fas icon="caret-right" />
            </MDBDropdownItem>
            <ul className="dropdown-menu dropdown-submenu bg-dark">
              {props.covert.map((ship) => (
                <MDBDropdownItem key={ship.name}>
                  <MDBDropdownItem link href={ship.url}>
                    {ship.name}
                  </MDBDropdownItem>
                </MDBDropdownItem>
              ))}
            </ul>
          </MDBDropdownItem>
        )}
        {props.elecattack && (
          <MDBDropdownItem>
            <MDBDropdownItem link href="#">
              Eletronic Attack Ship <MDBIcon fas icon="caret-right" />
            </MDBDropdownItem>
            <ul className="dropdown-menu dropdown-submenu bg-dark">
              {props.elecattack.map((ship) => (
                <MDBDropdownItem key={ship.name}>
                  <MDBDropdownItem link href={ship.url}>
                    {ship.name}
                  </MDBDropdownItem>
                </MDBDropdownItem>
              ))}
            </ul>
          </MDBDropdownItem>
        )}
        {props.logi && (
          <MDBDropdownItem>
            <MDBDropdownItem link href="#">
              Logistic Frigate <MDBIcon fas icon="caret-right" />
            </MDBDropdownItem>
            <ul className="dropdown-menu dropdown-submenu bg-dark">
              {props.logi.map((ship) => (
                <MDBDropdownItem key={ship.name}>
                  <MDBDropdownItem link href={ship.url}>
                    {ship.name}
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

export default Frigate;
