import { Helmet } from "react-helmet";

const DynamicMeta = (props) => {
  return (
    <Helmet>
      <title>
        Skipptekk.com |{" "}
        {props.ship ? `How to craft ${props.ship}` : "Eve Online Spreadsheets"}
      </title>
      <meta property="og:url" content={props.url} />
      <meta
        property="og:title"
        content={`Skipptekk.com | How to build a ${props.ship}`}
      />
      <meta
        property="og:description"
        content="Curated by Biscuits Industrial for Eve Online"
      />
      <meta property="og:image" content={props.img} />
    </Helmet>
  );
};

export default DynamicMeta;
