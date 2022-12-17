import { SelectPicker } from "rsuite";

const opts = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"].map((opt) => ({
  label: opt,
  value: opt,
}));

const BPO = () => {
  return (
    <div>
      <h4>What's your ME BPO number</h4>
      <SelectPicker data={opts} searchable={false} />
    </div>
  );
};
export default BPO;
