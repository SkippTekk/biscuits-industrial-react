import React from "react";

export const About = (): JSX.Element => {
  document.title = "About Biscuits Industrial";
  return (
    <div>
      Hosted website uptime is: uptime <p></p>
      Average server load: load <p></p>
      Server Operating system is: type <p></p>
      Server memory left: memoryLeft / memoryTotal
    </div>
  );
};
