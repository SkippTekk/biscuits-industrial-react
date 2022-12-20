const RightSection = (props) => {
  return (
    <div style={{ textAlign: "center", marginTop: "5px" }}>
      <h3>Ship Description</h3>
      <h5>
        {props.ship.description
          .replaceAll("<i>", "")
          .replaceAll("</i>", "")
          .replaceAll("<br>", "")
          .replace(/(<a\shref=showinfo:[0-9]+\W\W[0-9]+>)/gi, "")
          .replaceAll("</a>", "")}
      </h5>
    </div>
  );
};

export default RightSection;
