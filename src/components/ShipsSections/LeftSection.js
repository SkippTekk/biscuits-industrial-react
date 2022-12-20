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
          src={`https://images.evetech.net/types/${props.ship.typeID}/render`}
          style={{
            maxWidth: "80%",
            maxHeight: "80%",
            borderRadius: "15px",
          }}
          alt={`${props.ship.typeName} | ${props.ship.marketGroupName} ${props.ship.groupName}`}
        />
      </a>
      <h3>Default values of the ship:</h3>
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
      <hr />
      <div style={{ textAlign: "center", marginTop: "5px" }}>
        <h3>Ship Description</h3>
        <h5>{props.ship.description.replaceAll("<i>", "")}</h5>
      </div>
    </div>
  );
};

export default LeftSection;
