import { SelectPicker } from "rsuite";
import { useDispatch, useSelector } from "react-redux";
import { shipManuActions } from "../components/store/shipmanu-slice";

const opts = ["Highsec", "Lowsec", "Nullsec", "Wormhole"].map((opt) => ({
  label: opt,
  value: opt,
}));

const Location = () => {
  const dispatch = useDispatch();
  const loc = useSelector((state) => state.shipManu.location);

  const handleSelect = (opt) => {
    dispatch(shipManuActions.setLocation(opt));
  };

  const handleClean = () => {
    dispatch(shipManuActions.setLocation(null));
  };

  return (
    <div style={{ margin: "10px", padding: "5px" }}>
      <h4>Select your Location</h4>
      <SelectPicker
        data={opts}
        searchable={false}
        onSelect={handleSelect}
        onClean={handleClean}
        value={loc}
        style={{ width: "150px" }}
      />
    </div>
  );
};
export default Location;
