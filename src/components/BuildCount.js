import { InputNumber } from "rsuite";

const BuildCount = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "10px",
        padding: "5px",
      }}
    >
      <h4>How many ships being built?</h4>
      <div style={{ width: "75px" }}>
        <InputNumber size="sm" placeholder="0" max={1000} min={0} />
      </div>
    </div>
  );
};
export default BuildCount;
