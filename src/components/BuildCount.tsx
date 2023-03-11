import React from "react";

export default (): JSX.Element => {
  return (
    <div className="BuildCount">
      <legend>How many ships being built?</legend>
      <select className="forum-select" id="ShipCount"></select>
    </div>
  );
};
