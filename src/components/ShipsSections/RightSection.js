const RightSection = (props) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h3>Ship Description</h3>
      <h5>{props.ship.description.replace("<i>", "").replace("</i>", "")}</h5>
    </div>
  );
};

export default RightSection;
