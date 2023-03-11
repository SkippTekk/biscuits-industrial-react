import React from "react";
import { useState, useEffect } from "react";

export default (): JSX.Element => {
  const [timer, setTimer] = useState(new Date());

  const tick = (): void => {
    setTimer(new Date(new Date().toLocaleString("en", { timeZone: "UTC" })));
  };

  useEffect(() => {
    let timerID: NodeJS.Timer = setInterval((): void => {
      tick();
    }, 1000);

    return (): void => {
      clearInterval(timerID);
    };
  });

  return <div className="container">{timer.toLocaleTimeString()}</div>;
};
