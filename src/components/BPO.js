import { SelectPicker } from "rsuite";
import { useDispatch, useSelector } from "react-redux";
import { shipManuActions } from "../components/store/shipmanu-slice";

const opts = [
  "0%",
  "1%",
  "2%",
  "3%",
  "4%",
  "5%",
  "6%",
  "7%",
  "8%",
  "9%",
  "10%",
].map((opt) => ({
  label: opt,
  value: opt,
}));

const BPO = () => {
  const dispatch = useDispatch();
  const bpoME = useSelector((state) => state.shipManu.bpoME);

  const convertBpoME = () => {
    if (bpoME === null) {
      return null;
    }

    if (bpoME < 0.1) {
      return bpoME.toString().replace("0.0", "") + "%";
    } else {
      return bpoME.toString().replace("0.", "") + "%";
    }
  };

  const handleSelect = (opt) => {
    if (opt && opt.replace("%", "") < 10) {
      dispatch(shipManuActions.setBpoME(`0.0${+opt.replace("%", "")}`));
    } else {
      dispatch(shipManuActions.setBpoME(`0.${+opt.replace("%", "")}`));
    }
  };

  const handleClean = () => {
    dispatch(shipManuActions.setBpoME(null));
  };

  return (
    <div>
      <h4>
        What is the blue print{" "}
        <a
          href="https://wiki.eveuniversity.org/Research#:~:text=Material%20Efficiency%20(ME)%20research%20reduces,item%20is%20likely%20to%20be."
          style={{ textDecoration: "underline" }}
          target="_blank"
          rel="noreferrer"
        >
          Material Efficiency?
        </a>
      </h4>
      <SelectPicker
        data={opts}
        searchable={false}
        onSelect={handleSelect}
        onClean={handleClean}
        value={convertBpoME()}
        style={{ width: "150px" }}
      />
    </div>
  );
};
export default BPO;
