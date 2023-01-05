import { InputNumber } from "rsuite";
import { useDispatch, useSelector } from "react-redux";
import { shipManuActions } from "../components/store/shipmanu-slice";

const BuildCount = () => {
  const dispatch = useDispatch();
  const buildQuantity = useSelector((state) => state.shipManu.buildQuantity);

  const handleChange = (opt) => {
    dispatch(shipManuActions.setBuildQuantity(opt));
  };

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
      <h4>How many ships are being built?</h4>
      <div style={{ width: "150px" }}>
        <InputNumber
          size="sm"
          placeholder="0"
          max={1000}
          min={1}
          onChange={handleChange}
          value={buildQuantity}
        />
      </div>
    </div>
  );
};
export default BuildCount;
