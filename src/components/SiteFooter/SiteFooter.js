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
          backgroundColor: "#e9e9e9",
          textAlign: "center",
          fontWeight: "bold",
          color: "grey",
          paddingBottom: "25px",
        }}
      >
        © 2022 Copyright:
        <a href="https://skipptekk.com/"> SkippTekk</a>
      </div>
    </Container>
  );
};
export default SiteFooter;
