import { SelectPicker } from "rsuite";
import { useDispatch } from "react-redux";
import { shipManuActions } from "../components/store/shipmanu-slice";

const opts = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"].map((opt) => ({
  label: opt,
  value: opt,
}));

const BPO = () => {
  const dispatch = useDispatch();

  const handleSelect = (opt) => {
    if (opt < 10) {
      dispatch(shipManuActions.setBpoME(parseInt(`0.0${opt}`)));
    } else {
      dispatch(shipManuActions.setBpoME(+opt));
    }
  };

  return (
    <div>
      <h4>What's your ME BPO number</h4>
      <SelectPicker data={opts} searchable={false} onSelect={handleSelect} />
    </div>
  );
};
export default BPO;
