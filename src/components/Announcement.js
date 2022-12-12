import { Message } from "rsuite";

const Announcement = () => {
  return (
    <Message type="success" style={{ marginBottom: "20px" }}>
      <h4>Hello!</h4>
      <p>
        Website is now the latest version!. Feel free to join my{" "}
        <a href="https://discord.gg/kksqmuu" target="__blank">
          Discord
        </a>{" "}
        for updates!
      </p>
      <hr />
      <p>
        Welcome! If you wanna help, you can join the discord above or go to the{" "}
        <a
          target="__blank"
          href="https://github.com/SkippTekk/Biscuits-Industrial-EJS"
        >
          GitHub
        </a>{" "}
        and offer some code!
      </p>
    </Message>
  );
};
export default Announcement;
