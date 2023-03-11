import { SelectPicker } from "rsuite";
import { useDispatch, useSelector } from "react-redux";
import { shipManuActions } from "../components/store/shipmanu-slice";

const opts = ["Tier 1", "Tier 2"].map((opt) => ({
  label: opt,
  value: opt,
}));

const CitadelRig = () => {
  const dispatch = useDispatch();
  const citRig = useSelector((state) => state.shipManu.citadelRig);

  const handleSelect = (opt) => {
    dispatch(shipManuActions.setCitadelRig(opt));
  };

  const handleClean = () => {
    dispatch(shipManuActions.setCitadelRig(null));
  };

  return (
    <div style={{ margin: "10px", padding: "5px" }}>
      <h4>
        Select{" "}
        <a
          href="https://wiki.eveuniversity.org/Fitting_upwell_structures"
          style={{ textDecoration: "underline" }}
          target="_blank"
          rel="noreferrer"
        >
          Citadel Rig
        </a>{" "}
        tier
      </h4>
      <SelectPicker
        data={opts}
        searchable={false}
        onSelect={handleSelect}
        onClean={handleClean}
        value={citRig}
        style={{ width: "150px" }}
      />
    </div>
  );
};
export default CitadelRig;
