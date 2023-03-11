import { Container } from "rsuite";

const SiteFooter = () => {
  return (
    <Container>
      <div
        style={{
          display: "flex",
          flexDirection: "col",
          width: "100%",
          justifyContent: "center",
          backgroundColor: "#e9e9e9",
          paddingTop: "20px",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            width: "300px",
            textAlign: "center",
            margin: "20px",
            padding: "20px",
          }}
        >
          <h4>Biscuits Industrial</h4>
          <p>
            Fan made website for helping new bros understand or just anyone that
            wants to get into industry!
          </p>
        </div>
        <div
          style={{
            display: "flex",
            width: "300px",
            textAlign: "center",
            margin: "20px",
            padding: "20px",
          }}
        >
          <div style={{ width: "200px", marginRight: "20px" }}>
            <h4>Devs</h4>
            <p>I Like Biscuits</p>
            <p>
              <a href="https://discordapp.com/users/79597898202882048">
                Xylr#0781
              </a>
            </p>
          </div>
          <div style={{ width: "300px", marginLeft: "20px" }}>
            <h4>Site Tech</h4>
            <p>Database provided by Steve</p>
            <p>Reactjs</p>
          </div>
        </div>
        <div
          style={{
            width: "300px",
            textAlign: "center",
            margin: "20px",
            padding: "20px",
          }}
        >
          <h4>Contact</h4>
          <p>
            <a href="https://discord.gg/kksqmuu" target="__blank">
              Discord
            </a>
          </p>
          <p>
            <a href="https://twitter.com/BiscuitsIndust1" target="__blank">
              Twitter
            </a>
          </p>
          <p>
            <a href="https://github.com/SkippTekk" target="__blank">
              GitHub
            </a>
          </p>
          <p>
            <a
              href="https://developers.eveonline.com/resource/resources"
              target="__blank"
            >
              Eve Online
            </a>
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#e9e9e9",
          fontWeight: "bold",
          color: "grey",
          paddingBottom: "25px",
        }}
      >
        <div>
          © 2022 Copyright:
          <a href="https://skipptekk.com/"> SkippTekk</a>
        </div>
        <div>
          <p
            style={{
              fontSize: "10px",
              textAlign: "center",
              width: "1000px",
              marginTop: "10px",
            }}
          >
            EVE Online and the EVE logo are the registered trademarks of CCP hf.
            All rights are reserved worldwide. All other trademarks are the
            property of their respective owners. EVE Online, the EVE logo, EVE
            and all associated logos and designs are the intellectual property
            of CCP hf. All artwork, screenshots, characters, vehicles,
            storylines, world facts or other recognizable features of the
            intellectual property relating to these trademarks are likewise the
            intellectual property of CCP hf. CCP hf. has granted permission to
            EVE University to use EVE Online and all associated logos and
            designs for promotional and information purposes on its website but
            does not endorse, and is not in any way affiliated with, EVE
            University. CCP is in no way responsible for the content on or
            functioning of this website, nor can it be liable for any damage
            arising from the use of this website.
          </p>
        </div>
      </div>
    </Container>
  );
};
export default SiteFooter;
