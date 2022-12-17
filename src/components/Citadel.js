import { SelectPicker } from "rsuite";

const opts = [
  "Asthrahus",
  "Athanor",
  "Azbel",
  "Fortizar",
  "Keepstar",
  "Raitaru",
  "Sotiyo",
  "Tatara",
].map((opt) => ({ label: opt, value: opt }));

const Citadel = () => {
  return (
    <div style={{ margin: "10px", padding: "5px" }}>
      <h4>Select your Citadel</h4>
      <SelectPicker data={opts} searchable={false} />
    </div>
  );
};
export default Citadel;
