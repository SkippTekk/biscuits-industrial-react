import { SelectPicker } from "rsuite";

const opts = ["Highsec", "Lowsec", "Nullsec", "Wormhole"].map((opt) => ({
  label: opt,
  value: opt,
}));

const Location = () => {
  return (
    <div style={{ margin: "10px", padding: "5px" }}>
      <h4>Select your Location</h4>
      <SelectPicker data={opts} searchable={false} />
    </div>
  );
};
export default Location;
