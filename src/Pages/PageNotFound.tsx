import React from "react";
import "../css/404.css";

export const PageNotFound = (): JSX.Element => {
  document.title = "(╯°□°）╯︵ ┻━┻";
  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <h3>Damn it Jim</h3>
          <h1>
            <span>4</span>
            <span>0</span>
            <span>4</span>
          </h1>
        </div>
        <h2>Now look at what you have done....</h2>
      </div>
    </div>
  );
};
