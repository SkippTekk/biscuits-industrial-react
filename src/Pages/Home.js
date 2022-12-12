import DynamicMeta from "../components/DynamicMeta";
import { FlexboxGrid, Col, Row, Container, Content } from "rsuite";

const Home = () => {
  return (
    <>
      <DynamicMeta
        title="Biscuits Industrial Spreadsheets In Space"
        url="https://skipptekk.com"
        desc="A fan made project for Eve Online! Help support the project with the Patron! https://www.patreon.com/bePatron?u=178136"
        img="https://images.evetech.net/characters/95046472/portrait"
      />
      <div className="show-grid">
        <FlexboxGrid justify="center">
          <FlexboxGrid.Item as={Col} lg={8} colspan={26} order={1}>
            <Container>
              <Content style={{ textAlign: "center" }}>
                <iframe
                  title="Discord Widget"
                  src="https://discordapp.com/widget?id=656049566046748694&theme=dark"
                  width="60%"
                  height="600px"
                  allowtransparency="true"
                  sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                  style={{ borderRadius: "15px" }}
                />
                <div className="text-center mt-3">
                  <span>Stay connected or check up on the updates:</span>
                </div>
              </Content>
            </Container>
          </FlexboxGrid.Item>
          <FlexboxGrid.Item as={Col} lg={8} colspan={26} order={2}>
            <Container>
              <Content style={{ textAlign: "center" }}>
                <h1>Welcome</h1>
                <p>
                  Welcome to my website! It's currently being developed so
                  please. Don't hate it too much. I'm a very new coder (haven't
                  made a website in about 6 years or so) and i have forgotten it
                  all. So please. This is a refresher for me! If you wish to
                  give me a hand, that would be awesome! :D
                </p>
                <p>
                  The only ones are working are in the Navbar for Frigate Class,
                  nothing else works right now.
                </p>
                <p>
                  Warning! This website is in Dev mode so LITTLE progess will be
                  given, It's being made by someone with barely any knowledge on
                  Html, php and java. Thanks Mike for helping me get this
                  started!
                </p>
                <p>
                  If you wish to help, you can help me with pointers by mailing
                  any of the toons left and right, or send isk to Biscuits on
                  the right side Donations are appreciated and lets me know who
                  is interested. (it's classified unless you tell me in the
                  donation you want to be known)
                </p>
                <p>
                  I have also create a{" "}
                  <a
                    target="__blank"
                    href="https://www.patreon.com/BiscuitsIndustrial"
                  >
                    Patreon{" "}
                  </a>
                  for anyone that wishes to assist on building the website, Or
                  if it helped you out in any way!
                </p>
                <p>
                  <a
                    href="https://www.patreon.com/bePatron?u=178136"
                    data-patreon-widget-type="become-patron-button"
                  >
                    Become a Patron!
                  </a>
                </p>
                <p>
                  Or if you wish not to spend real money, feel free to send Isk
                  as a donation with a description with "Biscuits Industry" and
                  hopefully I can get you a cool icon on the website for future
                  use :)
                </p>
              </Content>
            </Container>
          </FlexboxGrid.Item>
          <FlexboxGrid.Item as={Col} lg={8} colspan={26} order={3}>
            <Container>
              <Content style={{ textAlign: "center" }}>
                <h4 className="media-heading">I Like Biscuits.</h4>
                <a
                  href="https://evewho.com/character/95046472"
                  target="__blank"
                >
                  <img
                    type="image"
                    className="media-object text-center"
                    src="https://images.evetech.net/characters/95046472/portrait"
                    style={{
                      maxWidth: "80%",
                      maxHeight: "80%",
                      borderRadius: "15px",
                    }}
                    alt="Ship Image goes Here, Mail SkippTekk or tweet @XGKIPPY for a fix"
                  />
                </a>
              </Content>
            </Container>
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </div>
    </>
  );
};
export default Home;
