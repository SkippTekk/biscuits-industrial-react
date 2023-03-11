import React from "react";
import { Helmet } from "react-helmet";

interface DynamicMeta extends React.PropsWithChildren<any> {
  url?: string;
  ship?: string;
  img?: string;
  desc?: string;
}

export default (props: DynamicMeta): JSX.Element => {
  return (
    <Helmet>
      <meta property="og:url" content={props.url} />
      <meta
        property="og:title"
        content={
          props.ship
            ? `Skipptekk | How to build a ${props.ship}`
            : `Skipptekk | Home`
        }
      />
      <meta property="og:description" content={props.desc} />
      <meta property="og:image" content={props.img} />
      <title>
        {props.ship
          ? `Skipptekk | How to build a ${props.ship}`
          : `Skipptekk | Home`}
      </title>
    </Helmet>
  );
};
