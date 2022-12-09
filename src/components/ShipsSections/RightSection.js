const RightSection = (props) => {
  return (
    <div className="text-center">
      <h3 className="mb-5">Ship Description</h3>
      <h5>{props.ship.description.replace("<i>", "").replace("</i>", "")}</h5>
    </div>
  );
};

export default RightSection;
