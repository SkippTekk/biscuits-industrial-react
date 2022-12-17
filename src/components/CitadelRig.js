import { SelectPicker } from "rsuite";

const opts = ["0%", "5%", "10%", "15%"].map((opt) => ({
  label: opt,
  value: opt,
}));

const CitadelRig = () => {
  return (
    <div style={{ margin: "10px", padding: "5px" }}>
      <h4>What's the Citadel Rig?</h4>
      <SelectPicker data={opts} searchable={false} />
    </div>
  );
};
export default CitadelRig;
