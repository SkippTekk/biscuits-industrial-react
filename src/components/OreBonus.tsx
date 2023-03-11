import React from "react";

export default (): JSX.Element => {
  return (
    <div className="OreBonus">
      <legend>Ore Bonus</legend>
      <select>
        <option value="0">0%</option>
        <option value="5">5%</option>
        <option value="10">10%</option>
        <option value="15">15%</option>
      </select>
    </div>
  );
};
