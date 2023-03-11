import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

export const Footer = (): JSX.Element => {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section>
        <MDBContainer className="text-center text-md-start mt-5 pt-3 border-top border-2">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                Biscuits Industrial
              </h6>
              <p>
                Fan made website for helping new bros understand or just anyone
                that wants to get into industry!
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Devs</h6>
              <p>
                <a href="https://discord.com/users/267920707248193537">
                  <MDBIcon fab icon="discord" /> I Like Biscuits
                </a>
              </p>
              <p>
                <a
                  href="https://discord.com/users/79597898202882048"
                  target="_blank"
                >
                  <MDBIcon fab icon="discord" /> Xylr
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Site Tech</h6>
              <p>
                <MDBIcon fas icon="database" /> by Steve
              </p>
              <p>
                <MDBIcon fab icon="react" size="lg" /> ReactJS
              </p>
              <p>
                <MDBIcon fab icon="mdb" size="lg" /> for ReactJS
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Links</h6>
              <p>
                <a
                  href="https://discord.gg/kksqmuu"
                  target="__blank"
                  className="text-secondary"
                >
                  <MDBIcon fab icon="discord" /> Discord
                </a>
              </p>
              <p>
                <a
                  href="https://twitter.com/BiscuitsIndust1"
                  target="__blank"
                  className="text-secondary"
                >
                  <MDBIcon fab icon="twitter" /> Twitter
                </a>
              </p>
              <p>
                <a
                  href="https://github.com/SkippTekk"
                  target="__blank"
                  className="text-secondary"
                >
                  <MDBIcon fab icon="github" /> Github
                </a>
              </p>
              <p>
                <a
                  href="https://developers.eveonline.com/resource/resources"
                  target="__blank"
                  className="text-secondary"
                >
                  <MDBIcon fas icon="database" /> Database
                </a>
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        <div>
          <MDBIcon far icon="copyright" /> 2023 Copyright:
          <a className="text-reset fw-bold" href="https://skipptekk.com/">
            SkippTekk
          </a>
        </div>
        <div style={{ fontSize: "10px", marginTop: "15px" }}>
          EVE Online and the EVE logo are the registered trademarks of CCP hf.
          All rights are reserved worldwide. All other trademarks are the
          property of their respective owners. EVE Online, the EVE logo, EVE and
          all associated logos and designs are the intellectual property of CCP
          hf. All artwork, screenshots, characters, vehicles, storylines, world
          facts or other recognizable features of the intellectual property
          relating to these trademarks are likewise the intellectual property of
          CCP hf. CCP hf. has granted permission to EVE University to use EVE
          Online and all associated logos and designs for promotional and
          information purposes on its website but does not endorse, and is not
          in any way affiliated with, EVE University. CCP is in no way
          responsible for the content on or functioning of this website, nor can
          it be liable for any damage arising from the use of this website.
        </div>
      </div>
    </MDBFooter>
  );
};
