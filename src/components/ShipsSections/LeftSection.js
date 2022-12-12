const LeftSection = (props) => {
  return (
    <div style={{ textAlign: "center" }}>
      <a
        href={`https://wiki.eveuniversity.org/${props.ship.typeName}`}
        target="__blank"
        alt={`${props.ship.typeName} | ${props.ship.marketGroupName} ${props.ship.groupName}`}
      >
        <img
          type="image"
          target="__blank"
          src={`https://image.testeveonline.com/Render/${props.ship.typeID}_512.png`}
          style={{
            maxWidth: "80%",
            maxHeight: "80%",
            borderRadius: "15px",
          }}
          alt={`${props.ship.typeName} | ${props.ship.marketGroupName} ${props.ship.groupName}`}
        />
      </a>
      <h2>Default values of the ship:</h2>
      <h5>
        <strong>Ship Capacitor:</strong>{" "}
        {props.ship.capacity.toLocaleString("en-US")} MW{" "}
      </h5>
      <h5>
        <strong>Ship Mass:</strong> {props.ship.mass.toLocaleString("en-US")} m3
      </h5>
      <h5>
        <strong>Ship Volume:</strong>{" "}
        {props.ship.volume.toLocaleString("en-US")} m3
      </h5>
      <h5>
        <strong>Ship Base Price:</strong>{" "}
        {Math.floor(props.ship.basePrice).toLocaleString("en-US")} isk
      </h5>
      <h5>
        <strong>Group ID:</strong> {props.ship.groupID}
      </h5>
    </div>
  );
};

export default LeftSection;
